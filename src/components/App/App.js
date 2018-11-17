import React, { Component } from 'react';
import * as data from '../../data/data.js';
import './App.css';
import IntroPage from '../IntroPage/IntroPage.js';
import OutroPage from '../OutroPage/OutroPage.js';
import Page from '../Page/Page.js';

class App extends Component {
	constructor(props) {

		super(props);
		this.state = { pages: data.Pages };

	}

	render() {
		return (
			<div className="App">
				<IntroPage />
				{ this.renderPages() }
				<OutroPage />
			</div>
		);
	}

	renderPages() {
		let pages = [];

		for(let i=0; i<this.state.pages.length; ++i) {
			const currentPage = this.state.pages[i];
			currentPage.isLast = (i === this.state.pages.length - 1);
			pages.push(<Page  { ...currentPage }/>);
		}

		return pages;
	}
}

export default App;
