class RegisterProductsPage{
    selectorsList() {
        const selectors = {
            productName : "[data-testid='nome']",
            productPrice: "[data-testid='preco']",
            productDescription: "[data-testid='descricao']",
            productQuantity: "[data-testid='quantity']",
            registerProductButton: "[data-testid='cadastarProdutos']",
        }

        return selectors
    }
        
    registerNewProduct(name, price, description, quantity) {
        cy.get(this.selectorsList().productName).type(name)
        cy.get(this.selectorsList().productPrice).type(price)
        cy.get(this.selectorsList().productDescription).type(description)
        cy.get(this.selectorsList().productQuantity).type(quantity)
        cy.get(this.selectorsList().registerProductButton).click()
        cy.get('h1').contains('Lista dos Produtos')
        cy.get('tbody').should('be.visible')
        cy.get('td').should('include.text', name)
        cy.get('tr').each(($row) => {
            if($row.find('td').eq(0).text() === name) {
                $row.find('td').eq(5).children('div').children('.btn-danger').click()
            }
        })
        cy.get('td').should('not.include.text', name)
    }

}

export default RegisterProductsPage