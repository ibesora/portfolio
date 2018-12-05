import React, { Component } from 'react';

class Link extends Component {

	render() {
		return (
			<a href={this.props.href} target={ this.props.target || "_blank" } rel="noopener noreferrer">{this.props.children}</a>
		);
	}
}

export default Link;
