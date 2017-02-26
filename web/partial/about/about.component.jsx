import React from 'react';
import { FormattedMessage } from 'react-intl';

class About extends React.Component {

	render(){
		return(
			<p> <FormattedMessage id="info.about" defaultMessage="About" /> </p>
		)
	}
}

export default About;