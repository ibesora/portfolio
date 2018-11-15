import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
	render() {
		return (
			<div class="container">
    			<div class="fixed-container">
        			<img src="http://placehold.it/1000x300" class="fixed" />
    			</div>
    			<div class="overlay">
        			content goes here
    			</div>
			</div>
		);
	}
}

export default Page;
