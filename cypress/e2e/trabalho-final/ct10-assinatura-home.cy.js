import home from '../../support/pages/home.page'

describe('Test Case 10: Verify Subscription in home page', () => {
  it('inscreve um e-mail na assinatura do rodapé', () => {
    const email = `inscricao.${Date.now()}@teste.com`

    home.visitar()
    home.validarPaginaInicial()
    home.rolarAteAAssinatura()
    home.inscrever(email)
  })
})
