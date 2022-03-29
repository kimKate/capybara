Cypress.Commands.add('testIntroHeading', () => {
    cy.get('h1').should('contain', 'Test your app with')
    cy.get('h1 strong').should('contain', 'Capybara')
})

Cypress.Commands.add('testDescriptionContent', () => {
    cy.get('p').eq(0).then(($p) => {
        expect($p).to.have.text('\n      Tired of clicking around in your browser trying to make sure your\n      applications work as expected? Capybara is a library written in the\n      Ruby programming language which\n      makes it easy to simulate how a user interacts with your application.\n    ')
      })
    cy.get('p').eq(1).then(($p) => {
        expect($p).to.have.text('\n      Capybara can talk with many different drivers which execute your tests\n      through the same clean and simple interface. You can seamlessly choose\n      between Selenium, Webkit or pure Ruby drivers.\n    ')
    })
    cy.get('p').eq(2).then(($p) => {
        expect($p).to.have.text('\n      Tackle the asynchronous web with Capybara\'s powerful synchronization\n      features. Capybara automatically waits for your content to appear\n      on the page, you never have to issue any manual sleeps.\n    ')
    })
})

Cypress.Commands.add('testMenuLinks', () => {
    cy.get('a').contains('Mailing list').should('have.attr', 'href', 'http://groups.google.com/group/ruby-capybara')
    cy.get('a').contains('API documentation').should('have.attr', 'href', 'http://rubydoc.info/github/teamcapybara/capybara/master')
    cy.get('a').contains('Source code').should('have.attr', 'href', 'https://github.com/teamcapybara/capybara')
})

Cypress.Commands.add('testCodeBlock', () => {
    cy.get('h2').eq(0).should('contain', 'Install')
    cy.get('pre').should('contain', 'gem install capybara')
    cy.get('h2').eq(1).should('contain', 'Get started')
    cy.get('a').contains('Source code').should('have.attr', 'href', 'https://github.com/teamcapybara/capybara')
})

Cypress.Commands.add('testFooter', () => {
    cy.get('p').then(($p) => {
        expect($p).to.have.text(' © 2011 - Site lovingly crafted by Elabs Elabs')
    })
    cy.get('a').eq(0).contains('Elabs').should('have.attr', 'href', 'http://www.elabs.se')
    cy.get('a').eq(1).contains('Elabs').should('have.attr', 'href', 'http://www.elabs.se')
    cy.get('a').eq(1).contains('Elabs').should('have.class', 'elabs-symbol')
})