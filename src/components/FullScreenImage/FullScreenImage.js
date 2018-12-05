import React, { Component } from 'react';
import Loader from '../Loader/Loader.js';

import SharedStyles from '../Shared/Shared.module.css';
import styles from './FullScreenImage.module.css';

class FullScreenImage extends Component {
	render() {
		return (
			<div className={ `${styles.fullscreen} ${styles.black} ${ !this.props.visible ? SharedStyles.hide : SharedStyles.crossCursor }`} onClick={ this.props.onCloseHandler }>
				<Loader />
				<img alt={ this.props.alt } src={ this.props.imageURL }></img>
				<div className={ `${SharedStyles.imageText} ${styles.imageText}` }>{this.props.text} </div>
			</div>
		);
	}

}

export default FullScreenImage;
