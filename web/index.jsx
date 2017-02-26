import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import {IntlProvider, FormattedMessage, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';

addLocaleData(fr);

import MessagesEn from '../public/i18n/lang/en.json';
import MessagesFr from '../public/i18n/lang/fr.json';

import Style from './css/style.scss';

import Header from './partial/header.component.jsx';
import Footer from './partial/footer.component.jsx';
import Dashboard from './partial/dashboard/dashboard.component.jsx';
import About from './partial/about/about.component.jsx';
import Login from './partial/login/login.component.jsx';

class App extends React.Component {
  
  constructor(props) {
  	super(props);
  	this.state = {
      locale: 'fr',
      messages: MessagesFr,
      msgfr:MessagesFr,
      msgen:MessagesEn,
    };

    this.changeLang = this.changeLang.bind(this);
  }	

  changeLang(value){
  	 this.setState({locale: value});
  	 if(value === 'en'){
  	 	 this.setState({messages: this.state.msgen});
  	 }

  	if(value === 'fr'){
  	 	this.setState({messages: this.state.msgfr});
  	 }
  }

  render () {
  	const { locale } = this.state;
  	const { messages } = this.state; 

    return (
    	<IntlProvider locale={locale} messages={messages}>
			<div>
				<Header onClick={this.changeLang} />
				<div  className="container">
					<h2><FormattedMessage id="info.unsupportedBrowser" defaultMessage="Welcome to Application" /></h2>
					<br />
					{this.props.children}
					<br />
					
			   	</div>
			   	
		    </div>
	    </IntlProvider>
    )
  }
}

//render(<App/>, document.getElementById('app'));
render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
			<Route path="login" component={Login}/>
			<Route path="dashboard" component={Dashboard}/>
{/*			<Route path="users" component={Users}>
				<Route path="/user/:userId" component={User}/>
			</Route>
			<Route path="*" component={NoMatch}/>*/}
		</Route>
	</Router>
), document.getElementById('app'));