/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("My First Test Suite", function()
{
    it("TC001", function()
    {
        cy.visit('https://www.autoscout24.com/')

        //Handle pop-up and click Accept button
        cy.wait(10000)
        cy.frameLoaded('iframe[id="gdpr-consent-notice"]')
        cy.iframe().find(".mat-button-wrapper").contains('Accept').click({force: true})

       /* const getIframeDocument = () => {
            return cy
            .get('iframe[id="gdpr-consent-notice"]')
            .its('0.contentDocument').should('exist')
          }
          
          const getIframeBody = () => {
            // get the document
            return getIframeDocument()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
          }
          
          it('gets the post', () => {
            cy.visit('https://www.autoscout24.com/')
            getIframeBody().find(".mat-button-wrapper").contains('Accept').click()
          })*/

/*
        //Select tab
        cy.get(".sc-tab--with-icon--active")     // Tab

        //Tick "New" tickbox
        cy.contains('label', 'New')  // find your text
            .parent('span')          // move to parent div 
            .find("input[type='checkbox']")           // select it's input
            .check({force:true}); 

        //Tick "Used" tickbox
        cy.contains('label', 'Used')  // find your text
            .parent('span')          // move to parent div 
            .find("input[type='checkbox']")           // select it's input
            .check({force:true}); 

        //Tick "Pre-registered" tickbox
        cy.contains('label', 'Pre-registered')  // find your text
            .parent('span')          // move to parent div 
            .find("input[type='checkbox']")           // select it's input
            .uncheck({force:false}); 
            
        //Select Make
        cy.get("input[placeholder='Make']").click();
        cy.get('.react-autocomplete__list-item--selected').contains('Audi').click();

        //Select Model
        cy.get("input[placeholder='Model']").click();
        cy.get('.react-autocomplete__list-item').contains('A1').click();

        //Select First Registration
        cy.get("input[placeholder='First Registration']").click();
        cy.get('.react-autocomplete__list-item').contains('2016').click();

        //Select Price
        cy.get('select#priceto').select('1500') //Price

        //Select Country
        cy.get(".as24-custom-dropdown--selected").click();
        cy.get("span[class='cl-dropdown-cursorpointer sc-ellipsis']").contains('Germany').click();

        //Enter City ZIP Radius
        cy.get("input[placeholder='City/ZIP']").type('65558')      //City ZIP
        cy.get('.react-autocomplete__list-item').contains(" Gückingen (Gmd. Burgschwalbach)").click()

        //Select ZIP Radius
        cy.get("select[data-test='zipRadius']").select('200');

        //Tick/Untick Cross-Border
        cy.contains('label', 'Cross-border')  // find your text
        .parent('span')          // move to parent div 
        .find("input[type='checkbox']")           // select it's input
        .check({force:true}); 

        //Click Search button
        cy.get("[data-test=search]").click({force:true});
*/

    }
    )
}
)
 
