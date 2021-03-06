import React, { Component } from 'react';
import ImageWithText from '../ImageWithText/ImageWithText.js';
import Link from '../Link/Link.js';

import SharedStyles from '../Shared/Shared.module.css';
import styles from './IntroPage.module.css';

class IntroPage extends Component {
	render() {
		return (
			<div id="introPage" className={ styles.introPage }>
				<div className={ SharedStyles.section }>
					<h1 className={ `${SharedStyles.title} ${SharedStyles.marginTop40}` }>A complete-and-up-to-date list of things I've worked on*</h1>
					<div>
						<img className={ `${ SharedStyles.avatar } ${ SharedStyles.rounded} ${SharedStyles.floatLeft} ${SharedStyles.margin10} ${SharedStyles.marginRight25}` } src="files/me.jpg" alt="me" title="me"></img>
						<div className= { SharedStyles.col3 }>
							<p className= { SharedStyles.noTopMargin }>My name is Isaac and I'm from <a href="https://en.wikipedia.org/wiki/Berga" target="_blank" rel="noopener noreferrer">Berga</a>, a small town in the catalan side of the Pirenees. I have been working as a software engineer in various positions and industries since 2005: from developing a newspaper printing plant simulator to working with <b>web mapping</b> and <b>AR</b> through being a <b>researcher</b> in <a href="https://www.virvig.eu/" target="_blank" rel="noopener noreferrer">ViRVIG</a>, the <b>VR</b> research group at <a href="https://www.upc.edu/en?set_language=en" target="_blank" rel="noopener noreferrer">UPC</a>, funding my own startup, <b>Alter Sport</b>, and working on different European projects.</p>
							<p>I'm mostly interested in <b>computer graphics</b>, <b>algorithms</b> and <b>web technologies</b> although nowadays I'm also drawn into <b>deep learning</b>.
							<br />If I had to simplify, I would say that I am attracted to everything that presents a <b>challenge</b>. <br /> <br />It's this eagerness to challenge myself and to improve that has brought me to learn a vast array of technologies and to be currently enrolled in a PhD degree focused in 3d city reconstruction from oblique images.</p>
							<p>I also love <b>teaching</b>, something I discovered doing math and physics classes after I graduated, helping <b>others</b> and <b>growing</b>, both professionally and personally, with my teammates. Oh, and if it's not evident enough from the header image, I also love mountains and everything that's commonly associated with them: snow, skiing, hiking, ...</p>
							<p></p>
							<p>On this website, you'll find some of the projects I've been involved with in no concrete order. Don't hesitate to get in touch at <Link href="mailto:isaac.besora@gmail.com">isaac.besora@gmail.com</Link> if you want more information about a project or just want to talk :P</p>
						</div>
					</div>
					<div className={ `${SharedStyles.row} ${SharedStyles.alignRight}` }>
						<div className={ `${SharedStyles.fullWidth}` }>
							<ImageWithText className={ `${ SharedStyles.largeImage } ${ SharedStyles.rounded}` } 
								source="files/Berga.jpg" alt="Berga" showAltAsTitle={true} alignRight={true}
								text="Berga, the best hometown in the entire world - Pere López - CC BY-SA 3.0" 
								noEnlarge
								/>
						</div>
					</div>
					<br />
					<div className = { `${SharedStyles.attribution} ${SharedStyles.alignRight}` } >* Joking, it doesn't matter when you are reading this, this list is by all means neither exhaustive nor up-to-date </div>
				</div>
			</div>
		);
	}
}

export default IntroPage;