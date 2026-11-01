# Trabalho de Conclusão — Automação de Testes na Camada de Interface (Web)

Projeto Cypress para os casos de teste da aplicação [Automation Exercise](https://automationexercise.com/test_cases).

Casos automatizados: **1, 2, 3, 4, 5, 8, 9, 10, 15 e 16**.

## Como executar

Requisitos: Node.js 22 ou superior e Google Chrome.

```bash
npm ci
npm test
```

O relatório HTML fica em `cypress/reports/index.html`.

Para abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

## GitHub Actions

O workflow `.github/workflows/cypress.yml` executa os mesmos specs a cada push e pull request. Ao final, o relatório Mochawesome (e os screenshots, se houver falha) é publicado como artifact `relatorio-mochawesome`.

No GitHub: Actions → execução → Artifacts.

## Estrutura

- `cypress/e2e/trabalho-final` — um spec por caso de teste
- `cypress/support/pages` — Page Objects, com seletores `data-qa`, id e links estáveis
- `cypress/support/fluxos` — checkout compartilhado pelos casos 15 e 16
- `cypress/support/commands.js` — criação e limpeza de conta pela API, só como massa de dados
- `cypress/support/factories` — usuário único por execução

Os casos 2, 4, 5 e 16 partem de uma conta já existente. Essa conta é criada pela API antes do fluxo de interface e removida ao final. O cadastro e a exclusão pela tela ficam nos casos 1 e 15.

A busca do caso 9 usa o termo `Jeans`, porque a aplicação devolve só produtos relacionados a esse termo.

No checkout, a confirmação exibida pela aplicação é `Order Placed!` e `Congratulations! Your order has been confirmed!`.

## Entrega

A pasta `node_modules` não entra no repositório. Se a entrega for um ZIP, compacte o projeto sem essa pasta.
