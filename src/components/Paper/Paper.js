import React, { Component } from 'react';

import Link from '../Link/Link.js';

class Paper extends Component {
	render() {
		return (
			<div><Link href={this.props.url}>{ this.props.title }</Link> - <i>{this.props.journal}</i></div>
		);
	}
}

export default Paper;