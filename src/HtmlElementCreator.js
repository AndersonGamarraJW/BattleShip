const HtmlElementCreator = (() => {
  let htmlElement;
  function setTagElement(htmlTagName) {
    htmlElement = document.createElement(htmlTagName);
  }
  function setId(idName) {
    htmlElement.id = idName;
    return this;
  }
  function addClassName(className) {
    htmlElement.classList.add(className);
    return this;
  }
  function getValue() {
    return htmlElement;
  }
  return {
    setTagElement,
    setId,
    addClassName,
    getValue,
  };
})();

module.exports = HtmlElementCreator;
