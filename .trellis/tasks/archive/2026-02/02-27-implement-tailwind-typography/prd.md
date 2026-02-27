# Implement Tailwind Typography for GitHub-style Markdown

## Goal

Replace custom markdown CSS with Tailwind CSS Typography plugin to achieve GitHub-style markdown rendering.

## Requirements

1. **Install @tailwindcss/typography** plugin
2. **Configure Tailwind** to include the typography plugin
3. **Update DocPage.astro** to use `prose` classes instead of custom `.main-content` styles
4. **Remove redundant CSS** from global.css that duplicates what Typography provides
5. **Preserve custom styles** that are unique (sidebar, code block header, copy button, search results)

## Acceptance Criteria

- [ ] @tailwindcss/typography installed in package.json
- [ ] Typography plugin configured in tailwind.config.js
- [ ] DocPage.astro uses Tailwind `prose` classes for content styling
- [ ] Custom CSS in global.css only contains unique styles (sidebar, code wrapper, etc.)
- [ ] Markdown content renders with beautiful typography
- [ ] Code blocks still work with rehype-pretty-code and syntax highlighting
- [ ] Local dev server runs without errors (`npm run dev`)
- [ ] Build succeeds (`npm run build`)

## Technical Notes

- Use `prose prose-gray max-w-none` classes for the content area
- `prose-gray` provides gray color scheme closest to GitHub style
- Keep GitHub color variables for custom components
- Preserve mobile responsive styles
- Don't remove sidebar, code block header, copy button, search results styles