# Component Guidelines

> How components are built in this project.

---

## Overview

Components in this project are built using **Astro**'s component system. Astro components combine HTML, CSS, and JavaScript in a single `.astro` file. They are pre-rendered by default for performance, with optional client-side hydration when needed.

---

## Component Structure

A standard Astro component follows this pattern:

```astro
---
// 1. Frontmatter (runs on the server)
import { getCollection } from 'astro:content';

// Define props (if applicable)
const { title, currentPath } = Astro.props;

// Data fetching and processing
const data = await someAsyncFunction();
---

<!-- 2. Template (HTML with embedded expressions) -->
<div class="component-name">
  <h1>{title}</h1>
  {data.map(item => <div>{item.name}</div>)}
</div>

<!-- 3. Styles (scoped with :scope()) -->
<style>
  .component-name {
    padding: 1rem;
  }
  :scope(.active) {
    font-weight: bold;
  }
</style>

<!-- 4. Client-side script (optional) -->
<script>
  // Runs in the browser
  document.addEventListener('DOMContentLoaded', () => {
    // Client-side logic here
  });
</script>
```

---

## Props Conventions

Props are accessed via `Astro.props` in the frontmatter:

```astro
---
// Define props inline (no TypeScript props interface in pure Astro)
const { title, description, isActive } = Astro.props;
---

<!-- Use props in template -->
<h1>{title}</h1>
<p class={isActive ? 'text-blue-500' : 'text-gray-500'}>{description}</p>
```

**When passing props:**
```astro
<DocsSidebar
  currentPath={Astro.url.pathname}
  showAll={true}
/>
```

---

## Styling Patterns

### 1. Tailwind CSS (Primary)

Use Tailwind utility classes for styling:

```astro
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click me
</button>
```

### 2. Scoped CSS (Secondary)

For component-specific styles, use the `<style>` tag:

```astro
<style>
  .my-component {
    /* Scoped to this component */
  }
  :scope(.active) {
    /* Child selector */
  }
</style>
```

### 3. Global CSS

Place shared styles in `src/styles/global.css`.

---

## Client-Side Interactivity

When you need interactivity:

1. **Use `<script>` tag** for simple logic:
```astro
<script>
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    alert('Clicked!');
  });
</script>
```

2. **For complex state**, consider adding React/Vue/Preact components.

---

## Accessibility

### Key Requirements

- **Semantic HTML**: Use proper elements (`<nav>`, `<aside>`, `<main>`, `<button>`)
- **ARIA attributes**: Where needed for dynamic content
- **Keyboard navigation**: All interactive elements must be keyboard-accessible
- **Labels**: Buttons and inputs should have clear labels

### Example - Accessible Button

```astro
<button
  id="mobile-menu-toggle"
  aria-label="Open menu"
  aria-expanded="false"
  aria-controls="mobile-sidebar"
>
  <svg>...</svg>
</button>
```

---

## Common Mistakes

### Mistake 1: Forgetting Props Access

**Bad**: Trying to use props directly without `Astro.props`
```astro
---
const title = props.title; // ❌ Wrong
---
```

**Good**: Access via `Astro.props`
```astro
---
const { title } = Astro.props; // ✓ Correct
---
```

### Mistake 2: Using Client-Side APIs in Server Code

**Bad**: Using `document` or `window` in frontmatter
```astro
---
const element = document.querySelector('.foo'); // ❌ Runs on server
---
```

**Good**: Put client code in `<script>` tag
```astro
<script>
  const element = document.querySelector('.foo'); // ✓ Runs in browser
</script>
```

### Mistake 3: Not Scoping Styles

**Bad**: Styles leak to other components
```astro
<style>
  .title {
    color: red; // Affects all .title elements
  }
</style>
```

**Good**: Use `:scope()` or component-specific classes
```astro
<style>
  .my-component .title {
    color: red;
  }
</style>
```

### Mistake 4: Async Without Await

**Bad**: Not awaiting async operations
```astro
---
const docs = getCollection('docs'); // ❌ Returns promise
---
```

**Good**: Await the promise
```astro
---
const docs = await getCollection('docs'); // ✓ Gets data
---
```

---

## Component Examples

### DocsSidebar.astro

- Uses Content Collections to fetch data
- Dynamic navigation based on content
- Current page highlighting
- Works for both desktop and mobile

### SearchBar.astro

- Client-side search functionality
- Real-time results as user types
- Highlights matching text

### CodeBlock.astro

- Copy to clipboard functionality
- Visual feedback after copying
- Error handling for unsupported browsers

---

**Language**: English