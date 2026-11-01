import 'cypress-mochawesome-reporter/register'
import './commands'

Cypress.on('uncaught:exception', () => {
  // Scripts de anúncio da aplicação disparam erros fora dos fluxos cobertos.
  return false
})

Cypress.on('window:before:load', (win) => {
  const estilo = win.document.createElement('style')
  estilo.innerHTML = `
    ins.adsbygoogle,
    iframe[id^="aswift"],
    iframe[src*="doubleclick"],
    iframe[src*="googlesyndication"],
    div[id^="google_ads"],
    #ad_position_box {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
  `
  win.document.documentElement.appendChild(estilo)
})
