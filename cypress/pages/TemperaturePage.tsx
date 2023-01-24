import { Logger } from "../common/Logger";

export class TemperaturePage
{
    public withCelcius(celcius: string): this {
		Logger.Log(`With celcius ${celcius}`);

		cy.getByTestId("celcius").clear().type(celcius);

		return this;
	}

    public hasExpectedResult(expectedResult: string): this
	{
		Logger.Log(`Has expected result ${expectedResult}`);

		cy.getByTestId("result").should("contain.text", expectedResult);

		return this;
	}

    public hasInvalidClass(element: string): this
	{
		Logger.Log(`${element} should have invalid class`);

		cy.getByTestId(element).then($el => $el[0].checkValidity()).should('be.false');

		return this;
	}

    public submit(): this {
		Logger.Log(`submit`);

		cy.getByTestId("submit-btn").click();

		return this;
	}
}