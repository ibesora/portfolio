import React, { Component } from 'react';
import Category from '../Category/Category.js';
import Role from '../Role/Role.js';
import Logo from '../Logo/Logo.js';
import styles from './PageContent.module.css';

class PageContent extends Component {
	render() {
		return (
			<div className={ `${styles.content} ${ this.props.isLast ? styles.isLast : "" }` } >
				<div className={ styles.title }>{ this.props.title }</div>
				{ this.renderCategories(this.props.categories) }
				{ this.renderRoles(this.props.roles) }
				<div className={ styles.text }>{ this.props.description }</div>
				<div className={ styles.techs }>
					{ this.renderUsedTechs(this.props.techUsed) }
				</div>
			</div>
		);
	}

	renderCategories(categoriesDescriptor) {

		let categories = [];
		for(let i=0; i<categoriesDescriptor.length; ++i) {
			categories.push(<Category {...categoriesDescriptor[i]} />);
		}

		return categories;

	}

	renderRoles(rolesDescriptor) {

		let roles = [];
		for(let i=0; i<rolesDescriptor.length; ++i) {
			roles.push(<Role {...rolesDescriptor[i]} />);
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
