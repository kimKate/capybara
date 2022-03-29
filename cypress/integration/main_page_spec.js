describe('Visual and functional testing for capybara landing page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Intro testing', () => {
        cy.get('div[class=intro]').within(()=> {
            cy.testIntroHeading()
            cy.testDescriptionContent()
        })
    })
    it('Menu list testing', () => {
        cy.get('div[class=menu]').within(() => {
            cy.testMenuLinks()
        })
    })
    it('Code Block testing', () => {
        cy.testCodeBlock()
    })

    it('Footer Testing', () => {
        cy.get('div[class=footer]').within(() => {
            cy.testFooter()
        })
    })
})