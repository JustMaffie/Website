import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'

class Footer extends Component {
	render() {
		return (
			<div>
			  <Segment inverted vertical style={{width:"100%",padding:'5em 0em',position:"fixed",bottom:0}}>
	        <Container>
	          Copyright &copy; JustMaffie 2018<div><a href="https://github.com/JustMaffie/Website">This website is open source</a></div>
	        </Container>
	      </Segment>
			</div>
		)
	}
}

export default Footer;