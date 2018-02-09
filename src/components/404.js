import React, { Component } from 'react';
import Layout from './Layout';
import {FontIcon} from 'material-ui';

class NotFound extends Component {
	render() {
		return (
		  <Layout>
				<center>
					<FontIcon	className="material-icons" style={{"font-size":"400%"}}>videogame_asset</FontIcon>
					<h1>404</h1>
					<h4 style={{color:"grey"}}>I'm sorry, I don't seem to be able to find this page?</h4>
				</center>
		  </Layout>
		)
	}
}

export default NotFound;