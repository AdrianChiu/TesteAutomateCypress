describe('Cautare', () => {
    
    // it('AccesareLogin', () => {

        // cy.visit('https://linkedin.com');
        // cy.get('.nav__button-secondary').click();
        // cy.get('#username').type('0729115983');
        // cy.get('#password').type('Peugeot3008');
        // cy.get('.btn__primary--large').click();
        // cy.get('#ember13').should('exist');

        // it('verificare', () =>{

        //     cy.visit('https://www.digi24.ro/stiri/externe');

        //     cy.url().should('include', '/stiri/');


        // })

        // it('se asteapta 5 secunde', () => {

        //     cy.visit('https://google.com');

        //     cy.get('#L2AGLb > .QS5gu').click();

        //     cy.wait(5000);

        //     cy.get('#APjFqb').type('au trecut 5 secunde');
        // })

        // it('selectez folosind un atribut', () => {

        //     cy.visit('https://google.com');

        //     cy.get('#L2AGLb > .QS5gu').click();

        //     cy.get('[alt="Google"]').should('este.vizibil');
        // })
 

        it('verific o valoare din imput', () => {

            cy.visit('https://www.libris.ro/');
            cy.get('#autoCompleteButton').should('have.class', 'onSearchClick');
        })
    })