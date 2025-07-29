class HomePage {
    selectorsList() {
        const selectors = {
            registerUserButton: "[data-testid='cadastrarUsuarios']",
            userListButton: "[data-testid='listarUsuarios']",
            registerProductButton: "[data-testid='cadastrarProdutos']",
            productListButton: "[data-testid='listarProdutos']",
            reportsButton: "[data-testid='relatorios']"
        }

        return selectors
    }

    accessHomePage() {
        cy.visit('https://front.serverest.dev/admin/home')
    }
    registerProductPage(){
        cy.get(navbar().registerProductNav)
    }

}

export default HomePage