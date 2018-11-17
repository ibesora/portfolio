import React, { Component } from 'react';
import PageContent from '../PageContent/PageContent.js'
import styles from './Page.module.css';

class Page extends Component {
	render() {
		return (
			<div>
				<div className={ ` ${styles.parallax} ${styles.fixedImage}` }  id={ `page-${ this.props.id }`} style={{backgroundImage: `url("${ this.props.temporaryImage }")`}}>
				</div>
				<PageContent {...this.props}/>
			</div>
		);
	}
}

export default Page;