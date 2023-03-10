describe('Cypress', () => {

    beforeEach(() => {
        cy.visit('/') 
      })
    it('is working', () => {
        expect(true).to.equal(true)
    })

    it('visits the app', () => {
        cy.visit('/')
    })

    it('accepts input', () => {
        const input = "Learn about Cypress"
        cy.get('.form-control')
            .type(input)
            .should('have.value', input)
    })

    it('displays list of todo', () => {
        cy.get('li')
            .should('have.length', 2)
    })

    it('adds a new todo', () => {
        const input = "Learn about cypress"
            cy.get('.form-control')
            .type(input)
            .type('{enter}')
            .get('li')
            .should('have.length', 3)
    })

    it('deletes a todo', () => {
            cy.get('li')
            .first()
            .find('.btn-danger')
            .click()


        cy.get('li')
            .should('have.length', 1)
    })

      it('deletes all todo', () => {
        cy.get('li')
          .first()
          .find('.btn-danger')
          .click()
          .get('li')
          .first()
          .find('.btn-danger')
          .click()
          .get('.no-task')
          .should('have.text', 'All of your tasks are complete. Nicely done!')
      })

})

