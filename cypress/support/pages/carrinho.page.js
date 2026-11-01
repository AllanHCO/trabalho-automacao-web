class CarrinhoPage {
  validarCarrinho() {
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info').should('be.visible')
    cy.get('.cart_description').should('have.length.greaterThan', 0).and('be.visible')
  }

  prosseguirParaCheckout() {
    cy.contains('a.check_out', 'Proceed To Checkout').should('be.visible').click()
  }
}

export default new CarrinhoPage()
