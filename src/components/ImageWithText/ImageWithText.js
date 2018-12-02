import React, { Component } from 'react';

import SharedStyles from '../Shared/Shared.module.css';

class ImageWithText extends Component {
	render() {
		return (
			<div className={ `${SharedStyles.smallWidth} ${SharedStyles.leftMarginAuto} ${this.props.alignRight ? "" : SharedStyles.rightMarginAuto}` }>
				<img 
					className={ `${this.props.imageClassName || ""} ${ !!this.props.noEnlarge ? "" : SharedStyles.plusCursor } ${SharedStyles.smallWidth}` } 
					src={ this.props.source } 
					alt={ this.props.alt } 
					title={!!this.props.showAltAsTitle ? this.props.alt : ""}
					onClick={ () => this.showBigImage() }>
				</img>
				<div className={ SharedStyles.imageText }>{this.props.text} </div>
			</div>
		);
	}

	showBigImage() {

		if(this.props.noEnlarge || !this.props.imageClickHandler || !this.props.bigImageSrc)
			return;

		this.props.imageClickHandler(this.props.bigImageSrc, this.props.alt, this.props.text);

	}
}

export default ImageWithText;