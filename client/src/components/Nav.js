


import './Nav.css';
import {
  NavLink
} from 'react-router-dom'
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownMenu
} from 'reactstrap';

class App extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="navBar">
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">
          <img className="smallLogoImg" src={require('../../public/images/logoSmall.png')} mode='fit' />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink to="/">HOME</NavLink>
              </NavItem>
              <NavItem>
              <NavLink className="loginNav" to="/login">LOG IN</NavLink>
              </NavItem>
              <NavItem>
              <NavLink className="loginNav" to="/signup">SIGN UP</NavLink>
              </NavItem>
              <Dropdown className="nav-item" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <span
                  onClick={this.toggle}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={this.state.dropdownOpen}
                >
                  TOOLS
                </span>
                <DropdownMenu>
                  <div onClick={this.toggle}><NavLink to="/mainform">Budget Grader</NavLink></div>
                  <div onClick={this.toggle}><NavLink to="/name">Monthly Expenses</NavLink></div>
                  <div onClick={this.toggle}>Custom dropdown item</div>
                  <div onClick={this.toggle}>Custom dropdown item</div>
                  <div onClick={this.toggle}>Custom dropdown item</div>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink to="/results">RESULTS</NavLink>
              </NavItem>
            </Nav>
          </Collapse>

          <hr />
        </Navbar>
      </div>
    );
  }
}




export default App;









