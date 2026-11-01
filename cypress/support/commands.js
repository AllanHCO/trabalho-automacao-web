function lerCorpo(resposta) {
  if (typeof resposta.body === 'string') {
    return JSON.parse(resposta.body)
  }

  return resposta.body
}

Cypress.Commands.add('criarContaApi', (usuario) => {
  cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    log: false,
    body: {
      name: usuario.nome,
      email: usuario.email,
      password: usuario.senha,
      title: 'Mr',
      birth_date: usuario.dia,
      birth_month: usuario.mes,
      birth_year: usuario.ano,
      firstname: usuario.primeiroNome,
      lastname: usuario.sobrenome,
      company: usuario.empresa,
      address1: usuario.endereco,
      address2: usuario.endereco2,
      country: usuario.pais,
      zipcode: usuario.cep,
      state: usuario.estado,
      city: usuario.cidade,
      mobile_number: usuario.celular,
    },
  }).then((resposta) => {
    const corpo = lerCorpo(resposta)
    expect(corpo.responseCode, corpo.message).to.eq(201)
  })
})

Cypress.Commands.add('excluirContaApi', (email, senha) => {
  cy.request({
    method: 'DELETE',
    url: '/api/deleteAccount',
    form: true,
    log: false,
    failOnStatusCode: false,
    body: {
      email,
      password: senha,
    },
  })
})
