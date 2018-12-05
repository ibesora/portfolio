import React, { Component } from 'react';

import SharedStyles from '../Shared/Shared.module.css';
import Style from './Role.module.css';

class Role extends Component {
	render() {
		return (
			<div className={ `${SharedStyles.leftMargin} ${SharedStyles.inline} ${Style.role}` }>
				{ this.props.name }
			</div>
		);
	}
}

export default Role;
