import React, { Component } from 'react';

import SharedStyles from '../Shared/Shared.module.css';

class Role extends Component {
	render() {
		return (
			<div className={ `${SharedStyles.leftMargin} ${SharedStyles.inline}` }>
				{ this.props.name }
			</div>
		);
	}
}

export default Role;
