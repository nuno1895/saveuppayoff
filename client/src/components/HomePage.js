
import './Nav.css';
import './HomePage.css';
import { withReflex, Flex, Box } from 'reflexbox'
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class HomePage extends Component {

  render() {
    let{mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = {resizeMode: 'cover' || 'contain'
    };
    let defaults = {
      height: height || 720,
    };

    let important = {
      backgroundImage: `url(./images/girl.jpg)`,
      backgroundRepeat: 'no-repeat',
      BackgroundSize: 'cover'
    };

    return (

      <div>
        <Jumbotron className="jumboHome">
        {/*<div id='bkround' className="bkgroun" style={{backgroundImage: `url(./images/girl.jpg)`}}>*/}
          <Flex column>
            <Box className="homeImage" p={3}>
              <div {...props} style={{...style, ...defaults, ...modes, ...important}}>
                <Container className="homeContainerOne">
                  <Row>
                    <Col>
                      <h1 className="hp-title">PAY OFF YOUR DEBT</h1>
                      <div className="hp-title-p">
                      <h4 className="hp-title-p">Real solutions to help you pay off your debt and make smarter financial decisions</h4>
                      </div>
                      <p>
                        <Button
                          className="getStart"
                          tag="a"
                          color="success"
                          size="large"
                          href="http://reactstrap.github.io"
                          target="_blank"
                        >
                          GET STARTED
                        </Button>
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Box>
            </Flex>
          </Jumbotron>
          <div>
            <Flex
              className="stepDiv"
              align="center"
              gutter={2}
              justify="space-between"

            >
              <Box
                className="stepBox"
                col={4}
                p={2}
              >
              <img className="stepImg" src={require('../../public/images/pencil.png')} mode='fit' />
             
               <h5> Step: One</h5>
              </Box>
              <Box
                className="stepBox"
                col={4}
                p={2}
              >
              <img className="stepImg" src={require('../../public/images/computer.png')} mode='fit' />

                <h5>Step: Two</h5>
              </Box>
              <Box
                className="stepBox"
                col={4}
                p={2}
              >
              <img className="stepImg" src={require('../../public/images/horseshoe.png')} mode='fit' />

              <h5>Step: Three</h5>
              </Box>

            </Flex>
            <h3 className="" />
            <p className="filler">other stuff</p>
          </div>
      </div>
    );
  }
}

export default HomePage;










