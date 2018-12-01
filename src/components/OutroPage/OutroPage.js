import React, { Component } from 'react';

import SharedStyles from '../Shared/Shared.module.css';
import styles from './OutroPage.module.css';

class OutroPage extends Component {
	render() {
		return (
			<div className={ `${styles.outroPage} ${SharedStyles.grey}` }>
				<div className={ `${SharedStyles.section} ${SharedStyles.noBottomMargin}` }>
					<div className={ SharedStyles.row }>
						<div className= { `${SharedStyles.col1} ${SharedStyles.alignCenter}` }>
							<a href="mailto:isaac.besora@gmail.com" title="Write me an email"><i className={`fa fa-2x fa-at ${SharedStyles.marginTop3}`}></i></a>
						</div>
						<div className= { `${SharedStyles.col1} ${SharedStyles.alignCenter}` }>
							<a href="https://www.twitter.com/ibesora" target="_blank" rel="noopener noreferrer" title="Follow me on Twitter"><i className={`fa fa-2x fa-twitter ${SharedStyles.marginTop3}`}></i></a>
						</div>
						<div className= { `${SharedStyles.col1} ${SharedStyles.alignCenter}` }>
							<a href="https://www.github.com/ibesora" target="_blank" rel="noopener noreferrer" title="Take a look at my projects on Github"><i className={`fa fa-2x fa-github ${SharedStyles.marginTop3}`}></i></a>
						</div>
						<div className= { `${SharedStyles.col1} ${SharedStyles.alignCenter}` }>
							<a href="https://www.linkedin.com/in/ibesora/" target="_blank" rel="noopener noreferrer" title="Connect with me on Linkedin"><i className={`fa fa-2x fa-linkedin ${SharedStyles.marginTop3}`}></i></a>
						</div>
						<div className= { `${SharedStyles.col1} ${SharedStyles.alignCenter}` }>
							<a href="#download" target="_blank" rel="noopener noreferrer" title="Download my curriculum vitae"><i className={`fa fa-2x fa-download ${SharedStyles.marginTop3}`}></i></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default OutroPage;
