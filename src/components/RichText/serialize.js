const serializeNode = (node) => {
  if (Text.isText(node)) {
    if (node.italic && node.bold) { return `***${node.text}***`; }
    if (node.bold) { return `**${node.text}**`; }
    if (node.italic) { return `*${node.text}*`; }
    return node.text;
  }

  const children = node.children.map(n => serializeNode(n)).join('\n');

  if (children.length === 0) { return ''; }

  switch (node.type) {
    case 'heading-one':
      return `# ${children}`;
    case 'heading-two':
      return `## ${children}`;
    case 'quote':
      return `> ${children}`;
    case 'link':
      return `(${children})[node.url]`;
    default:
      return children;
  }
};

const serialize = nodes =>
  nodes.map(n => serializeNode(n)).join('\n');

export default serialize;
