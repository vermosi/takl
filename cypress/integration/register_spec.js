context('Finding Takl website on Google', () => {
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