import { mensagens } from '../mensagens'

class CadastroPage {
  validarFormularioDaConta() {
    cy.contains('b', mensagens.informacoesDaConta).should('be.visible')
    cy.get('[data-qa="password"]').should('be.visible')
  }

  preencherConta(usuario) {
    cy.get('label[for="id_gender1"]').click()
    cy.get('#id_gender1').should('be.checked')
    cy.get('[data-qa="password"]').type(usuario.senha, { log: false })
    cy.get('[data-qa="days"]').select(usuario.dia)
    cy.get('[data-qa="months"]').select(usuario.mes)
    cy.get('[data-qa="years"]').select(usuario.ano)
    cy.get('label[for="newsletter"]').click()
    cy.get('#newsletter').should('be.checked')
    cy.get('label[for="optin"]').click()
    cy.get('#optin').should('be.checked')
    cy.get('[data-qa="first_name"]').type(usuario.primeiroNome)
    cy.get('[data-qa="last_name"]').type(usuario.sobrenome)
    cy.get('[data-qa="company"]').type(usuario.empresa)
    cy.get('[data-qa="address"]').type(usuario.endereco)
    cy.get('[data-qa="address2"]').type(usuario.endereco2)
    cy.get('[data-qa="country"]').select(usuario.pais)
    cy.get('[data-qa="state"]').type(usuario.estado)
    cy.get('[data-qa="city"]').type(usuario.cidade)
    cy.get('[data-qa="zipcode"]').type(usuario.cep)
    cy.get('[data-qa="mobile_number"]').type(usuario.celular)
  }

  confirmarCadastro() {
    cy.get('[data-qa="create-account"]').scrollIntoView().click()
  }

  validarContaCriada() {
    cy.get('[data-qa="account-created"]')
      .should('be.visible')
      .and('contain', mensagens.contaCriada)
  }

  validarContaExcluida() {
    cy.get('[data-qa="account-deleted"]')
      .should('be.visible')
      .and('contain', mensagens.contaExcluida)
  }

  continuar() {
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
  }
}

export default new CadastroPage()
