import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
	render() {
		return (
			<div className="logo">
				<img src={logoSrc} className="logo-image" alt={logoName} />
			</div>
		);
	}
}

export default Logo;
