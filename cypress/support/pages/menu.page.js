class MenuPage {
  irParaCadastroOuLogin() {
    cy.get('.navbar-nav a[href="/login"]').should('be.visible').click()
  }

  irParaProdutos() {
    cy.get('.navbar-nav a[href="/products"]').should('be.visible').click()
  }

  irParaCarrinho() {
    cy.get('.navbar-nav a[href="/view_cart"]').should('be.visible').click()
  }

  sair() {
    cy.get('.navbar-nav a[href="/logout"]').should('be.visible').click()
  }

  excluirConta() {
    cy.get('.navbar-nav a[href="/delete_account"]').should('be.visible').click()
  }

  validarLogadoComo(nome) {
    cy.contains('.navbar-nav a', 'Logged in as')
      .should('be.visible')
      .find('b')
      .should('have.text', nome)
  }
}

export default new MenuPage()
