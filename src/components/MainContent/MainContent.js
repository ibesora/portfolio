import React, { Component } from 'react';
import * as data from '../../data/data.js';
import Page from '../Page/Page.js';

class MainContent extends Component {
	constructor(props) {

		super(props);
		this.state = { pages: data.Pages };

	}

	render() {
		return (
			<div>
				<Page isLast={false} {...data.Pages[0]}>
					<p>This project was developed by the <a href="https://www.virvig.eu" target="_blank">ViRVIG</a> research group and the Visual Computing Laboratory of ISTI-CNR in Pisa. It was commissioned by <a href="https://www.museunacional.cat" target="_blank">MNAC</a>, the National Art Museum of Catalonia.</p>
					<p>The project involved a <b>high-fidelity acquisition</b> of the geometry and appearance of the Romanic entrance of the Ripoll Monastery in Catalonia, its <b>geometry processing</b> and <b>repair</b>, the <b>creation of a multiresolution digital 3D model</b> involving 
					a precise mesh of 173 millions of triangles and <b>a set of user-friendly visualization tools</b>.
					The result was open to the public in MNAC from February to May 2008 and is now visible as part of its permanent exhibition. </p>
					<p>Visitors of the exhibition interact with the virtual reproduction in an immersive <b>VR kiosk</b> using a touch-screen and a back-projection display screen with passive stereo. Visitiors can simply navigate and zoom-in in different parts of the entrance, or they can get further information just 
					by touching different hotspots that make 3D information boards appear in front of important components of the façade.</p>
					<p>I helped with the <b>repairing of holes</b> on the mesh resulting from the acquisition process and I was the sole responsible for the implementation of the <b>custom stereo renderer</b> that was used to interactively inspect the mesh.</p>
				</Page>
				<Page isLast={false} {...data.Pages[1]}>
					Descripció 2
				</Page>
				<Page isLast={false} {...data.Pages[2]}>
					Descripció 3
				</Page>
				<Page isLast={false} {...data.Pages[3]}>
					Descripció 4
				</Page>
				<Page isLast={false} {...data.Pages[4]}>
					Descripció 3
				</Page>
				<Page isLast={false} {...data.Pages[5]}>
					Descripció 5
				</Page>
				<Page isLast={false} {...data.Pages[6]}>
					Descripció 6
				</Page>
				<Page isLast={false} {...data.Pages[7]}>
					Descripció 7
				</Page>
				<Page isLast={false} {...data.Pages[8]}>
					Descripció 8
				</Page>
				<Page isLast={false} {...data.Pages[9]}>
					Descripció 9
				</Page>
				<Page isLast={true} {...data.Pages[10]}>
					Descripció 10
				</Page>
			</div>
		);
	}
}

export default MainContent;
