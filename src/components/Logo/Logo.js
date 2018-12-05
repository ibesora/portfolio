import React, { Component } from 'react';
import styles from './Logo.module.css';

class Logo extends Component {
	render() {
		return (
			<div className={styles.logo}>
				<a target="_blank" rel="noopener noreferrer" href={this.props.link}>
					<img src={this.props.src} className={styles.logoImage} alt={this.props.name} title={this.props.name} />
				</a>
			</div>
		);
	}
}

export default Logo;
