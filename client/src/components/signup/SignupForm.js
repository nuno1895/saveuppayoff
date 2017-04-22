import React from'react';
import classnames from 'classnames';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			passwordconfirmation: '',
			errors: {}
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}


	onSubmit(e) {
		e.preventDefault();
		this.setState({ errors: {} });

		this.props.userSignupRequest(this.state).then(
			() => {},
			(err) => this.setState({ errors: err.response.data })
		);
	}

	render() {
		const { errors } = this.state; 
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join Our Community!</h1>

				<div className="form-group">
					<label className="control-label">Email</label>
					<input
						onChange={this.onChange}
						value={this.state.email}
						type="text"
						name="email"
						className="form-control"
					/>
					{errors.email && <span className="help-block">{errors.email}</span>} 
				</div>
				<div className="form-group">
					<label className="control-label">Username</label>
					<input
						onChange={this.onChange}
						value={this.state.username}
						type="text"
						name="username"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Password</label>
					<input
						onChange={this.onChange}
						value={this.state.password}
						type="password"
						name="password"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Confirm Password</label>
					<input
						onChange={this.onChange}
						value={this.state.passwordconfirmation}
						type="password"
						name="passwordconfirmation"
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<button className="btn btn-primary btn-lg">
					Sign up
					</button>
				</div>


			</form>
		);
	}
}
SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}


 export default SignupForm;