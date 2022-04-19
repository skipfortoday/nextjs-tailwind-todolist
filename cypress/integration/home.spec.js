context("Home Page Load", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page and display a message", () => {
    cy.wait(1000);
    cy.get("h1").contains("Todolist Page");
  });

  it("create new task", () => {
    cy.get("[data-cy=createNew]").click();
  });

  it("fill form & create new task ", () => {
    cy.get("[data-cy=taskTitle]").type(" #1");
    cy.get("[data-cy=taskDescription]").type(" #1");
    cy.get("[data-cy=sumbitTask]").click();
    cy.wait(1000);
  });

  it("click currect task & edit ", () => {
    cy.get("[data-cy=todoList1]").click();
    cy.get("[data-cy=taskTitle]").type(" (Edited)");
    cy.get("[data-cy=taskDescription]").type(" (Edited)");
    cy.get("[data-cy=sumbitTask]").click();
    cy.wait(1000);
  });

  it("click task & make clear task ", () => {
    cy.get("[data-cy=todoList1]").click();
    cy.wait(500);
    cy.get("[data-cy=clearTask]").click();
    cy.wait(1000);
  });

  it("click task & delete  ", () => {
    cy.get("[data-cy=todoList2]").click();
    cy.wait(500);
    cy.get("[data-cy=deleteTask]").click();
    cy.wait(1000);
  });
});
