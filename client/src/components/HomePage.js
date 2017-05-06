
import './stylesheets/Nav.css';
import './stylesheets/HomePage.css';
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
      backgroundSize: 'cover'
    };

    return (

      <div>
        <Jumbotron className="jumboHome">
        {/*<div id='bkround' className="bkgroun" style={{backgroundImage: `url(./images/girl.jpg)`}}>*/}
          <Flex column>
            <Box className="homeImage" p={3}>
              <div id="backgroundImageId" {...props} style={{...style, ...defaults, ...modes, ...important}}>
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
                          href="#"
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
                className="stepBoxIcons"
                col={4}
                p={2}
              >
                <div className="stepBoxDiv">
                  <img className="stepImg" src={require('../../public/images/pencil.png')} mode='fit' />
                 
                   <h5> Step: One</h5>
                   <p>It is essential that You have a plan. Create a Budget, every dollar has a purpose</p>
                   <br />
                  </div>

                   <div className="learnMoreDiv">
                   <a href="#" className="learnMoreArrow">
                   LEARN MORE   
                    <img className="arrowImg" src={require('../../public/images/right-arrow.png')} mode='fit' />
                    </a>
                </div>

              </Box>
              <Box
                className="stepBoxIcons"
                col={4}
                p={2}
              >
                <div className="stepBoxDiv">
                  <img className="stepImg" src={require('../../public/images/computer.png')} mode='fit' />

                    <h5>Step: Two</h5>
                    <p>Now you know where your money is actually going. But is it going where it should?</p>
                    <br />
                  </div>

                     <div className="learnMoreDiv">
                     <a href="#" className="learnMoreArrow">
                     LEARN MORE   
                      <img className="arrowImg" src={require('../../public/images/right-arrow.png')} mode='fit' />
                      </a>
                  </div>
                </Box>
              <Box
                className="stepBoxIcons"
                col={4}
                p={2}
              >
                <div className="stepBoxDiv">
                  <img className="stepImg" src={require('../../public/images/horseshoe.png')} mode='fit' />

                  <h5>Step: Three</h5>
                  <p>Putting together a budget is easy: the harder part is sticking to it.</p>
                  <br />
                </div>

                   <div className="learnMoreDiv">
                   <a href="#" className="learnMoreArrow">
                   LEARN MORE   
                    <img className="arrowImg" src={require('../../public/images/right-arrow.png')} mode='fit' />
                    </a>
                </div>
                </Box>

            </Flex>
            <div className="whyDiv">
              <div className="whyChoose">
                <h5 className="display-3"><strong>Why Choose SUPO?</strong></h5>
              </div>
              <div className="whyChooseReasons">
                <p><strong>A Budgeting Grader -</strong></p>
              </div>
              <div>
                <p>No other company out there can offer this unique tool without seeking a specialist in person.  With our budget-grader, you can finally see how much you are taking in versus how much you are spending, and get real-time feedback on your spending habits.</p>
              </div>
              <div className="whyChooseReasons">
                <p><strong>Detailed Spending Insights -</strong></p>
              </div>
              <div>
                <p>For every dollar you spend over your budget, we will offer you plausible, easy to manage tools and tips to make your wallet a little bit thicker every month!</p>
              </div>
              <div className="whyChooseReasons">
                <p><strong>Comparative Spending Tracker -</strong></p>
              </div>
              <div>
                <p>An in debt look at your spending habits, tracked daily and monthly.  View your previous spending and hold it up against your new budgeting self to see your progress!</p>
              </div>
            </div>

            <div className="realSolutionsDiv">
              <div className="realSolutionsHead">
                <h5>Get REAL Solutions to Pay off Your Debt</h5>
                <br />
              
              </div>  
              <img className="stepImg processline" src={require('../../public/images/processline.png')} mode='fit' />
              
              <br />
              <br />
              <br />

              <Flex
              className="stepDivSolutions"
              gutter={2}
              justify="space-between"

              >
              <Box
                className="text-center stepBox"
                col={4}
                p={2}
              >
                <p><strong>GET REAL FACTS REGARDING YOUR DEBT AND THE FASTEST WAY TO PAY IT OFF</strong></p>
               
              </Box>
              <Box
                className="text-center stepBox"
                col={4}
                p={2}
              >
               <p><strong>GET ALTERNATIVES BASED ON INCOME AND SEVERITY OF DEBT</strong></p>
                
              </Box>
              <Box
                className="text-center stepBox"
                col={4}
                p={2}
              >
               <p><strong>EDUCATE YOURSELF ON YOUR LOAN AND DEBT RATES, TAXES, APR%, APY%, & MORE</strong></p>
              
              </Box>

              </Flex>
              <Flex
                className="stepDivSolutions"
                gutter={2}
                justify="space-between"

                >
                <Box
                  className="stepBox"
                  col={4}
                  p={2}
                >
                  <p className="solutionsP"></p>             
                 
                </Box>
                <Box
                  className="stepBox"
                  col={4}
                  p={2}
                >
                  <p className="solutionsP">
                  </p>
                  
                </Box>
                <Box
                  className="stepBox"
                  col={4}
                  p={2}
                >
                  <p className="solutionsP"></p>
                
                </Box>

              </Flex>

            </div> {/*end of real solutions div*/}
            <div className="youReadyDiv">
              <div className="youReady">
                <h5 className="display-3"><strong>REAL SOLUTIONS TO PAY OFF YOUR DEBT</strong></h5>
              </div>
              <div className="youReadyHeadDiv">
                <h2 className="youReadyHead">Are you ready to be debt free?</h2>
              </div>
              <div className="bottomStartBtn">
                <Button
                  className="getStart"
                  tag="a"
                  color="success"
                  href="#"
                  target="_blank"
                >
                  GET STARTED
                </Button>
              </div>
              
            </div>            

          </div>
      </div>
    );
  }
}

export default HomePage;










