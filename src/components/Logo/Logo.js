import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
	render() {
		return (
			<div className="logo">
				<a target="_blank" rel="noopener noreferrer" href={this.props.link}>
					<img src={this.props.src} className="logo-image" alt={this.props.name} title={this.props.name} />
				</a>
			</div>
		);
	}
}

export default Logo;
