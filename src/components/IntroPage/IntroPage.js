import React, { Component } from 'react';
import styles from './IntroPage.css';

class IntroPage extends Component {
	render() {
		return (
			<div className={ styles.introPage }>
				<picture className={ styles.header}>
					<source srcset="/files/header1920.jpg" media="(min-width: 1280px)" alt="background" />
					<source srcset="/files/header1280.jpg" media="(min-width: 570px)" alt="background" />
					<img src="/files/header570.jpg" alt="background" />
				</picture>
				<img alt="logo" src="/files/logos/logo.svg" className={ styles.logo }></img>
				Intro!
			</div>
		);
	}
}

export default IntroPage;