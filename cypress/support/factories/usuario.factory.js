export function criarUsuario(parcial = {}) {
  const id = `${Date.now()}${Math.floor(Math.random() * 1000)}`

  return {
    nome: 'Allan QA',
    email: `allan.qa.${id}@teste.com`,
    senha: 'Teste@12345',
    dia: '10',
    mes: '5',
    ano: '1990',
    primeiroNome: 'Allan',
    sobrenome: 'Tester',
    empresa: 'PGATS',
    endereco: 'Rua dos Testes, 100',
    endereco2: 'Sala 2',
    pais: 'Canada',
    estado: 'Ontario',
    cidade: 'Toronto',
    cep: '13010000',
    celular: '11988887777',
    ...parcial,
  }
}
