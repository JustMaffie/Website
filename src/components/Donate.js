import React, { Component } from 'react';
import Layout from './Layout';
import DonationButton from './DonationButton';
import {FontIcon} from 'material-ui';
import {green500} from 'material-ui/styles/colors';

class Donate extends Component {
	render() {
		return (
			<Layout>
			  <center>
					<FontIcon	className="material-icons" style={{"font-size":"400%"}} color={green500}>check</FontIcon>
					<h1>Donating</h1>
					<h3>Hey, thank you for your interest in donating, if you would like to donate for a specific project, please add a note when you finalize your purchase, and I'll see to it it'll go that project.</h3>
					<DonationButton />
				</center>
     	</Layout>
		)
	}
}

export default Donate;