import { mensagens } from '../mensagens'

class ProdutosPage {
  validarListagem() {
    cy.url().should('include', '/products')
    cy.contains('h2', mensagens.todosOsProdutos).should('be.visible')
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)
  }

  abrirDetalheDoPrimeiroProduto() {
    cy.get('.features_items .productinfo p')
      .first()
      .invoke('text')
      .then((nome) => {
        cy.wrap(nome.trim()).as('produtoSelecionado')
      })

    cy.get('.features_items .choose a[href*="/product_details/"]').first().click()
  }

  validarDetalhe() {
    cy.url().should('match', /\/product_details\/\d+/)
    cy.get('@produtoSelecionado').then((nome) => {
      cy.get('.product-information h2').should('have.text', nome)
    })

    cy.get('.product-information').within(() => {
      cy.contains('Category:').should('be.visible')
      cy.contains('Rs.').should('be.visible')
      cy.contains('Availability:').should('be.visible')
      cy.contains('Condition:').should('be.visible')
      cy.contains('Brand:').should('be.visible')
    })
  }

  buscar(termo) {
    cy.get('#search_product').should('be.visible').clear().type(termo)
    cy.get('#submit_search').click()
    cy.url().should('include', `search=${encodeURIComponent(termo)}`)
  }

  validarBusca(termo) {
    cy.contains('h2', mensagens.produtosBuscados).should('be.visible')
    cy.get('.features_items .productinfo p')
      .should('have.length.greaterThan', 0)
      .each(($nome) => {
        expect($nome.text().toLowerCase()).to.include(termo.toLowerCase())
      })
  }

  adicionarPrimeiroProduto() {
    cy.intercept('GET', '**/add_to_cart/*').as('adicionarAoCarrinho')
    cy.get('.features_items .productinfo .add-to-cart').first().click()
    cy.wait('@adicionarAoCarrinho')
    cy.get('#cartModal.show')
      .should('be.visible')
      .and('contain', mensagens.produtoAdicionado)
  }

  continuarComprando() {
    cy.get('#cartModal.show .close-modal').click()
    cy.get('#cartModal.show').should('not.exist')
  }
}

export default new ProdutosPage()
