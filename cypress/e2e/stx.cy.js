describe('example test', () => {
    Cypress.on("uncaught:exception", () => {
        return false;
      });

      beforeEach('', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.setCookie('CookieConsent', '{stamp:%278Jkm+4Br7gDY1pO0Hs5ls/q+C1VIV7rSNgva6s+xt/Z96eZR5ssnvA==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1726489898577%2Cregion:%27pl%27}')
      })
    
    it('google.pl', () => {
        cy.visit('https://stxnext.com/');
        cy.get('#w-dropdown-toggle-2').click()
        cy.get('.multi-select-field').first().click()
        cy.get('[data-value="Poland"]').first().click()
        cy.get('.multi-select-field').first().click()
        cy.get('[data-value="Netherlands"]').first().click()
        cy.get('.w-layout-blockcontainer.project-card.w-container').should('have.length', '4')
        cy.get('[fs-cmsload-element="page-button"]').should('have.length', '3')
        cy.get('.multi-select-field').last().click()
        cy.get('[data-value="Hospitality"]').first().click()
        cy.get('.w-layout-blockcontainer.project-card.w-container').should('have.length', '1')
        cy.get('[fs-cmsload-element="page-button"]').should('have.length', '1')
        cy.get('div.multi-select-tag').contains("Netherlands").click()
        //cy.get('.multi-select-tag').should('have.attr','[data-value="Netherlands"]').first().click()
        cy.get('[fs-cmsload-element="page-button"]').should('have.length', '1')






    });
});


// 1. Visit https://stxnext.com/
// 2. Go to "Portfolio" section
// 3. In Country dropdown choose "Poland"
// 4. In Country dropdown choose "Netherlands"
// 5. Check if there are 4 results on the page
// 6. Check if there are 3 pages of results
// 7. In Industry dropdown select "Hospitality"
// 8. Check if there is only one result
// 9. Check if there are no additional pages
// 10. Remove "Netherlands" from chosen options
// 11. Check if there are no results and no additional pages