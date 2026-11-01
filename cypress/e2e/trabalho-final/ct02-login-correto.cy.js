import { criarUsuario } from '../../support/factories/usuario.factory'
import cadastro from '../../support/pages/cadastro.page'
import home from '../../support/pages/home.page'
import login from '../../support/pages/login.page'
import menu from '../../support/pages/menu.page'

describe('Test Case 2: Login User with correct email and password', () => {
  const usuario = criarUsuario()

  beforeEach(() => {
    cy.criarContaApi(usuario)
  })

  afterEach(() => {
    cy.excluirContaApi(usuario.email, usuario.senha)
  })

  it('entra com credenciais válidas e exclui a conta', () => {
    home.visitar()
    home.validarPaginaInicial()
    menu.irParaCadastroOuLogin()
    login.validarFormularioDeLogin()
    login.entrar(usuario.email, usuario.senha)
    menu.validarLogadoComo(usuario.nome)
    menu.excluirConta()
    cadastro.validarContaExcluida()
  })
})
