import React, { Component } from 'react';
import PageContent from '../PageContent/PageContent.js'
import ResponsivePicture from '../ResponsivePicture/ResponsivePicture.js'
import styles from './Page.module.css';

class Page extends Component {
	render() {
		return (
			<div>
				<div className={ ` ${styles.parallax} ${styles.fixedImage}` }  id={ `page-${ this.props.id }`}>
					<ResponsivePicture sources={ this.props.srcSet } alt={this.props.alt} />
				</div>
				<PageContent {...this.props}>
					{this.props.children}
				</PageContent>
			</div>
		);
	}
}

export default Page;