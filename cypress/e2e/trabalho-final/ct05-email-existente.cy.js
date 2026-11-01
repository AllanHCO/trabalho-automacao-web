import { criarUsuario } from '../../support/factories/usuario.factory'
import home from '../../support/pages/home.page'
import login from '../../support/pages/login.page'
import menu from '../../support/pages/menu.page'

describe('Test Case 5: Register User with existing email', () => {
  const usuario = criarUsuario()

  beforeEach(() => {
    cy.criarContaApi(usuario)
  })

  afterEach(() => {
    cy.excluirContaApi(usuario.email, usuario.senha)
  })

  it('impede um novo cadastro com e-mail já registrado', () => {
    home.visitar()
    home.validarPaginaInicial()
    menu.irParaCadastroOuLogin()
    login.validarNovoCadastro()
    login.informarNovoUsuario(usuario.nome, usuario.email)
    login.validarEmailJaCadastrado()
  })
})
