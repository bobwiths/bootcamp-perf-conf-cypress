import userData from '../fixtures/users/userData.json';
import newProduct from '../fixtures/products/newProduct.json'
import HomePage from '../pages/homePage';
import Navbar from '../pages/navbar';
import RegisterUserPage from '../pages/registerUserPage';
import RegisterUserAdminPage from '../pages/registerUserAdminPage';
import RegisterProductsPage from '../pages/registerProductsPage';

const homePage = new HomePage()
const navbar = new Navbar()
const registerUserPage = new RegisterUserPage()
const registerUserAdminPage = new RegisterUserAdminPage()
const registerProductPage = new RegisterProductsPage()

let adminAccount = userData.userAdmin

before(() => {
    registerUserPage.registerAdminUser(adminAccount.name, adminAccount.email, adminAccount.password)
})

beforeEach(() => {
    cy.login(adminAccount.email, adminAccount.password)
})

describe('Feature Product' , () => {
    it.skip('Fluxo CRUD do produto', () => {
        let product = newProduct.randomProduct
        homePage.accessHomePage()
        navbar.registerProductPage()
        registerProductPage.registerNewProduct(product.name, product.price, product.description, product.quantity)
    })
    it('Fluxo CRUD do usuário', () => {
        let nonAdminUser = userData.userNonAdmin
        homePage.accessHomePage()
        navbar.registerUserPage()
        registerUserAdminPage.registerNonAdminUser(nonAdminUser.name, nonAdminUser.email, nonAdminUser.password)
    })
})