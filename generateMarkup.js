function appendChildMarkup(markup, child) {
  if (Array.isArray(child)) {
    return `${markup}${generateMarkup(child)}`;
  }
  return `${markup}${child.replace(/</g, '&lt;').replace(/>/g, '&gt;')}`;
}

function generateMarkup([node, ...children]) {
  if (children.length === 0) return `<${node}/>`;
  const innerMarkup = children.reduce(appendChildMarkup, '');
  return `<${node}>${innerMarkup}</${node}>`;
}

module.exports.generateMarkup = generateMarkup;
