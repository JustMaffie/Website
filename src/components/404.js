import React, { Component } from 'react';
import Layout from './Layout';
import { Grid, Header, Icon } from 'semantic-ui-react'

class NotFound extends Component {
	render() {
		return (
		  <Layout>
				<Grid padded textAlign='center' stretched>
				  <Grid.Row columns='equal'>
				    <Grid.Column>
				      <Header as='h1' icon textAlign='center'>
				        <Icon name='game' />
				        404
				        <Header.Subheader>
				          I'm sorry, I don't seem to be able to find this page?
				        </Header.Subheader>
				      </Header>
				    </Grid.Column>
				  </Grid.Row>
				</Grid>
		  </Layout>
		)
	}
}

export default NotFound;