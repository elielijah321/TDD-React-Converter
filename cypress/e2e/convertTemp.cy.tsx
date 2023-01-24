import { TemperaturePage } from '../pages/TemperaturePage';

describe('Convert Celcius To Fahrenheit', () => {

  const temperaturePage = new TemperaturePage();

  beforeEach(() => {
    cy.visit('https://lively-wave-0ca723d03.2.azurestaticapps.net/temp')
  })

  it('produces invalid form', () => {
    temperaturePage
      .submit()
      .hasInvalidClass("celcius");
  })

  it('produces correct result', () => {
    temperaturePage
      .withCelcius("1")
      .submit()
      .hasExpectedResult("33.8");
  })
})
