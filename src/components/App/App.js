import React, { Component } from 'react';
import Menu from '../Menu/Menu.js';
import IntroPage from '../IntroPage/IntroPage.js';
import MainContent from '../MainContent/MainContent.js';
import OutroPage from '../OutroPage/OutroPage.js';

import Shared from '../Shared/Shared.module.css';
import ScrollingArrowStyle from '../Shared/ScrollingArrow.module.css';

class App extends Component {
	constructor(props) {

		super(props);
		this.state = {showScrollArrow: true};

	}

	render() {
		return (
			<div>
				<Menu />
				<IntroPage />
				<MainContent />
				<OutroPage />
				<div className={ `${ScrollingArrowStyle.scrollDownArrow} ${this.state.showScrollArrow ? Shared.display : Shared.hide }` }></div>
			</div>
		);
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
