import React, { Component } from 'react';
import Category from '../Category/Category.js';
import Role from '../Role/Role.js';
import Logo from '../Logo/Logo.js';
import SharedStyles from '../Shared/Shared.module.css';
import styles from './PageContent.module.css';

class PageContent extends Component {
	render() {
		return (
			<div className={ `${styles.content} ${ this.props.isLast ? styles.isLast : "" }` } >
				<div className={SharedStyles.section}>
					<h1 className={ SharedStyles.title }>{ this.props.title }</h1>
					<div className={ SharedStyles.leftMargin}> 
						<b>{ `${this.props.roles.length > 1 ? "Roles" : "Role"} ` }<i className={`fa fa-long-arrow-right ${SharedStyles.leftMargin}`} aria-hidden="true"></i></b>
						{ this.renderRoles(this.props.roles) } 
					</div>
					<div className={ SharedStyles.leftMargin }>
						{ this.props.children }
					</div>
					<div className={ `${styles.techs} ${SharedStyles.leftMargin}` }>
						<b className={ styles.techText }> Technologies used in this project <i className={`fa fa-long-arrow-right ${SharedStyles.leftMargin}`} aria-hidden="true"></i> </b>
						<br />
						{ this.renderUsedTechs(this.props.techUsed) }
					</div>
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
