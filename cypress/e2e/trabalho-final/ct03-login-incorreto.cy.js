import home from '../../support/pages/home.page'
import login from '../../support/pages/login.page'
import menu from '../../support/pages/menu.page'

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('exibe erro ao informar e-mail e senha incorretos', () => {
    home.visitar()
    home.validarPaginaInicial()
    menu.irParaCadastroOuLogin()
    login.validarFormularioDeLogin()
    login.entrar('naoexiste.allan@teste.com', 'senha-incorreta')
    login.validarCredenciaisInvalidas()
  })
})
