import userData from '../fixtures/users/userData.json';
import HomePage from '../pages/homePage';
import Navbar from '../pages/navbar';
import RegisterUserPage from '../pages/registerUserPage';

const homePage = new HomePage()
const navbar = new Navbar()
const registerUserPage = new RegisterUserPage()

before(() => {
    registerUserPage.RegisterAdminUser(userData.userAdmin.name, userData.userAdmin.email, userData.userAdmin.password)
})

beforeEach(() => {
    cy.login(userData.userAdmin.email, userData.userAdmin.password)
})

describe('Feature Product' , () => {
    let product1 = 'Bolinha' + Math.random()
    let product2 = 'Caneca' + Math.random()

    // it.only('Test', () => {
    //     homePage.accessHomePage()
    //     navbar.registerProductPage()
    // })

    it('Fluxo de CRUD de produto', () => {
        cy.visit('https://front.serverest.dev/admin/home')
        cy.get('[data-testid="cadastrar-produtos"]').click()
        cy.get('[data-testid="nome"]').type(product1)
        cy.get('[data-testid="preco"]').type('2')
        cy.get('[data-testid="descricao"]').type('Bolinha de Gude')
        cy.get('[data-testid="quantity"]').type('10')
        cy.get('[data-testid="cadastarProdutos"]').click()
        cy.get('h1'). contains('Lista dos Produtos')
        cy.get('tbody').should('be.visible')
        cy.get('td').should('include.text', product1)
        cy.get('tr').each(($row) => {
            if($row.find('td').eq(0).text() === product1) {
                $row.find('td').eq(5).children('div').children('.btn-danger').click()
            }
        })
        cy.get('td').should('not.include.text', product1)
    })
    it('Fluxo de DELETE de produto', () => {
        cy.productRegistration(product2, '15', 'Caneca Vintage', '25')
        cy.visit('https://front.serverest.dev/admin/listarprodutos')
        cy.get('h1'). contains('Lista dos Produtos')
        cy.get('tbody').should('be.visible')
        cy.get('td').should('include.text', product2)
        cy.get('tr').each(($row) => {
            if($row.find('td').eq(0).text() === product2) {
                $row.find('td').eq(5).children('div').children('.btn-danger').click()
            }
        })
        cy.get('td').should('not.include.text', product2)
    })
})