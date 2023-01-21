import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from '../pages/About';
import CurrencyConvert from '../pages/CurrencyConvert';
import TermperatureConverter from '../pages/TermperatureConverter';

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                  <Navbar.Brand href="/">
                    Converter
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link as={Link} to={"/"} href="#CurrencyConvert">Currency Convert</Nav.Link>
                      <Nav.Link as={Link} to={"/temp"} href="#TermperatureConvert">Temperature Convert</Nav.Link>
                  </Nav>
                  </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
        <Routes>
          <Route path="/" element={<CurrencyConvert />} />
          <Route path="/temp" element={<TermperatureConverter />} />
        </Routes>
        </div>
      </Router>
    )
  }
}
