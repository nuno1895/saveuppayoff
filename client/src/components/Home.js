import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Nav from './Nav'
import App from '../App'
import ExpenseTracker from './ExpenseTracker'
import Results from './Results'
import HomePage from './HomePage'
import Login from './login/Login'
import SingupPage from './signup/SignupPage'
import Info from './Info'
import Footer from './Footer'
import Debt101 from './Debt101'

const Home = (props) => (
<Router histroy={history}>
	<div>
		<Nav />
		<Route exact path="/" component={HomePage} />
		<Route path="/signup" component={SingupPage} />
		<Route path="/login" component={Login} />
		<Route path="/mainform" component={App} />
		<Route path="/expenseTracker" component={ExpenseTracker} />
		<Route path="/results" component={Results} />
		<Route path="/info" component={Info} />
		<Route path="/debt101" component={Debt101} />
		<Footer />
	</div>
</Router>
)

export default Home;