// src/plugins/rehype-copy-button.js
// Rehype plugin to add copy button to code blocks

import { visit } from 'unist-util-visit';

export function rehypeCopyButton() {
  return (tree) => {
    const nodesToWrap = [];

    // First pass: collect all pre elements
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'pre') {
        nodesToWrap.push({ node, index, parent });
      }
    });

    // Second pass: wrap them (avoiding infinite loop)
    nodesToWrap.forEach(({ node, index, parent }) => {
      if (!parent || index === undefined) return;

      const wrapper = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['code-block'],
        },
        children: [
          {
            type: 'element',
            tagName: 'button',
            properties: {
              className: ['copy-btn'],
              type: 'button',
              title: '复制代码',
              'aria-label': '复制代码',
            },
            children: [
              {
                type: 'element',
                tagName: 'svg',
                properties: {
                  viewBox: '0 0 24 24',
                  ariaHidden: 'true',
                },
                children: [
                  {
                    type: 'element',
                    tagName: 'path',
                    properties: {
                      d: 'M19,21H8A2,2 0 0,1 6,19V8H8V19H19V21M16,3A2,2 0 0,1 18,5V16A2,2 0 0,1 16,18H5A2,2 0 0,1 3,16V5A2,2 0 0,1 5,3H16M16,5H5V16H16V5Z',
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          node,
        ],
      };

      parent.children[index] = wrapper;
    });
  };
}
