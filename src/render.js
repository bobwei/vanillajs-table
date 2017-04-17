/* eslint-disable no-param-reassign */
const render = (el, mountNode) => {
  mountNode.innerHtml = '';
  mountNode.appendChild(el, mountNode);
};

export default render;
