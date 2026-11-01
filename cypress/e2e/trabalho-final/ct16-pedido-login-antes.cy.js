import { criarUsuario } from '../../support/factories/usuario.factory'
import { finalizarCompraEExcluirConta } from '../../support/fluxos/pedido.fluxo'
import home from '../../support/pages/home.page'
import login from '../../support/pages/login.page'
import menu from '../../support/pages/menu.page'

describe('Test Case 16: Place Order: Login before Checkout', () => {
  const usuario = criarUsuario()

  beforeEach(() => {
    cy.criarContaApi(usuario)
  })

  afterEach(() => {
    cy.excluirContaApi(usuario.email, usuario.senha)
  })

  it('entra com uma conta existente, finaliza o pedido e exclui a conta', () => {
    cy.fixture('pagamento').then((pagamento) => {
      home.visitar()
      home.validarPaginaInicial()
      menu.irParaCadastroOuLogin()
      login.validarFormularioDeLogin()
      login.entrar(usuario.email, usuario.senha)
      menu.validarLogadoComo(usuario.nome)
      finalizarCompraEExcluirConta(usuario, pagamento)
    })
  })
})
