## Quality Assurance 
**Quality in Web development can be broken down into 3 dimensions.**
* Reach : Market penetration of the product. SEO has the biggest impact on reach.
* Functionality : quality of site's functionality.
* Usability : Evaluates human-computer-interaction (or HCI)
* Aesthetics : Routine review of the site's aesthetics should be a part of QA plan.


## Logic vs Presentation
* Two **Realms** : *Logic* and *Presentation*.

## Type of testing
* **Unit Testing** : testing single components.
* **Integration Testing** : testing interactions.

## Overview 
* **Page Testing** : Testing of site frontend . *Mocha* will be used to achieve this.
* **Cross-page Testing** : Testing functionality that requires navigation from one page to another . We will use *zombie.js* to acheive this.
* **Logic Testing** : Logic testing will execute unit and integration tests against our logic domain. 
* **Linting** : Linting isn’t about finding errors, but potential errors. *JSHint* for linting.
* **Link Checking** : making sure there are no broken links on your site. *Link-checker* will be used for this.
  
## Page Testing
* ```npm install --save-dev mocha``` : Command to install mocha
* used dev so that the dependencies should not be saved in runtime dependencies . It should be saved in development dependencies.
It’s a good idea to put third-party libraries that you are using in a
special directory, like vendor. This makes it easier to separate what
code you’re responsible for testing and modifying, and what code
should be hands off. 

## Continous Integration
* Used for working on team and shared projects.