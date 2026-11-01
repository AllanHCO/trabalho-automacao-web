import home from '../../support/pages/home.page'
import menu from '../../support/pages/menu.page'
import produtos from '../../support/pages/produtos.page'

describe('Test Case 9: Search Product', () => {
  it('busca um produto e exibe somente itens relacionados', () => {
    home.visitar()
    home.validarPaginaInicial()
    menu.irParaProdutos()
    produtos.validarListagem()
    produtos.buscar('Jeans')
    produtos.validarBusca('Jeans')
  })
})
