class HomePage {
  visitar() {
    cy.visit('/')
  }

  validarPaginaInicial() {
    cy.get('img[alt="Website for automation practice"]').should('be.visible')
    cy.get('.navbar-nav a[href="/"]').should('be.visible')
    cy.get('.features_items').should('be.visible')
  }

  rolarAteAAssinatura() {
    cy.get('#footer').scrollIntoView()
    cy.get('#footer h2')
      .should('be.visible')
      .and(($titulo) => {
        expect($titulo.text().trim().toUpperCase()).to.eq('SUBSCRIPTION')
      })
  }

  inscrever(email) {
    cy.get('#susbscribe_email').should('be.visible').clear().type(email)
    cy.get('#subscribe').click()
    cy.get('#success-subscribe')
      .should('be.visible')
      .and('contain', 'You have been successfully subscribed!')
  }
}

export default new HomePage()
