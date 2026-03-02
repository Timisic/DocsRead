const IMAGE_EXT_RE = /\.(png|jpe?g|gif|webp|svg|avif)(\?.*)?$/i;

function isElement(node, tagName) {
  return node?.type === 'element' && node.tagName === tagName;
}

function isImageHref(href) {
  return typeof href === 'string' && IMAGE_EXT_RE.test(href);
}

function normalizeImageNode(node) {
  node.properties ||= {};
  if (!node.properties.loading) node.properties.loading = 'lazy';
  if (!node.properties.decoding) node.properties.decoding = 'async';
  if (!node.properties.referrerpolicy) node.properties.referrerpolicy = 'no-referrer';

  const className = node.properties.className;
  if (Array.isArray(className)) {
    if (!className.includes('doc-image')) className.push('doc-image');
  } else if (typeof className === 'string') {
    if (!className.includes('doc-image')) node.properties.className = `${className} doc-image`;
  } else {
    node.properties.className = ['doc-image'];
  }
}

function tryConvertStandaloneImageLink(node) {
  if (!isElement(node, 'p') || !Array.isArray(node.children) || node.children.length !== 1) {
    return;
  }

  const child = node.children[0];
  if (!isElement(child, 'a')) return;

  const href = child.properties?.href;
  if (!isImageHref(href)) return;

  const text = child.children?.[0];
  const hasOnlyLinkText = text?.type === 'text' && text.value?.trim() === href;
  if (!hasOnlyLinkText) return;

  node.tagName = 'figure';
  node.properties ||= {};
  node.properties.className = ['doc-image-figure'];
  node.children = [
    {
      type: 'element',
      tagName: 'img',
      properties: {
        src: href,
        alt: '',
      },
      children: [],
    },
  ];
}

function visitTree(node) {
  if (!node || !Array.isArray(node.children)) return;

  for (const child of node.children) {
    if (isElement(child, 'img')) {
      normalizeImageNode(child);
    } else if (isElement(child, 'p')) {
      tryConvertStandaloneImageLink(child);
      if (isElement(child.children?.[0], 'img')) {
        normalizeImageNode(child.children[0]);
      }
    }

    visitTree(child);
  }
}

export function rehypeImageEnhance() {
  return tree => {
    visitTree(tree);
  };
}
