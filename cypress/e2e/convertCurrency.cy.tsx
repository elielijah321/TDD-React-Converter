import { CurrencyPage } from '../pages/CurrencyPage';

describe('Convert Currency Tests', () => {

  const currencyPage = new CurrencyPage();

  beforeEach(() => {
    cy.visit('https://lively-wave-0ca723d03.2.azurestaticapps.net/')
  })

  it('produces invalid form', () => {
    currencyPage
      .submit()
      .hasInvalidClass("amount")
      .hasInvalidClass("currency");
  })

  it('produces correct result', () => {
    currencyPage
      .withAmount("200")
      .withCurrency("20")
      .submit()
      .hasExpectedResult("4000");
  })


})
