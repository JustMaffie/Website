import React, { Component } from 'react';
import Layout from './Layout';
import { Grid, Header, Label } from 'semantic-ui-react'

class Home extends Component {
	render() {
		var onClick = function(url){return function(){window.location=url;}};
		return (
			<Layout>
				<Grid padded textAlign='center' stretched>
				  <Grid.Row columns='equal'>
				    <Grid.Column>
				      <Header as='h1' icon textAlign='center'>
				        Hey,
				        <h3>Hey, welcome to my website, I'm JustMaffie, I don't have much to do, so I made this, if you have suggestions as to what I can put on here please message me on Twitter/Discord.</h3>
				      </Header>
				    </Grid.Column>
				  </Grid.Row>
				</Grid>
				<center>
					<Label as="a" onClick={onClick("https://twitter.com/JustMaffie")} color="blue">@JustMaffie<Label.Detail>Twitter</Label.Detail></Label>
					<Label as="a" color="blue">JustMaffie#8433<Label.Detail>Discord</Label.Detail></Label>
					<Label as="a" onClick={onClick("https://github.com/JustMaffie")} color="blue">@JustMaffie<Label.Detail>GitHub</Label.Detail></Label>
				</center>
			</Layout>
		)
	}
}

export default Home;