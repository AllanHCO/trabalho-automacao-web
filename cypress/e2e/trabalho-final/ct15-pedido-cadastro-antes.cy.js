import { criarUsuario } from '../../support/factories/usuario.factory'
import cadastro from '../../support/pages/cadastro.page'
import { finalizarCompraEExcluirConta } from '../../support/fluxos/pedido.fluxo'
import home from '../../support/pages/home.page'
import login from '../../support/pages/login.page'
import menu from '../../support/pages/menu.page'

describe('Test Case 15: Place Order: Register before Checkout', () => {
  const usuario = criarUsuario()

  afterEach(() => {
    cy.excluirContaApi(usuario.email, usuario.senha)
  })

  it('cadastra a conta, finaliza o pedido e exclui a conta', () => {
    cy.fixture('pagamento').then((pagamento) => {
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
      finalizarCompraEExcluirConta(usuario, pagamento)
    })
  })
})
