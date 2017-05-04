import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Nav from './Nav'
import App from '../App'
import Name from './Name'
import Results from './Results'
import HomePage from './HomePage'
import LoginForm from './login/LoginForm'
import SingupPage from './signup/SignupPage'
import Info from './Info'
import Footer from './Footer'
import './Allcss.css'

const Home = (props) => (
<Router histroy={history}>
	<div>
		<Nav />
		<Route exact path="/" component={HomePage} />
		<Route path="/signup" component={SingupPage} />
		<Route path="/login" component={LoginForm} />
		<Route path="/mainform" component={App} />
		<Route path="/name" component={Name} />
		<Route path="/results" component={Results} />
		<Route path="/info" component={Info} />
		<Footer />
	</div>
</Router>
)

export default Home;