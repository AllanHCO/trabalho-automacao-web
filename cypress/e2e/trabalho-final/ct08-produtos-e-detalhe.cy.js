import home from '../../support/pages/home.page'
import menu from '../../support/pages/menu.page'
import produtos from '../../support/pages/produtos.page'

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('abre a listagem e o detalhe do primeiro produto', () => {
    home.visitar()
    home.validarPaginaInicial()
    menu.irParaProdutos()
    produtos.validarListagem()
    produtos.abrirDetalheDoPrimeiroProduto()
    produtos.validarDetalhe()
  })
})
