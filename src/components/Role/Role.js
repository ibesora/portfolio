import React, { Component } from 'react';

class Role extends Component {
	render() {
		return (
			<div className="role">
				{ this.props.name }
			</div>
		);
	}
}

export default Role;
