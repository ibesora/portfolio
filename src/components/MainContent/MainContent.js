import React, { Component } from 'react';
import * as data from '../../data/data.js';
import ImageWithText from '../ImageWithText/ImageWithText.js';
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
					a precise mesh of 173 millions of triangles with and edge size of millimeters and <b>a set of user-friendly visualization tools.</b>.
					The result was open to the public in MNAC from February to May 2008 and is now visible as part of its permanent exhibition. </p>
					<p>Visitors of the exhibition interact with the virtual reproduction in an immersive <b>VR kiosk</b> using a touch-screen and a back-projection display screen with passive stereo. Visitors can simply navigate and zoom-in in different parts of the entrance, or they can get further information just 
					by touching different hotspots that make 3D information boards appear in front of important components of the façade. A small video showing how it worked can be founf <Link href="https://www.youtube.com/watch?v=wBURyYXGse8">here</Link>.</p>
					<p>I helped with the process of <b>repairing of holes</b> on the mesh resulting from the acquisition process implementing an algorithm to detect them and I was responsible for the implementation of the <b>custom stereo renderer</b> that was used to interactively inspect the mesh.</p>
					<p>More information about the technical aspects of this project can be found on the following scientific papers:</p>
					<ul>
						<li><Paper title="Real-time exploration of the virtual reconstruction of the entrance of the Ripoll Monastery" journal="CEIG 2008 proceedings p. 219-224" url="http://www.lsi.upc.edu/~jmoyes/papers/Portalada.pdf" /></li>
						<li><Paper title="Portalada: A Virtual Reconstruction of the Entrance of the Ripoll Monastery" journal="Proceedings of 3DPVT08: Fourth International Symposium on 3D Data Processing, Visualization and Transmission" url="http://vcg.isti.cnr.it/Publications/2008/BBCCCDMMRS08/Besora_etal_Portalada08.pdf"/></li>
						<li><Paper title="Multiscale acquisition and presentation of very large artifacts: The case of portalada" journal="ACM Journal on Computing and Cultural Heritage, Volume 3, Issue 4" url="hhttps://dl.acm.org/citation.cfm?id=1957827"/></li>
					</ul>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 } >
							<ImageWithText  
									source="/files/rendering/portalada2.jpg" alt="Detail of the portalada"
									text="Close detail of the Pantocrator in Ripoll Monastery entrance. You can see how even the rough surface was captured." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/portalada3.jpg" alt="Side view of the portalada" 
									text="Side view of the portalada." />
						</div>
					</div>
				</Page>
				<Page isLast={false} {...data.Pages[1]}>
					<p>This project was developed by the <Link href="https://www.virvig.eu">ViRVIG</Link> research group and was aimed at building a virtual reconstruction of the ancient roman city of Tarraco as it was 2000 years ago.</p>
					<p>The models were created by <Link href="http://www.e-digivision.net/digivision/esp/digivision.html">Digivision</Link> a 3d modelling business that made them in order to be used in a documental series. Our job was to <b>simplify</b> and <b>optimize</b> those models and <b>render</b> them in real-time.</p>
					<p>The result was a <b>VR kiosk</b> composed of a touch-screen and a back-projection display screen with passive stereo. People were able to move between different attractions of the old Tarraco via a map on the touch-screen and once in-place they were able to move and look freely to examine them as if they were there. In addition to 
					the examination mode there was also a game mode where the user should go to different places, talk to some non-player characters (NPC) and earn points by answering questions about the Roman empire.</p>
					<p>I was on the team responsible of the <b>custom stereo renderer</b> development.</p>
					<p>More information about the technical aspects of this project can be found on the following scientific papers:</p>
					<ul>
						<li><Paper title="La realidad virtual en el aprendizaje de historia mediante la interacción con humanoides virtuales" journal="JOREVIR 2009" url="https://www.researchgate.net/publication/267687462_La_realidad_virtual_en_el_aprendizaje_de_historia_mediante_la_interaccion_con_humanoides_virtuales" /></li>
					</ul>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/tarraco1.jpg" alt="An NPC character" 
									text="An NPC character ready to ask us some questions." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/tarraco3.jpg" alt="Roman circus tribune" 
									text="In-development visualization of the Roman circus tribune." />
						</div>
					</div>
				</Page>
				<Page isLast={false} {...data.Pages[2]}>
					<p>This project was developed by the <Link href="https://www.virvig.eu">ViRVIG</Link> research group and was aimed at <b>developing a high-end graphics software</b> for the collaborative design of very large models.</p>
					<p>The project included the development of a <b>custom rendering engine</b> to view very large models with the detail needed by the naval industry. You could inspect every aspect of a tanker before being built by traversing the entire ship, check collisions between elements (to see if they would fit through a door for example) and even get the serial number and specifications of every little screw used by selecting it on the renderer.</p>
					<p>The main effort of this project was to develop and implement an algorithm to efficiently <b>draw a very large number of triangles</b> and interact with them: moving objects and <b>checking collisions</b>, <b>changing its material attributes</b>, <b>making objects transparent</b> and <b>adding/removing lights</b>.</p>
					<p>More information about the technical aspects of this project can be found on the following scientific papers:</p>
					<ul>
						<li><Paper title="Interactive inspection of complex multi-object industrial assemblies" journal="Computer-Aided Design Volume 79, October 2016, Pages 48–59" url="https://dl.acm.org/citation.cfm?id=2994685.2994836" /></li>
					</ul>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/baip1.jpg" alt="A single tanker" 
									text="View of a single tanker." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/baip2.jpg" alt="Engine room" 
									text="View of the engine room." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/baip3.jpg" alt="Boing rendering" 
									text="Our renderer was also tested to inspect a Boeing plane." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/baip4.jpg" alt="Debug view of a group of tankers being rendered" 
									text="Debug view of a group of tankers being rendered. Each of them could be inspected." />
						</div>
					</div>
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
