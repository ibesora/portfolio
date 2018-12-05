import React, { Component } from 'react';

import SharedStyles from '../Shared/Shared.module.css';

class Category extends Component {
	render() {
		return (
			<div className={ SharedStyles.leftMargin }>
				{ this.props.name }
			</div>
		);
	}
}

export default Category;
