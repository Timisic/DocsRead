# Directory Structure

> How frontend code is organized in this project.

---

## Overview

This project uses **Astro** framework with a component-based architecture for static documentation sites. The structure follows Astro conventions while maintaining clear separation of concerns for layouts, components, pages, and content.

---

## Directory Layout

```
openclaw-docs-site/
├── src/
│   ├── layouts/           # Page layouts (wrappers around content)
│   │   ├── DocsLayout.astro    # Base HTML layout with meta tags
│   │   └── DocPage.astro       # Docs page layout (sidebar + content)
│   ├── components/        # Reusable UI components
│   │   ├── DocsSidebar.astro   # Sidebar navigation
│   │   ├── SearchBar.astro     # Search functionality
│   │   └── CodeBlock.astro     # Code blocks with copy button
│   ├── pages/             # Route handlers
│   │   ├── index.astro         # Homepage
│   │   └── modules/[...slug].astro  # Dynamic docs routes
│   ├── content/           # Content Collections (Markdown files)
│   │   ├── config.ts           # Content collection schema
│   │   └── docs/
│   │       ├── index.md        # Homepage content
│   │       └── modules/*.md    # Documentation pages
│   └── styles/            # Global styles
│       └── global.css          # CSS variables + responsive styles
├── public/               # Static assets (favicon, robots.txt, etc.)
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

---

## Module Organization

### Layouts (`src/layouts/`)

- **DocsLayout.astro**: Base layout with HTML structure, meta tags, and global styles
- **DocPage.astro**: Specific layout for documentation pages with sidebar and search

### Components (`src/components/`)

Each component is a single Astro file with:
- Frontmatter for logic/data fetching
- HTML template
- Optional `<script>` tag for client-side interactivity

### Pages (`src/pages/`)

- Static routes: `index.astro` for homepage
- Dynamic routes: `[...slug].astro` for documentation modules

### Content (`src/content/`)

Using Astro's **Content Collections** for type-safe markdown content:
- `config.ts` defines the collection schema
- Files are automatically indexed and can be queried via `getCollection()`

---

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Component files | PascalCase.astro | `DocsSidebar.astro` |
| Layout files | PascalCase.astro | `DocPage.astro` |
| Page files | PascalCase.astro | `index.astro` |
| Dynamic routes | `[param].astro` | `[...slug].astro` |
| Content files | kebab-case.md | `01-installation.md` |
| CSS classes | kebab-case | `.sidebar`, `.active` |

---

## Content File Naming

Documentation modules use numbered prefixes for ordering:
- `01-installation.md`
- `02-soul-config.md`
- `03-channel-config.md`
- etc.

This ensures consistent sorting when rendered in navigation.

---

## Examples

**Good component structure** (DocsSidebar.astro):
```astro
---
// 1. Frontmatter: imports and data fetching
import { getCollection } from 'astro:content';

const { currentPath } = Astro.props;
const docs = await getCollection('docs');
---

<!-- 2. Template: HTML markup -->
<aside class="sidebar">
  ...
</aside>

<!-- 3. Optional: client-side script -->
<script>
  // Mobile menu toggle logic
</script>
```

**Dynamic route pattern** (modules/[...slug].astro):
```astro
---
// Get entry from content collection
const { slug } = Astro.params;
const entry = await getEntry('docs', `modules/${slug}`);
const { Content } = await entry.render();
---

<Content />
```

---

**Language**: English