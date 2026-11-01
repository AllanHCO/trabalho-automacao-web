import { mensagens } from '../mensagens'

class CheckoutPage {
  validarEnderecoERevisao(usuario) {
    cy.url().should('include', '/checkout')
    cy.contains('h2', mensagens.endereco).should('be.visible')
    cy.contains('h2', mensagens.revisao).should('be.visible')

    cy.get('#address_delivery').should('be.visible').within(() => {
      cy.contains(`${usuario.primeiroNome} ${usuario.sobrenome}`).should('be.visible')
      cy.contains(usuario.endereco).should('be.visible')
      cy.contains(usuario.cidade).should('be.visible')
      cy.contains(usuario.estado).should('be.visible')
      cy.contains(usuario.cep).should('be.visible')
      cy.contains(usuario.pais).should('be.visible')
      cy.contains(usuario.celular).should('be.visible')
    })

    cy.get('#address_invoice').should('be.visible')
    cy.get('#cart_info .cart_description').should('have.length.greaterThan', 0)
  }

  comentarEIrParaPagamento(comentario) {
    cy.get('textarea[name="message"]').should('be.visible').type(comentario)
    cy.contains('a[href="/payment"]', 'Place Order').click()
  }
}

export default new CheckoutPage()
