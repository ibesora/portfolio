import React, { Component } from 'react';
import * as data from '../../data/data.js';
import './App.css';
import IntroPage from '../IntroPage/IntroPage.js';
import Page from '../Page/Page.js';

class App extends Component {
	constructor(props) {

		super(props);
		this.state = { pages: data.Pages };
		console.log(this.state);

	}

	render() {
		return (
			<div className="App">
				<IntroPage />
				{ this.renderPages() }
			</div>
		);
	}

	renderPages() {
		let pages = [];

		for(let i=0; i<this.state.pages.length; ++i) {
			const currentPage = this.state.pages[i];
			pages.push(<Page  { ...currentPage }/>);
		}
		console.log(pages);

		return pages;
	}
}

export default App;
