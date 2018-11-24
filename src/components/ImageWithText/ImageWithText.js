import React, { Component } from 'react';

import SharedStyles from '../Shared/Shared.module.css';

class ImageWithText extends Component {
	render() {
		return (
			<div className={ `${SharedStyles.smallWidth} ${SharedStyles.leftMarginAuto} ${this.props.alignRight ? "" : SharedStyles.rightMarginAuto}` }>
				<img className={ `${this.props.imageClassName || ""} ${SharedStyles.smallWidth}` } src={ this.props.source } alt={ this.props.alt } title={!!this.props.showAltAsTitle ? this.props.alt : ""}></img>
				<div className={ SharedStyles.imageText }>{this.props.text} </div>
			</div>
		);
	}
}

export default ImageWithText;