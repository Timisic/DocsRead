import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import rehypePrettyCode from 'rehype-pretty-code';
import { rehypeCopyButton } from './src/plugins/rehype-copy-button.js';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  site: 'https://docs-read.vercel.app/', // 上线 Vercel 后换成真实域名
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: true,
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className = ['line--highlighted'];
          },
        },
      ],
      rehypeCopyButton,
    ],
  },
});
