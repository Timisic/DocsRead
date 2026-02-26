import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://openclaw-docs.example.com',
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-light',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedChars(node) {
            node.properties.className = ['highlighted'];
          },
          onVisitHighlightedLine(node) {
            node.properties.className = ['line--highlighted'];
          },
        },
      ],
    ],
  },
});