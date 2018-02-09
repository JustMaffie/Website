import React, { Component } from 'react';
import {AppBar, Drawer, MenuItem} from 'material-ui'
import {withRouter} from 'react-router-dom';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.render = this.render.bind(this)
    this.state = {open: false};
  }

  handleTouchMap() {
    this.setState({open: !this.state.open});
	}
	
	render() {
		var redirectTo = (route) => {
			return function(event) {
				this.props.history.push(route)
			}.bind(this)
		}
		redirectTo = redirectTo.bind(this)
		var redirectToExternal = (url) => {
			return function(event) {
				var win = window.open(url, '_blank');
				win.focus();
			}
		}
		return (
			<div>
				<AppBar title="JustMaffie" onLeftIconButtonClick={this.handleTouchMap.bind(this)}>
					<Drawer open={this.state.open}>
						<AppBar title="JustMaffie" onLeftIconButtonClick={this.handleTouchMap.bind(this)}/>	
						<MenuItem onClick={redirectTo("/")}>Home</MenuItem>
						<MenuItem onClick={redirectTo("/donate")}>Donate</MenuItem>
						<div style={{bottom:0,position:"fixed"}}>
							<MenuItem onClick={redirectToExternal("https://github.com/JustMaffie/Website")}>This website is open source</MenuItem>
							<MenuItem>Copyright &copy; JustMaffie 2018</MenuItem>
						</div>
					</Drawer>
				</AppBar>
			  <br />
			  <br />
			  <br />
			</div>
		)
	}
}

Nav = withRouter(Nav)

export default Nav;