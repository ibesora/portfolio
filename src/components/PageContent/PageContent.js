import React, { Component } from 'react';
import Role from '../Role/Role.js';
import Logo from '../Logo/Logo.js';
import './PageContent.css';

class PageContent extends Component {
	render() {
		return (
			<div className={ `content ${ this.props.isLast ? "isLast" : "" }` } >
				<div className="title">{ this.props.title }</div>
				<div className="type">{ this.props.category }</div>
				{ this.renderRoles(this.props.roles) }
				<div className="text">{ this.props.description }</div>
				<div className="techs">
					{ this.renderUsedTechs(this.props.techUsed) }
				</div>
			</div>
		);
	}

	renderRoles(rolesDescriptor) {

		let roles = [];
		for(let i=0; i<roles.length; ++i) {
			roles.push(<Role {...roles[i]} />);
		}

		return roles;

	}

	renderUsedTechs(techs) {
		let logos = [];
		for(let i=0; i<techs.length; ++i) {
			logos.push(<Logo {...techs[i]} />);
		}
		return logos;
	}
}

export default PageContent;
