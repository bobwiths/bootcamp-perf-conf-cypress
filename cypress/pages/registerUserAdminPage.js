class RegisterUserAdminPage{
    selectorsList() {
        const selectors = {
            nameField: "[data-testid='nome']",
            emailField: "[data-testid='email']",
            passwordField: "[data-testid='password']",
            adminCheckbox: "[data-testid='checkbox']",
            registerButton: "[data-testid='cadastrarUsuario']",
        }

        return selectors
    }
    registerNonAdminUser(name, email, password) {
        cy.get(this.selectorsList().nameField).type(name)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().registerButton).click()
        cy.get('h1').contains('Lista dos usuários')
        cy.get('tbody').should('be.visible')
        cy.get('td').should('include.text', name)
        cy.get('tr').each(($row) => {
            // if($row.find('td').eq(0).text() === name) {
            //     $row.find('td').eq(5).children('div').children('.btn-danger').click()
            // }
        })
        // cy.get('td').should('not.include.text', name)
    }

}

export default RegisterUserAdminPage