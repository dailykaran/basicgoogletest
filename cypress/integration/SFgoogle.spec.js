///// <reference types="Cypress" />

describe('Google page testing', () => {

    it('Google page', function() {
        cy.visit('https://www.google.com')
        cy.get('input[title="Search"]').type('api testing').type('{enter}');
        cy.get('#result-stats').then(($elm) => {
            expect($elm.text()).to.be.include('results');
        })
    })

});
