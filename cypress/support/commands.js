// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
import addContext from 'mochawesome/addContext';

Cypress.Commands.add("testcaseFailed", function() {

    /* Cypress.on('test:after:run', (test, runnable ) => {
        addContext({test}, { title: 'Testcase status:', value: 'The ' + test.title + ' passed!!!'});
    }); */
    Cypress.on('test:after:run', (test, runnable) => {  
        const spec_name = runnable.parent.title
        if (test.state === 'failed') {
            /*addContext({ test }, {
                title: 'Failing Screenshot: ' + '>> screenshots/' + Cypress.spec.name + '/' + spec_name + ' -- ' + test.title + ' (failed)' + '.png <<',
                value: '../../screenshots/' + Cypress.spec.name + '/' + spec_name + ' -- ' + test.title + ' (failed)' + '.png'
            })*/
        addContext({test}, { title: "Screenshot", value:`../../../cypress/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png` })
        }
    });
});

Cypress.Commands.add("testcasePassed", function() {

    Cypress.on('test:after:run', (test, ) => {
        if (test.state === 'passed') { 
            addContext({test}, { title: 'Testcase status:', value: 'The ' + test.title + ' passed!!!'});
        }
    });
});


//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
