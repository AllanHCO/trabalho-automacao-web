import { mensagens } from '../mensagens'

class PagamentoPage {
  pagar(dados) {
    cy.get('[data-qa="name-on-card"]').should('be.visible').type(dados.nomeNoCartao)
    cy.get('[data-qa="card-number"]').type(dados.numero)
    cy.get('[data-qa="cvc"]').type(dados.cvc)
    cy.get('[data-qa="expiry-month"]').type(dados.mes)
    cy.get('[data-qa="expiry-year"]').type(dados.ano)
    cy.get('[data-qa="pay-button"]').click()
  }

  validarPedidoRealizado() {
    cy.url({ timeout: 20000 }).should('include', '/payment_done')
    cy.get('[data-qa="order-placed"]')
      .should('be.visible')
      .and('contain', mensagens.pedidoRealizado)
    cy.contains(mensagens.pedidoConfirmado).should('be.visible')
  }
}

export default new PagamentoPage()
