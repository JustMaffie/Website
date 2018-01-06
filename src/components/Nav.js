import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Nav extends Component {
	render() {
		return (
			<div>
			  <Menu fixed='top' inverted> {/* For some reason the color prop doesn't work without inverted, I don't mind */}
			    <Container>
			      <Menu.Item as={Link} to="/" header>
			        JustMaffie
			      </Menu.Item>
			      <Menu.Item as={Link} to="/donate">Donate</Menu.Item>
			        {/*<Menu.Item as={Link} to="/projects">projects</Menu.Item>*/}
			      </Container>
			  </Menu>
			  <br />
			  <br />
			  <br />
			</div>
		)
	}
}

export default Nav;