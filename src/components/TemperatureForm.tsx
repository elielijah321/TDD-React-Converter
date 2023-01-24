import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { convertToFahrenheit } from '../functions/converterFunctions';



const TemperatureForm = () => {
  const [validated, setValidated] = useState(false);
  const [result, setResult] = useState(0);

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    event.preventDefault();

    const target = event.target as typeof event.target & {
      celcius: { value: string };
    };
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
      
      const celcius = target.celcius.value;

      const parsedCelcius = parseInt(celcius);

      const result = convertToFahrenheit(parsedCelcius);

      setResult(result);
    }

    setValidated(true);
  };

  return (
    <>
      <h1 data-testid="result">{result}</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Celcius*/}
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="celcius">
            <Form.Label>Celcius</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Celcius"
              name='celcius'
              data-testid="celcius"
            />
          </Form.Group>
        </Row>

        {/* Submit Buttoon */}
        <Button type="submit" data-testid="submit-btn" >Submit form</Button>
      </Form>
    </>
  );
}


export default TemperatureForm;