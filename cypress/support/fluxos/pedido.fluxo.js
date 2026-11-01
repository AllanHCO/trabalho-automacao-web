import cadastro from '../pages/cadastro.page'
import carrinho from '../pages/carrinho.page'
import checkout from '../pages/checkout.page'
import menu from '../pages/menu.page'
import pagamento from '../pages/pagamento.page'
import produtos from '../pages/produtos.page'

export function finalizarCompraEExcluirConta(usuario, dadosPagamento) {
  menu.irParaProdutos()
  produtos.adicionarPrimeiroProduto()
  produtos.continuarComprando()
  menu.irParaCarrinho()
  carrinho.validarCarrinho()
  carrinho.prosseguirParaCheckout()
  checkout.validarEnderecoERevisao(usuario)
  checkout.comentarEIrParaPagamento('Pedido do trabalho de conclusao de disciplina.')
  pagamento.pagar(dadosPagamento)
  pagamento.validarPedidoRealizado()
  menu.excluirConta()
  cadastro.validarContaExcluida()
  cadastro.continuar()
}
