import React, { Component } from 'react';
import SharedStyles from '../Shared/Shared.module.css';
import styles from './IntroPage.module.css';

class IntroPage extends Component {
	render() {
		return (
			<div id="introPage" className={ styles.introPage }>
				<div className={ SharedStyles.section }>
					<h1 className={ SharedStyles.title }>A complete-and-up-to-date list of things I've done*</h1>
					<div className={ SharedStyles.row }>
						<img className={ `${ SharedStyles.avatar } ${ SharedStyles.rounded} ${SharedStyles.col1}` } src="/files/me.jpg" alt="me" title="me"></img>
						<div className= { SharedStyles.col3 }>
							<p>My name is Isaac and I'm from <a href="https://en.wikipedia.org/wiki/Berga" target="_blank" rel="noopener noreferrer">Berga</a>, a small town in the catalan side of the Pirenees. I have been working as a software engineer in various positions and industries since 2005: from developing a newspaper printing plant simulator to working with <b>web mapping</b> and <b>AR</b> through being a <b>researcher</b> in the <a href="https://www.virvig.eu/" target="_blank" rel="noopener noreferrer"><b>VR</b> research group</a> at <a href="https://www.upc.edu/en?set_language=en" target="_blank" rel="noopener noreferrer">UPC</a>, funding my own startup, <b>Alter Sport</b>, and working on different European projects.</p>
							<p>I'm mostly interested in <b>computer graphics</b>, <b>algorithms</b> and <b>web technologies</b> although nowadays I'm also drawn into <b>deep learning</b>.
							<br />If I had to simplify, I would say that I am attracted to everything that presents a <b>challenge</b>. <br />It's this eagerness to challenge myself and to improve that has brought me to learn a vast array of technologies. I'm currently enrolled in a PhD degree focused in 3d city reconstruction from oblique images.</p>
							<p>I also love <b>teaching</b>, something I discovered doing math and physics classes after I graduated, helping <b>others</b> and <b>growing</b>, both professionally and personally, with my teammates. Oh, and if it's not evident enough from the header image, I also love mountains and everything that's commonly associated with them: snow, skiing, hiking, ...</p>
							<p></p>
							<p>On this website, you'll find some of the projects I've been involved with in no concrete order. Don't hesitate to get in touch at isaac(dot)besora(at)gmail(dot)com if you want more information about a project or just want to talk :P</p>
						</div>
					</div>
					<div className={ `${SharedStyles.row} ${SharedStyles.alignRight}` }>
						<div className={ SharedStyles.fullWidth }>
							<img className={ `${ SharedStyles.largeImage } ${ SharedStyles.rounded}` } src="/files/Berga.jpg" alt="Berga" title="Berga"></img>
							<div className={ SharedStyles.attribution }>Berga, the best hometown in the entire world - Pere López - CC BY-SA 3.0 </div>
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