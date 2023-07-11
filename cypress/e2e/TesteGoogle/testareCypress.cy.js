
describe('Site Google.com', () => {
    it('functioneaza cu o cautare basic', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('un site de povesti').type('{enter}');

        cy.get('#result-stats').should('exist');
    })
})