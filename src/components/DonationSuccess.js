import React, { Component } from 'react';
import Layout from './Layout';
import {FontIcon} from 'material-ui';
import {green500} from 'material-ui/styles/colors';

class DonationSuccess extends Component {
	render() {
		return (
			<Layout>
			  <center>
					<FontIcon	className="material-icons" style={{"font-size":"400%"}} color={green500}>check</FontIcon>
					<h1>Donation Success</h1>
					<h3>Thank you so much for your donation!</h3>
				</center>
     	</Layout>
		)
	}
}

export default DonationSuccess;