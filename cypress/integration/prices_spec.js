context('Checking a price for a chore on Takl', () => {
    it("Can find prices for a chore on Takl", () => {
        cy.visit('https://www.takl.com', {
            onBeforeLoad: (win) => {
            win.sessionStorage.clear()
            }
        })
        cy.get('body > div.main-content > div.landing-panel.panel-home-grid > div > div > a:nth-child(2)').click()
        cy.url().should('include', 'app.takl.com')
        cy.get('#subcategory-113').click()
        Cypress.$('#zipcode-modal').is(':not(:hidden)')
        cy.get('#zipcode-input').type("37034")
        cy.get('button[id="submit-button"]').click()
        //Manual override, Cypress wrapper directs to 404 when supplying zip code
        cy.wait(1000)
        cy.visit('https://app.takl.com/customers/subcategories/113?lng=-86.68125299999997&lat=35.6295968')
        cy.get('#skill-37').click()
        cy.get('#chore-624').contains('Detail 1 car')
        cy.get('#chore-624 > div.chore-panel__top-section > div > div.chore-panel__top-section__main-row__price.ng-scope')
            .contains('$109')
        cy.get('#chore-624').contains('Detail 1 car')
        cy.get('div.chore-panel__top-section__main-row__price.ng-scope')
            .contains('$109')
        cy.get('#chore-625').contains('Detail 1 pickup truck or SUV')
        cy.get('div.chore-panel__top-section__main-row__price.ng-scope')
            .contains('$119')
    });
});