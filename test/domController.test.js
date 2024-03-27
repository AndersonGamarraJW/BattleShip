const { describe, test, beforeEach, expect } = require("@jest/globals");

describe("Create table of divs", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <main id="main"></main>
    `;
  });
  test("Create empty tables 6x6 for two players", () => {
    domController.createTable();
    domController.createTable();
    const tableContainers = document.querySelectorAll(".table-container");
    expect(tableContainers.length).toEqual(2);
    tableContainers.forEach((tableContainer) => {
      const rowsContainer = tableContainer.querySelectorAll(".row");
      expect(rowsContainer.length).toEqual(6);
      rowsContainer.forEach((rowContainer) => {
        const columns = rowContainer.querySelectorAll(".column");
        expect(columns.length).toEqual(6);
      });
    });
  });
});
