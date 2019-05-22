# Bug Report 1 of 2

- Scenario: When Cypress runs all of the specs created in the integration folder, when it finishes the 'Google' test, the 'Takl' test causes the Cypress screen to freeze on a Takl 404 page.
-- Expected Results
The test runner is able to complete the test as usual, recording the steps given herein.
-- Actual Results
The test runner sticks on a Takl 404 page, as the Cypress applet isn't able to start the tests.


# Bug Report 2 of 2

- Scenario: When the register_spec.js test is ran, the test fails at 'referral code'.
-- Expected Results
The test runner is able to find the 'referral code' input field and provide the string provided for testing.
-- Actual Results
The test runner is unable to find the 'referral code' input field, as it currently does not exist in production.