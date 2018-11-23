import React, { Component } from 'react';
import * as data from '../../data/data.js';
import Link from '../Link/Link.js';
import Page from '../Page/Page.js';
import Paper from '../Paper/Paper.js';

import SharedStyles from '../Shared/Shared.module.css';

class MainContent extends Component {
	constructor(props) {

		super(props);
		this.state = { pages: data.Pages };

	}

	render() {
		return (
			<div>
				<Page isLast={false} {...data.Pages[0]}>
					<p>This project was joint developed by the <Link href="https://www.virvig.eu">ViRVIG</Link> research group and the <Link href="http://vcg.isti.cnr.it/">Visual Computing Laboratory</Link> of ISTI-CNR in Pisa. It was commissioned by <Link href="https://www.museunacional.cat">MNAC</Link>, the National Art Museum of Catalonia.</p>
					<p>The project involved a <b>high-fidelity acquisition</b> of the geometry and appearance of the Romanic entrance of the Ripoll Monastery in Catalonia, its <b>geometry processing</b> and <b>repair</b>, the <b>creation of a multiresolution digital 3D model</b> involving 
					a precise mesh of 173 millions of triangles with and edge size of millimeters and <b>a set of user-friendly visualization tools</b>.
					The result was open to the public in MNAC from February to May 2008 and is now visible as part of its permanent exhibition. </p>
					<p>Visitors of the exhibition interact with the virtual reproduction in an immersive <b>VR kiosk</b> using a touch-screen and a back-projection display screen with passive stereo. Visitors can simply navigate and zoom-in in different parts of the entrance, or they can get further information just 
					by touching different hotspots that make 3D information boards appear in front of important components of the façade.</p>
					<p>I helped with the process of <b>repairing of holes</b> on the mesh resulting from the acquisition process implementing an algorithm to detect them and I was responsible for the implementation of the <b>custom stereo renderer</b> that was used to interactively inspect the mesh.</p>
					<p>More information about the technical aspects of this project can be found on the following scientific papers:
						<ul>
							<li><Paper title="Real-time exploration of the virtual reconstruction of the entrance of the Ripoll Monastery" journal="CEIG 2008 proceedings p. 219-224" url="http://www.lsi.upc.edu/~jmoyes/papers/Portalada.pdf" /></li>
							<li><Paper title="Portalada: A Virtual Reconstruction of the Entrance of the Ripoll Monastery" journal="Proceedings of 3DPVT08: Fourth International Symposium on 3D Data Processing, Visualization and Transmission" url="http://vcg.isti.cnr.it/Publications/2008/BBCCCDMMRS08/Besora_etal_Portalada08.pdf"/></li>
							<li><Paper title="Multiscale acquisition and presentation of very large artifacts: The case of portalada" journal="ACM Journal on Computing and Cultural Heritage, Volume 3, Issue 4" url="hhttps://dl.acm.org/citation.cfm?id=1957827"/></li>
						</ul>
					</p>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<img src="/files/rendering/portalada2.jpg" alt="Detail of the portalada"></img>
							<div className={ SharedStyles.attribution }>Close detail of the Pantocrator in Ripoll Monastery entrance. You can see how even the rough surface was captured.</div>
						</div>
						<div className= { SharedStyles.col1 }>
							<img src="/files/rendering/portalada3.jpg" alt="Side view of the portalada"></img>
							<div className={ SharedStyles.attribution }>Side view of the portalada</div>
						</div>
					</div>
				</Page>
				<Page isLast={false} {...data.Pages[1]}>
					<p>This project was developed by the <Link href="https://www.virvig.eu">ViRVIG</Link> research group and was aimed at building a virtual reconstruction of the ancient roman city of Tarraco as it was 2000 years ago</p>
					<p>The models were created by <Link href="http://www.e-digivision.net/digivision/esp/digivision.html">Digivision</Link> a 3d modelling business that made them in order to be used in a documental series. Our job was to <b>simplify</b> and <b>optimize</b> those models and <b>render</b> them in real-time</p>
					<p>The result was a <b>VR kiosk</b> composed of a touch-screen and a back-projection display screen with passive stereo. People were able to move between different attractions of the old Tarraco via a map on the touch-screen and once in-place they were able to move and look freely to examine them as if they were there. In addition to 
					the examination mode there was also a game mode where the user should go to different places, talk to some non-player characters and earn points by answering questions about the Roman empire.</p>
					<p>I was on the team responsible of the <b>custom stereo renderer</b> development.</p>
					<p>More information about the technical aspects of this project can be found on the following scientific papers:
						<ul>
							<li><Paper title="La realidad virtual en el aprendizaje de historia mediante la interacción con humanoides virtuales" journal="JOREVIR 2009" url="https://www.researchgate.net/publication/267687462_La_realidad_virtual_en_el_aprendizaje_de_historia_mediante_la_interaccion_con_humanoides_virtuales" /></li>
						</ul>
					</p>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<img src="/files/rendering/tarraco1.jpg" alt="An NPC character"></img>
							<div className={ SharedStyles.attribution }>An NPC character ready to ask us some questions.</div>
						</div>
						<div className= { SharedStyles.col1 }>
							<img src="/files/rendering/tarraco3.jpg" alt="Roman circus tribune"></img>
							<div className={ SharedStyles.attribution }>In-development visualization of the Roman circus tribune</div>
						</div>
					</div>
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
