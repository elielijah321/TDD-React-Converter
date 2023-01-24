import { Logger } from "../common/Logger";

export class CurrencyPage
{
    public withAmount(amount: string): this {
		Logger.Log(`With amount ${amount}`);

		cy.getByTestId("amount").clear().type(amount);

		return this;
	}

    public withCurrency(currency: string): this {
		Logger.Log(`With currency ${currency}`);

		cy.getByTestId("currency").select(currency);

		return this;
	}

    public hasExpectedResult(expectedResult: string): this
	{
		Logger.Log(`Has expected result ${expectedResult}`);

		cy.getByTestId("result").should("contain.text", expectedResult);

        //cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        
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