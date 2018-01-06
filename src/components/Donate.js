import React, { Component } from 'react';
import Layout from './Layout';
import DonationButton from './DonationButton';
import { Grid, Header, Icon } from 'semantic-ui-react'

class Donate extends Component {
	render() {
		return (
			<Layout>
				<Grid padded textAlign='center' stretched>
				  <Grid.Row columns='equal'>
				    <Grid.Column>
				      <Header as='h1' icon textAlign='center'>
				        <Icon name='check' color="green" />
				        Donating
				        <h3>Hey, thank you for your interest in donating, if you would like to donate for a specific project, please add a note when you finalize your purchase, and I'll see to it it'll go that project.</h3>
				        <DonationButton />
				      </Header>
				    </Grid.Column>
				  </Grid.Row>
				</Grid>
     		</Layout>
		)
	}
}

export default Donate;