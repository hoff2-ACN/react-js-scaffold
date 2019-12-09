import Chance from 'chance';

const chance = new Chance();

describe('the chat server', () => {
    const url = "http://localhost:8080/message";

    it('gives a chat history', () => {
        const expectedMessage = chance.string();

        const json = {"message": expectedMessage};

        cy.request('POST', url, json);

        cy.request(url)
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
            .its('body')
            .should('have.length', 1)
            .should('include', expectedMessage);
    });
});
