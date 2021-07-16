# Fast, easy and reliable testing for anything that runs in a browser.

## Writing & Organizing the test visit
```
- https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests/#Plugin-files
```

## Automation Framework consist of 
```
- Cypress
- Javascript (ES6)
- Mocha
- Chai
- Mochawesome Report
- Allure Report
- Data Driven Concept
- Babel
```

## Pre-requirment
```
- Installed NodeJS
```

## Getting started with set-up
```
> `git clone > agileonboarding`
> `Set up .bash_profile with password token
> `cd > agileonboarding-e2e` 
> run `npm intall`
```
## Execute tests from the Dashboard for debugging
```
> `npm run cy:open`
```

## Execute tests from the Dashboard and generating Mocha-Allure report
```
> `npm run cy:open`
- Click on Run Button or 
- Click on the Specific Test or 
- Executing many test cases by double click on the test
- Terminate server
> `npm run posttest`
```

## Execute specific group of test or specific test from the terminal, Headless mode and generate Mocha-Allure report
```
- npm run test "src/integration/contracts/**/**.js" --headed
- npm run test "src/integration/contracts/contracts-details/**.js" --browser chrome
```

## Execute all test cases undter Integration folder headless mode and generating Mocha-Allure Report
```
- npm run test 'src/integration/**/**/*.js' --headed
```

## Open Video file
```
> open terminal
> open location/ag-934-ContractTableTextFilter.js.mp4
```
