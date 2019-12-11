import Chance from 'chance';

const chance = new Chance();

describe('the chat server', () => {
    const url = "http://127.0.0.1:8081/message";

    it('gives a chat history', () => {
        const expectedMessage = chance.string();
        const json = {"message": expectedMessage};

        cy.request('POST', url, json);

        cy.request('GET', url)
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
        cy.request('GET', url)
            .its('body')
            .should('have.length', 1)
            .should('include', expectedMessage);
    });

    it('makes the messages you send available to others', () => {
        const expectedMessage = chance.string();
        const messageInput = () => cy.get('.message input');
        const sendButton = () => cy.get('.message button');

        cy.visit('/');
        messageInput()
            .type("{selectall}{del}")
            .type(expectedMessage);
        sendButton().click();

        cy.request('GET', url)
            .its('body')
            .should('include', expectedMessage);
    });
});
