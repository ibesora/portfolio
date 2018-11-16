import React, { Component } from 'react';
import PageContent from '../PageContent/PageContent.js'
import './Page.css';

class Page extends Component {
	render() {
		return (
			<div>
				<div className="parallax fixed-image" id={ `page-${ this.props.id }`} style={{backgroundImage: `url("${ this.props.temporaryImage }")`}}>
				</div>
				<PageContent {...this.props}/>
			</div>
		);
	}
}

export default Page;