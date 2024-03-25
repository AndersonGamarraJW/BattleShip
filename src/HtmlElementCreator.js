const HtmlElementCreator = (() => {
  let htmlElement;
  const setTagElement = (htmlTagName) => {
    htmlElement = document.createElement(htmlTagName);
  };
  const setId = (idName) => {
    htmlElement.id = idName;
    return this;
  };
  const addClassName = (className) => {
    htmlElement.classList.add(className);
    return this;
  };
  const getValue = () => htmlElement;
  return {
    setTagElement,
    setId,
    addClassName,
    getValue,
  };
})();

module.exports = HtmlElementCreator;
