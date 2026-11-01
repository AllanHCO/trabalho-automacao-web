import { criarUsuario } from '../../support/factories/usuario.factory'
import cadastro from '../../support/pages/cadastro.page'
import home from '../../support/pages/home.page'
import login from '../../support/pages/login.page'
import menu from '../../support/pages/menu.page'

describe('Test Case 1: Register User', () => {
  const usuario = criarUsuario()

  afterEach(() => {
    cy.excluirContaApi(usuario.email, usuario.senha)
  })

  it('cadastra um usuário, confirma a sessão e exclui a conta', () => {
    home.visitar()
    home.validarPaginaInicial()
    menu.irParaCadastroOuLogin()
    login.validarNovoCadastro()
    login.informarNovoUsuario(usuario.nome, usuario.email)
    cadastro.validarFormularioDaConta()
    cadastro.preencherConta(usuario)
    cadastro.confirmarCadastro()
    cadastro.validarContaCriada()
    cadastro.continuar()
    menu.validarLogadoComo(usuario.nome)
    menu.excluirConta()
    cadastro.validarContaExcluida()
    cadastro.continuar()
  })
})
