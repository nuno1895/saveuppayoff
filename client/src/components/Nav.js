// import './Nav.css';
// import React, { Component } from 'react';
// import {
//   NavLink
// } from 'react-router-dom'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';


// class Nav extends Component {
//   render() {
//     return (
//       <div className="navBar">
//         <nav>
//           <div className="logo">Our Logo</div>
//           <div className="navigation">
//           <NavLink exact to="/">HOME</NavLink>
//           <NavLink to="/name">NAME</NavLink>
//           <NavLink to="/results">RESULTS</NavLink>
//         </div> {/*end navigation*/}
//         </nav> 
//       </div>
//     );
//   }
// }

// export default Nav;


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
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownItem,
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
          <NavbarBrand href="/">Our Logo Here</NavbarBrand>
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
                  <div onClick={this.toggle}>Custom dropdown item</div>
                  <div onClick={this.toggle}>Custom dropdown item</div>
                  <div onClick={this.toggle}>Custom dropdown item</div>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink to="/name">NAME</NavLink>
              </NavItem>
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









