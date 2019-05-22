context('Takl Test Suite', () => {});
	// it("Google can find Takl in the results.", () => {
	// 	cy.visit('https://www.google.com', {
	// 	headers: {
	// 		referer : "https://google.com/"
	// 	}
	// 	});
	// 	cy.server();
	// 	cy.get("input.gLFyf").as("input-field"); 
		
	// 	cy.get("@input-field")
	// 	.type("takl")
	// 	.should("have.value", "hcahealthcare");
	// 	cy.get("body").click("left");
	// 	cy.get('.FPdoLc > center > [value="Google Search"]').click();
	// 	cy.get('.rc > .r > a')
	// 	.then(elements => {
	// 		for ( let i = 0 ; i < 1; i++){
	// 			cy.wrap(Cypress.$(elements[i]))
	// 			.should('have.attr', 'href', 'https://takl.com/');
	// 		}
	// 	});
	// });

	// it("Can find prices for a chore on Takl", () => {
	// 	cy.visit('https://takl.com')
	// 	cy.get('body > div.main-content > div.landing-panel.panel-home-grid > div > div > a:nth-child(2)').click()
	// 	cy.url().should('include', 'app.takl.com')
	// 	cy.get('#subcategory-113').click()
	// 	cy.get('.modal-content').should('be.visible')
	// 	cy.get('#zipcode-input')
	// 	  .type("37034")
	// 	cy.get('#submit-button').click()
	// });

	it("Can register as a user", () => {
		cy.visit('https://app.takl.com/users/register')
		cy.reload(true)
		function randomizeString(length, chars) {
			var mask = '';
			if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
			if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			if (chars.indexOf('#') > -1) mask += '0123456789';
			if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
			var random_string = '';
			for (var i = length; i > 0; --i) random_string += mask[Math.floor(Math.random() * mask.length)];
			return random_string;
		}
		let random_string = randomizeString(8, '#aA')
		const user = {
			first_name: 'foo',
			last_name: 'bar',
			email: random_string + '@' + random_string + '.com',
			password: random_string,
			zip: '38401',
			phone: '9314461746'
		  }
		  cy.get('input[name="user[first_name]"]').type(user.first_name)
		  	.should('have.value', 'foo')
		  cy.get('input[name="user[last_name]"]').type(user.last_name)
		  	.should('have.value', 'bar')
		  cy.get('input[name="user[email]"]').type(user.email)
		  	.should('have.value', user.email)
		  cy.get('input[name="user[password]"]').type(user.password)
		  	.should('have.value', user.password)
		  cy.get('input[name="user[sign_up_zip]"]').type(user.zip)
			  .should('have.value', '38401')
		  cy.get('input[name="commit"]').click()
		  cy.get('input[name="user[phone_number]"').type(user.phone)
				.should('have.value', user.phone)
		  cy.get('input[type="checkbox"]').check()
		  cy.get('button[class="customers-layout__submit-btn ng-binding"]').click()
	})
