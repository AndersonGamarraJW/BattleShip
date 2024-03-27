const HtmlElementCreator = require("./HtmlElementCreator.js");
const DomController = (() => {
  const _getColumns = (size) => {
    const columns = new Array(size).fill().map(() => {
      return HtmlElementCreator.setTagElement("div")
        .addClassName("column")
        .getValue();
    });
    return columns;
  };
  const _getRows = (size) => {
    const rows = new Array(size).fill().map(() => {
      const row = HtmlElementCreator.setTagElement("div")
        .addClassName("row")
        .getValue();
      return row;
    });
    return rows;
  };
  const _getTableContainer = () => {
    const tableContainer = HtmlElementCreator.setTagElement("div")
      .addClassName("table-container")
      .getValue();
    return tableContainer;
  };
  const createTable = (size) => {
    const _main = document.getElementById("main");
    const tableContainer = _getTableContainer();
    const rows = _getRows(size);

    rows.forEach((row) => {
      const columns = _getColumns(size);
      columns.forEach((column) => {
        row.appendChild(column);
      });
      tableContainer.appendChild(row);
    });

    _main.appendChild(tableContainer);
  };

  return {
    createTable,
  };
})();

module.exports = DomController;
