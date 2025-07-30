import userData from '../fixtures/users/userData.json';
import newProduct from '../fixtures/products/newProduct.json'
import HomePage from '../pages/homePage';
import Navbar from '../pages/navbar';
import RegisterUserPage from '../pages/registerUserPage';
import RegisterProductsPage from '../pages/registerProductsPage';

const homePage = new HomePage()
const navbar = new Navbar()
const registerUserPage = new RegisterUserPage()
const registerProductPage = new RegisterProductsPage()

before(() => {
    registerUserPage.registerAdminUser(userData.userAdmin.name, userData.userAdmin.email, userData.userAdmin.password)
})

beforeEach(() => {
    cy.login(userData.userAdmin.email, userData.userAdmin.password)
})

describe('Feature Product' , () => {
    it('Fluxo CRUD do produto', () => {
        homePage.accessHomePage()
        navbar.registerProductPage()
        registerProductPage.registerNewProduct(newProduct.randomProduct.name, newProduct.randomProduct.price, newProduct.randomProduct.description, newProduct.randomProduct.quantity)
    })
})