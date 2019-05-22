# Bug Report 1 of 3

##  Scenario:
When Cypress runs all of the specs created in the integration folder, when it finishes the 'Google' test, the 'Takl' test causes the Cypress screen to freeze on a Takl 404 page.
### Expected Results
The test runner is able to complete the test as usual, recording the steps given herein.
### Actual Results
The test runner sticks on a Takl 404 page, as the Cypress applet isn't able to start the tests.


# Bug Report 2 of 3

##  Scenario:
When the register_spec.js test is ran, the test fails at 'referral code'.
### Expected Results
The test runner is able to find the 'referral code' input field and provide the string provided for testing.
### Actual Results
The test runner is unable to find the 'referral code' input field, as it currently does not exist in production.

# Bug Report 3 of 3

## Scenario:
When the task runner enters a zip code for a service, the page is directed to the incorrect url.
### Expected Results
The test runner enters a zip code when testing TAKL services and is able to continue onto the next steps.
### Actual Results
The test runner is able to enter the zip code, but the URL that is returned contains: (takl.com) instead of (app.takl.com) causing the test case to break.
