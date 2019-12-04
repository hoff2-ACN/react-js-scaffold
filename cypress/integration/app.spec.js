/// <reference types="Cypress" />
import Chance from "chance";

const chance = new Chance();

const verifyInputField = selector => {
    const expectedInputValue = chance.string();
    cy.get(selector)
        .type("{selectall}{del}")
        .type(expectedInputValue)
        .should("have.value", expectedInputValue);
};

context("Customer Details", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("has a message input", () => {
        verifyInputField(".message>input");
    });
});
