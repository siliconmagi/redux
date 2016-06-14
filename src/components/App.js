import React, { PropTypes } from 'react';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLink } from 'react-router';


const App = (props) => {
  return (
    <div>
      <Navbar fixedTop>
        <Navbar.Header  className="text-center pull-right">
          <Navbar.Brand>
            <IndexLink to="/" activeStyle={{color: '#5BB7DB'}}>
              <span>Sagitaur</span>
            </IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse eventKey={0} className="text-center pull-right">
          <Nav>
            <LinkContainer to="/fuel-savings">
              <NavItem eventKey={1}>
                Fuel Savings
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>
                About
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
