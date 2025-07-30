class RegisterUserPage{
    selectorsList() {
        const selectors = {
            nameField: "[data-testid='nome']",
            emailField: "[data-testid='email']",
            passwordField: "[data-testid='password']",
            adminCheckbox: "[data-testid='checkbox']",
            registerButton: "[data-testid='cadastrar']",
            homePageDisplay: "#root"
        }

        return selectors
    }
    RegisterAdminUser(name, email, password) {
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
        cy.get(this.selectorsList().nameField).type(name)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().adminCheckbox).click()
        cy.get(this.selectorsList().registerButton).click()
        cy.get(this.selectorsList().homePageDisplay)

    }
    RegisterNonAdminUser() {
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
        cy.get(this.selectorsList().nameField).type(name)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().registerButton).click()
        cy.get(this.selectorsList().homePageDisplay)
    }

}

export default RegisterUserPage