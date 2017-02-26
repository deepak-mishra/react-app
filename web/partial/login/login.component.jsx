import React from 'react';

import { FormattedMessage } from 'react-intl';

class Login extends React.Component {
	
	constructor(props) {
		super(props);
		this.handelLogin = this.handelLogin.bind(this);
	}	

	handelLogin(event){
		 event.preventDefault();
		 var email = this.refs.email.value;
		 var password = this.refs.password.value;
		 console.log(email);
		 console.log(password);
	}
	render(){
		return(
			<form className="form-signin" noValidate>
			    <h2 className="form-signin-heading"></h2>
			    <div className="alert alert-danger"><p><FormattedMessage id="info.email_required" defaultMessage="Email is required" /> </p> </div>
			    <div className="alert alert-danger"><FormattedMessage id="info.password_required" defaultMessage="Password is required" /></div>
			    <label htmlFor="inputEmail" className="sr-only"><FormattedMessage id="info.email" defaultMessage="Email address" /></label>
			    <input type="email" id="inputEmail" ref="email" className="form-control" name="name" placeholder="email" required autoFocus />
			    <label htmlFor="inputPassword" className="sr-only"><FormattedMessage id="info.password" defaultMessage="Password" /></label>
			    <input type="password" id="inputPassword" ref="password" className="form-control" placeholder="password" required/>
			    <br/>
			    <div className="checkbox">
			      <label>
			        <input type="checkbox" value="remember-me"/> <FormattedMessage id="info.remember" defaultMessage="Remember Me" />
			      </label>
			    </div>
			    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handelLogin}><FormattedMessage id="info.signin" defaultMessage="Sign in" /></button>
			</form>
		)
	}
}

export default Login;