import React, { Component } from 'react';
import SignupForm from './SignupForm';
import '../stylesheets/SignupForm.css';

// import { connect } from 'react-redux';
// import { userSignupRequest } from '../../actions/signupActions';


class SignupPage extends Component {
	  render() {
	    return (
	    	<div className="row signupRow">
	    		<div className="col-md-2 col-md-offset-4" />

	    		<div className="col-md-8 col-md-offset-4 signupForm" >

	    			<SignupForm />
	    		</div>

	    		<div className="col-md-2 col-md-offset-4" />

	    	</div>

	    );
	  }
	}

// SignupPage.propTypes = {
// 	userSignupRequest: React.PropTypes.func.isRequired
// }

//export default connect(null, { userSignupRequest})(SignupPage);

export default SignupPage;