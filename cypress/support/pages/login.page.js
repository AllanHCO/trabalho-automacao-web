import { mensagens } from '../mensagens'

class LoginPage {
  validarNovoCadastro() {
    cy.contains('h2', mensagens.novoUsuario).should('be.visible')
  }

  validarFormularioDeLogin() {
    cy.contains('h2', mensagens.login).should('be.visible')
    cy.get('[data-qa="login-email"]').should('be.visible')
    cy.get('[data-qa="login-password"]').should('be.visible')
  }

  informarNovoUsuario(nome, email) {
    cy.get('[data-qa="signup-name"]').clear().type(nome)
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()
  }

  entrar(email, senha) {
    cy.get('[data-qa="login-email"]').clear().type(email)
    cy.get('[data-qa="login-password"]').clear().type(senha, { log: false })
    cy.get('[data-qa="login-button"]').click()
  }

  validarCredenciaisInvalidas() {
    cy.contains(mensagens.credenciaisInvalidas).should('be.visible')
  }

  validarEmailJaCadastrado() {
    cy.contains(mensagens.emailExistente).should('be.visible')
  }
}

export default new LoginPage()
