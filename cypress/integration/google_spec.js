context('Finding Takl website on Google', () => {
	it("Google can find Takl in the results.", () => {
		cy.visit('https://www.google.com', {
		headers: {
			referer : "https://google.com/"
		}
	});
	cy.server();
	cy.get("input.gLFyf").as("input-field");
	
	cy.get("@input-field")
		.type("takl")
		.should("have.value", "takl");
	cy.get("body").click("left");
	cy.get('.FPdoLc > center > [value="Google Search"]').click();
	cy.get('.rc > .r > a')
		.then(elements => {
			for ( let i = 0 ; i < 1; i++){
				cy.wrap(Cypress.$(elements[i]))
				.should('have.attr', 'href', 'https://www.takl.com/');
			}
		});
	});
});