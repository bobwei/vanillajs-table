const createElement = (type, props, children) => {
  const el = document.createElement(type);
  Object
    .keys(props)
    .filter(key => props[key] !== undefined)
    .forEach((key) => {
      if (typeof key === 'function') {
        el[key] = props[key];
      } else {
        el.setAttribute(key, props[key]);
      }
    });
  if (Array.isArray(children)) {
    children.forEach(child => el.appendChild(child));
  } else if (typeof children === 'string' || typeof children === 'number') {
    el.appendChild(document.createTextNode(children));
  } else {
    el.appendChild(children);
  }
  return el;
};

export default createElement;
