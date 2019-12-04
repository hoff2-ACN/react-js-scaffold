/// <reference types="Cypress" />
import Chance from "chance";

const chance = new Chance();

const verifyInputField = field => {
    const expectedInputValue = chance.string();
    field
        .type("{selectall}{del}")
        .type(expectedInputValue)
        .should("have.value", expectedInputValue);
};

context("Customer Details", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    const messageInput = () => cy.get('.message>input');
    const sendButton = () => cy.get('.message>button');
    const messageHistoryView = () => cy.get('.history>textarea');

    it("has a working message input", () => {
        verifyInputField(messageInput());
    });

    it("and a send button", () => {
        expect(sendButton()).to.not.be.empty;
    });

    it("and a message history text area", () => {
        expect(messageHistoryView()).to.not.be.empty;
    });

    it("updates the message history when you enter a message", () => {
        const expectedMessage = chance.string();
        messageInput()
            .type("{selectall}{del}")
            .type(expectedMessage);
        sendButton().click();
        messageHistoryView().invoke('val').then(contents =>
            expect(contents).to.contain(expectedMessage));
    });
});
