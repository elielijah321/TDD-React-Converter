import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { convertCurrency } from '../functions/converterFunctions';
import * as data from '../data/currencies.json';
const currenciesString = JSON.stringify(data);
const currencies = JSON.parse(currenciesString).currencies;

type Currency = {
  name: string;
  value: number;
}

const CurrencyForm = () => {
  const [validated, setValidated] = useState(false);
  const [result, setResult] = useState(0);

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    event.preventDefault();

    const target = event.target as typeof event.target & {
      amount: { value: string };
      currency: { value: string };
    };
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
      
      const amount = target.amount.value;
      const currency = target.currency.value; 

      const parsedAmount = parseInt(amount);
      const parsedCurrency = parseInt(currency);

      const result = convertCurrency(parsedAmount,parsedCurrency);

      setResult(result);
    }

    setValidated(true);
  };

  return (
    <>
      <h1 data-testid="result">{result}</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              data-testid="amount"
              required
              type="number"
              placeholder="Amount"
              name='amount'
            />
          </Form.Group>


          <Form.Group as={Col} md="12" controlId="currency">
            <Form.Label>Currency</Form.Label>

            <Form.Select name='currency' data-testid="currency" aria-label="Select a currency" required>
                <option value="">Select a currency</option>
                {
                  currencies.map((currency: Currency) => 
                  {return (
                    <option key={currency.name} value={currency.value}>
                              {currency.name} - {currency.value}
                    </option>
                  )})
                }
              </Form.Select>
          </Form.Group>

        </Row>
        {/* Submit Buttoon */}
        <Button type="submit" data-testid='submit-btn'>Submit form</Button>
      </Form>
    </>
  );
}


export default CurrencyForm;