
import './Footer.css';
import {
  NavLink
} from 'react-router-dom'
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Footer extends Component {
    
      render() {
          return (
              <div>

              	<div className="footerContainer">
                  <div className='footer'>
                     <Row>
                       <Col xs="6" className="footerLeft">
                       	<img className="whiteLogoImg" src={require('../../public/images/white-supo.png')} mode='fit' />


                       
                       	<p>
                        <img className="emailIcon" src={require('../../public/images/arroba(1).png')} mode='fit' />
                        <strong>Email: </strong></p>
                       	<br />
                       	<p>facebook twitter google pinterest instgram incons</p>
                       </Col>
                       <Col xs="2">
                       	<p className="footerTopics"><strong>GET HELP</strong></p>
                       	<p><a href="#">FAQ</a></p>
                       	<p><a href="#">Debt 101</a></p>
                       	<p><a href="#">Pay it off</a></p>
                       	<p><a href="#">General Advice</a></p>
                       </Col>
                       <Col xs="2">
                       <p className="footerTopics"><strong>SOLUTIONS</strong></p>
                       <p><a href="#">Mortgage</a></p>
                       <p><a href="#">Credit Cards</a></p>
                       <p><a href="#">Student Loans</a></p>
                       <p><a href="#">Car Loans</a></p>
                       </Col>
                       <Col xs="2">
                       <p className="footerTopics"><strong>ABOUT</strong></p>
                       <p><a href="#">About Us</a></p>
                       <p><a href="#">Why Choose Us</a></p>
                       <p><a href="#">Contact</a></p>
                       <p><a href="#">Something else</a></p>
                       </Col>
                     </Row>
                  </div> 
                   <div className="footerCopy">
	                  <p>Copyright 2017&copy; SUPO | All Rights Reserved</p>
	               </div>
                </div>  

              </div>
          );
      }
};




export default Footer;









