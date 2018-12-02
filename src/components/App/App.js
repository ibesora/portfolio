import React, { Component } from 'react';
import IntroPage from '../IntroPage/IntroPage.js';
import FullScreenImage from '../FullScreenImage/FullScreenImage.js';
import MainContent from '../MainContent/MainContent.js';
import Menu from '../Menu/Menu.js';
import OutroPage from '../OutroPage/OutroPage.js';

import Shared from '../Shared/Shared.module.css';
import ScrollingArrowStyle from '../Shared/ScrollingArrow.module.css';

class App extends Component {
	constructor(props) {

		super(props);
		this.state = {
			showScrollArrow: true, 
			showFullScreenImage: false,
			fullScreenImageURL: ""
		};

	}

	render() {
		return (
			<div>
				<FullScreenImage 
					visible={ this.state.showFullScreenImage } 
					imageURL={ this.state.fullScreenImageURL } 
					alt={ this.state.fullScreenImageAlt }
					text={ this.state.fullScreenImageText }
					onCloseHandler={ () => this.fullScreenImageClosed() }
				/>
				<Menu menuHandler={ this.changeVisiblePages }/>
				<IntroPage />
				<MainContent imageClickHandler={ this.changeFullScreenImageStatus.bind(this) }/>
				<OutroPage />
				<div className={ `${ScrollingArrowStyle.scrollDownArrow} ${this.state.showScrollArrow ? Shared.display : Shared.hide }` }></div>
			</div>
		);
	}

	fullScreenImageClosed() {

		this.setState(() => { return { showFullScreenImage: false }});

	}

	changeVisiblePages() {

	}

	changeFullScreenImageStatus(imageURL, imageAlt, imageText) {

		this.setState(() => { return { showFullScreenImage: true, fullScreenImageURL: imageURL, 
			fullScreenImageAlt: imageAlt, fullScreenImageText: imageText }});

	}

	componentDidMount() {
		document.addEventListener("scroll", this.scroll.bind(this));
	}

	scroll() {
		let shouldShowScrollArrow = true;

		if((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
			shouldShowScrollArrow = false;
		}
		
		this.setState(() => { return { showScrollArrow: shouldShowScrollArrow } });

	}
}

export default App;
