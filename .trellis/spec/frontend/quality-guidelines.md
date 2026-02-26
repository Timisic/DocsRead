# Quality Guidelines

> Code quality standards for frontend development.

---

## Overview

This project follows modern frontend best practices with emphasis on:
- Clean, maintainable code
- Performance optimization
- Accessibility standards
- Responsive design

---

## Forbidden Patterns

### 1. Dark Mode Implementation

**FORBIDDEN**: This project uses light mode only.

```astro
<!-- ❌ Do not add dark mode -->
<script>
const toggleDark = () => {
  document.documentElement.classList.toggle('dark');
};
</script>
```

**Reason**: Design requirement - the site should have a consistent light theme.

---

### 2. External Script Dependencies

**FORBIDDEN**: Loading external scripts from CDNs.

```html
<!-- ❌ Do not use external scripts -->
<script src="https://cdn.jsdelivr.net/npm/some-lib"></script>
```

**Good**: Install via npm and use Astro's bundler.

```js
// ✓ Install: npm install some-lib
import someLib from 'some-lib';
```

---

### 3. Inline Styles for Layout

**FORBIDDEN**: Using inline styles for layout/padding/margin.

```html
<!-- ❌ Do not use inline styles for layout -->
<div style="padding: 20px; margin: 10px;">
```

**Good**: Use Tailwind classes or scoped CSS.

```html
<!-- ✓ Use Tailwind -->
<div class="p-5 m-2.5">
```

---

### 4. Direct DOM Manipulation without Event Delegation

**FORBIDDEN**: Attaching many event listeners individually.

```astro
<script>
// ❌ Inefficient for many elements
document.querySelectorAll('.item').forEach(el => {
  el.addEventListener('click', handleClick);
});
</script>
```

**Good**: Use event delegation.

```astro
<script>
// ✓ Single listener handles all items
document.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    handleClick(e);
  }
});
</script>
```

---

## Required Patterns

### 1. Content Collections for Data

**REQUIRED**: Use Astro Content Collections for markdown content.

```astro
---
// ✓ Use Content Collections
import { getCollection, getEntry } from 'astro:content';
const docs = await getCollection('docs');
const entry = await getEntry('docs', 'path/to/doc');
---
```

---

### 2. Type-Safe Data Access

**REQUIRED**: Define content schema in `src/content/config.ts`.

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { docs };
```

---

### 3. Responsive Design

**REQUIRED**: Use Tailwind's responsive prefixes.

```html
<!-- Desktop: visible, Mobile: hidden -->
<div class="hidden md:block">Desktop content</div>

<!-- Mobile: visible, Desktop: hidden -->
<div class="block md:hidden">Mobile content</div>

<!-- Responsive sizing -->
<div class="w-full md:w-1/2 lg:w-1/3">Responsive width</div>
```

---

### 4. Semantic HTML

**REQUIRED**: Use appropriate semantic elements.

```html
<!-- ✓ Good -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>
</main>

<!-- ❌ Avoid -->
<div class="nav">
  <div class="item"><a href="/">Home</a></div>
</div>
```

---

## Code Standards

### File Size Limits

- Components: Keep under 200 lines when possible
- Pages: Keep under 300 lines
- Split into smaller components if needed

### Function Naming

- Use descriptive names (`handleMobileMenuToggle`, not `toggle`)
- Event handlers: `handle` prefix or clear verb (`onSubmit`, `handleClick`)

### Comments

- Comment **why**, not **what**
- Explain complex logic only
- No comments for obvious code

```js
// ✓ Good: explains the reason
// We use setTimeout to avoid layout thrashing during transition
setTimeout(() => updateLayout(), 0);

// ❌ Bad: explains the obvious
// This adds 1 to the count
count++;
```

---

## Testing Requirements

Currently no automated tests are required for this static documentation site.

**Manual testing checklist:**
- [ ] All links work
- [ ] Mobile responsive
- [ ] Search functions correctly
- [ ] Code copy button works
- [ ] Build succeeds (`npm run build`)

---

## Performance Guidelines

### 1. Static Rendering

All content is statically pre-rendered by default for optimal performance.

### 2. Lazy Loading

Use Astro's `client:load`, `client:visible` directives judiciously for client components.

```astro
<HeavyComponent client:visible />
```

### 3. Image Optimization

Use `<Image />` component for images (if any are added).

### 4. CSS Optimization

- Use PurgeCSS (included with Tailwind)
- Avoid large CSS frameworks
- Minimize inline styles

---

## Code Review Checklist

Before submitting code:

- [ ] Build succeeds (`npm run build`)
- [ ] No console errors in browser
- [ ] Mobile responsive tested
- [ ] Accessibility: semantic HTML used
- [ ] No forbidden patterns present
- [ ] Components follow structure guidelines
- [ ] Styles use Tailwind or scoped CSS
- [ ] No external script dependencies
- [ ] Code is clean and readable

---

## Common Issues

### Issue: Build Fails with "Type Error"

**Cause**: TypeScript type mismatch in Content Collections.

**Fix**: Check `src/content/config.ts` schema matches markdown frontmatter.

### Issue: Mobile Menu Doesn't Work

**Cause**: Script runs before DOM is ready.

**Fix**: Wrap in `DOMContentLoaded` event listener.

```astro
<script>
document.addEventListener('DOMContentLoaded', () => {
  // Safe to access DOM
});
</script>
```

### Issue: Search Doesn't Find Content

**Cause**: Content not indexed or wrong search logic.

**Fix**: Ensure search uses Content Collections data, not client-side DOM scraping.

---

**Language**: English