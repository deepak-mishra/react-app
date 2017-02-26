import React from 'react';
import { Link } from 'react-router';

import { intlShape, injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
    dashboard: {
        id: 'menu.item_dashboard',
        defaultMessage: 'Dashboard',
    },
    about: {
        id: 'menu.item_about',
        defaultMessage: 'About',
    },
    login: {
        id: 'menu.item_login',
        defaultMessage: 'Login',
    }
});

class Header extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.changeLang = this.changeLang.bind(this);
  	}

	changeLang(e) {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(e.target.value);
        }
    }

	render(){
 		const {formatMessage} = this.props.intl;
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded mb-4">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			  	</button>
			  	<div className="collapse navbar-collapse" id="navbarNavDropdown">
			 		<ul className="navbar-nav mr-auto">
			      		<li className="nav-item active"><Link to="/dashboard" className="nav-link" activeClassName="active">{formatMessage(messages.dashboard)}</Link></li>
			      		<li className="nav-item"><Link to="/about" className="nav-link" activeClassName="active">{formatMessage(messages.about)}</Link></li>
			      		<li className="nav-item"><Link to="/login" className="nav-link" activeClassName="active">{formatMessage(messages.login)}</Link></li>
					</ul>
					<span className="navbar-text">Language: &nbsp;</span>
					<div className="btn-group" role="group" aria-label="lang-bar">
						<button type="button" value="en" className="btn btn-secondary" onClick={this.changeLang}>EN</button>
						<button type="button" value="fr"className="btn btn-secondary" onClick={this.changeLang}>FR</button>
						<button type="button" value="hk" className="btn btn-secondary" onClick={this.changeLang}>HK</button>
					</div>
			  	</div>
			</nav>


		)
	}
}

Header.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(Header);