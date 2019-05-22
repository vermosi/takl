context('Takl Test Suite', () => {

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

	it("Can register as a user", () => {
		cy.visit('https://app.takl.com/users/register')
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
			phone: '9314461746',
			referral: 'referralc0de'
		}
		cy.get('input[name="user[first_name]"]').type(user.first_name)
			.should('have.value', user.first_name)
		cy.get('input[name="user[last_name]"]').type(user.last_name)
			.should('have.value', user.last_name)
		cy.get('input[name="user[email]"]').type(user.email)
			.should('have.value', user.email)
		cy.get('input[name="user[password]"]').type(user.password)
			.should('have.value', user.password)
		cy.get('input[name="user[sign_up_zip]"]').type(user.zip)
			.should('have.value', user.zip)
		cy.get('input[name="user[referral_code"]').type(user.referral)
			.should('have.value', user.referral)
		cy.get('input[name="commit"]').click()
	});
});