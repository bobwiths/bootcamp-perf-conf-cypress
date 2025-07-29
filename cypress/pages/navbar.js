class Navbar{
    selectorsList() {
        const selectors = {
            homeButton: "[data-testid='home']",
            registerUserNav: "[data-testid='cadastrar-usuarios']",
            userListNav: "[data-testid='listar-usuarios']",
            registerProductNav: "[data-testid='cadastrar-produtos']",
            productsListNav: "[data-testid='listar-produtos']",
            reportsListNav: "[data-testid='link-relatorios']",
            logoutButton: "[data-testid='logout']",
        }

        return selectors
    }

    registerProductPage(){
        cy.get(this.selectorsList().registerProductNav)
    }
}

export default Navbar