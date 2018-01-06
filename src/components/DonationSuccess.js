import React, { Component } from 'react';
import Layout from './Layout';
import { Grid, Header, Icon } from 'semantic-ui-react'

class DonationSuccess extends Component {
	render() {
		return (
  		<Layout>
				<Grid padded textAlign='center' stretched>
				  <Grid.Row columns='equal'>
				    <Grid.Column>
				      <Header as='h1' icon textAlign='center'>
				        <Icon name='check' color="green" />
				        Success
				        <h3>Thank you so much for donating!</h3>
				      </Header>
				    </Grid.Column>
				  </Grid.Row>
				</Grid>
		  </Layout>
		)
	}
}

export default DonationSuccess;