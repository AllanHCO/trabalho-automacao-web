import { criarUsuario } from '../../support/factories/usuario.factory'
import home from '../../support/pages/home.page'
import login from '../../support/pages/login.page'
import menu from '../../support/pages/menu.page'

describe('Test Case 4: Logout User', () => {
  const usuario = criarUsuario()

  beforeEach(() => {
    cy.criarContaApi(usuario)
  })

  afterEach(() => {
    cy.excluirContaApi(usuario.email, usuario.senha)
  })

  it('encerra a sessão e volta para a página de login', () => {
    home.visitar()
    home.validarPaginaInicial()
    menu.irParaCadastroOuLogin()
    login.validarFormularioDeLogin()
    login.entrar(usuario.email, usuario.senha)
    menu.validarLogadoComo(usuario.nome)
    menu.sair()
    cy.url().should('include', '/login')
    login.validarFormularioDeLogin()
  })
})
