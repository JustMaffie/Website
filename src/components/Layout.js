import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

class Layout extends Component {
	render() {
		return (
			<div>
				<Nav />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default Layout;