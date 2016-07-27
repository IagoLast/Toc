const regex = /\{\{([\s\S]+?(\}?)+)\}\}/g;

export function render(element, data) {
  if (!data || Object.keys(data).length === 0) {
    return element;
  }
  return (typeof element === 'string' ? _replaceString(element, data) : _replaceElement(element, data));
}

function _replaceString(element, data) {
  element.match(regex).map((match) => {
    element = _replace(element, match, data);
  });
  return element;
}

function _replaceElement(element, data) {
  element.innerHTML.match(regex).map((match) => {
    element.innerHTML = _replace(element.innerHTML, match, data);
  });
  element.innerHTML = _replace(element.innerHTML, 't-src', { 't-src': 'src' });
  return element;
}

function _unescape(string) {
  return string.replace('{{', '').replace('}}', '');
}

function _replace(string, code, data) {
  return string.replace(code, data[_unescape(code)]);
}
