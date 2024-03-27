/**
 * @jest-environment jsdom
 */
const { describe, test, beforeEach, expect } = require("@jest/globals");
const domController = require("../src/DomControllerModule.js");
describe("Create table of divs", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <main id="main" class="container"></main>
    `;
  });
  test("Create empty tables 6x6 for two players", () => {
    domController.createTable(6);
    domController.createTable(6);
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
