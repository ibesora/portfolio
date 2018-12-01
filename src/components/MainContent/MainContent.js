import React, { Component } from 'react';
import * as pages from '../../data/data.js';
import ImageWithText from '../ImageWithText/ImageWithText.js';
import Link from '../Link/Link.js';
import Page from '../Page/Page.js';
import Paper from '../Paper/Paper.js';

import SharedStyles from '../Shared/Shared.module.css';

class MainContent extends Component {
	constructor(props) {

		super(props);
		this.state = { pages: pages };

	}

	render() {
		return (
			<div>
				<Page isLast={false} {...pages.Portalada}>
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
				<Page isLast={false} {...pages.Tarraco}>
					<p>This project was developed by the <Link href="https://www.virvig.eu">ViRVIG</Link> research group and was aimed at building a virtual reconstruction of the ancient roman city of Tarraco as it was 2000 years ago.</p>
					<p>The models were created by <Link href="http://www.e-digivision.net/digivision/esp/digivision.html">Digivision</Link> a 3d modelling business that made them in order to be used in a documental series. Our job was to <b>simplify</b> and <b>optimize</b> those models and <b>render</b> them in real-time.</p>
					<p>The result was a <b>VR kiosk</b> composed of a touch-screen and a back-projection display screen with passive stereo. People were able to move between different attractions of the old Tarraco via a map on the touch-screen and once in-place they were able to move and look freely to examine them as if they were there. In addition to 
					the examination mode there was also a game mode where the user should go to different places, talk to some non-player characters (NPC) and earn points by answering questions about the Roman empire.</p>
					<p>I was on the team responsible for the <b>custom stereo renderer</b> development.</p>
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
				<Page isLast={false} {...pages.BAIP}>
					<p>This project was developed by the <Link href="https://www.virvig.eu">ViRVIG</Link> research group and was aimed at <b>developing a high-end graphics software</b> for the collaborative design of very large models.</p>
					<p>The project included the development of a <b>custom rendering engine</b> to view very large models with the detail needed by the naval industry. You could inspect every aspect of a tanker before being built by traversing the entire ship, check collisions between elements (to see if they would fit through a door for example) and even get the serial number and specifications of every little screw used by selecting it on the renderer.</p>
					<p>The main effort of this project was to develop and implement an algorithm to efficiently <b>draw a very large number of triangles</b> and interact with them: moving objects and <b>checking collisions</b>, <b>changing its material attributes</b>, <b>making objects transparent</b> and <b>adding/removing lights</b>.</p>
					<p>I was on the team responsible for the <b>custom renderer</b> development.</p>
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
				<Page isLast={false} {...pages.AlterFitness}>
					<p>This project consisted in the development of a <b>Business to Business cloud application</b> used to manage sport centers. It was the main product of the software division of <b>Alter Sport</b>, a small startup some colleagues and me founded that created sports-related software and managed a number of sport centers.</p>
					<p>It was composed by the following components:</p>
					<ul>
						<li>A member-facing website where users could <b>book classes</b>, <b>communicate with their trainers</b>, <b>manage their billing data</b>, <b>view, print and review their training plans</b> and <b>see the log of trainings and classes they had done on the sport center</b> or <b>outside it</b>. The website also included <b>social network features</b>: members had access to a central facebook-like wall where they could <b>see and comment</b> other member activities.</li>
						<li>A class booking system that was embeddable in other websites so members of a sport center could <b>book a class</b> without leaving the sport center website.</li>
						<li>A smartphone application that members could use to <b>see the sport center schedule</b>, <b>book classes</b>, <b>follow their trainings</b> and <b>give feedback of each individual exercise on a training plan</b>.</li>
						<li>An access control system made up of a Raspberry Pi and a touch screen that connected to our cloud application so we could <b>measure the time spent by each user at the sport center</b>, <b>check if they were paying the correct membership</b> and <b>record the assistance to a given class</b>.</li>
						<li>A trainer-facing website that was used to <b>create training plans</b>, <b>assign them to members</b>, <b>change their schedules</b> and <b>read member feedback about their classes and training plans</b>.</li>
						<li>A manager-facing website that was used to <b>configure their data on the platform</b>, to <b>extract reports about their members and financials (both current and historical)</b> and to <b>order bank invoices for each member</b>.</li>
						<li>An admin-facing website that was used to <b>configure all the parameters of the system</b>.</li>
						<li>A developer-facing website were all the <b>documentation was stored</b> and the <b>API calls could be tested</b>.</li>
					</ul>
					<p>I was responsible for the <b>architecture definition</b>, <b>led the development team</b> and was the <b>main back-end programmer on most of the components</b> although I also did some <b>front-end development</b>.</p>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/af2.jpg" alt="Member-facing website" 
									text="The member-facing website's sport center wall." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/af1.jpg" alt="Trainer-facing website" 
									text="The trainer-facing website's training plan creation." />
						</div>
					</div>
				</Page>
				<Page isLast={false} {...pages.BergaActiva}>
					<p>This project was comissioned by the Berga city council and consisted in the development of a <b>web platform</b> and <b>smartphone apps</b> to promote active tourism in the city.</p>
					<p>Four actors converged on the platform: <b>sport clubs</b>, <b>sport shops</b>, the <b>city council</b> and <b>tourists</b>.</p>
					<ul>
						<li><b>Sport clubs</b> had their own <b>profile</b> where they could <b>change their information</b>, <b>create events</b> to go to the centralized city agenda and <b>add routes</b>.</li>
						<li><b>Sport shops</b> also had their own <b>profile</b> and they could <b>change the information about their shops</b> and the <b>services</b> they offered.</li>
						<li>The <b>city council</b> could <b>add events to the city agenda</b>, <b>add city landmarks</b> for the tourists to visit, <b>add places where each sport could be practiced</b> and add <b>routes</b> in different sports for the tourists to follow.</li>
						<li><b>Tourists</b> could <b>search for landmarks near their position</b>, <b>businesses who solve a given problem they might have</b> (i.e. bike repairing) and <b>places where to practice their preferred sport</b>, <b>view routes in 2D and 3D</b> and access their own profile where they could <b>see all the routes they had followed and the places they had visited</b>. In addition to that, they could, using the smartphone application, <b>follow a given route</b> - with alerts when going outside the track or going nearby a landmark- and <b>localize the sport clubs, events, landmarks, etc. via an Augmented Reality solution done in-house</b>.</li>
					</ul>
					<p>There was a <b>gamification</b> layer built on top of it with <b>rankings by time on each route</b>, <b>higher number of places visited</b>, <b>badges to unlock</b> after some requirements were met and a <b>leveling system that promoted visiting landmarks</b>. The <b>smartphone app</b> included what we called <i>ghost mode</i> where users could <b>compete with their times or against others</b> while following a route.</p>
					<p>An interesting functionality was that <b>when a route was added it was processed and its characteristics (elevation gain, circularity, distance, travel time, ... ) and nearby landmarks were computed automatically</b>.</p>
					<p>I was responsible for the <b>architecture definition</b>, <b>led the development team</b> and was the <b>main full-stack and Android app programmer</b>.</p>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/ba3.jpg" alt="Partial view of a route information" 
									text="Partial view of a route information. On the right you can see the time it would take to follow this route depending on which kind of user you are and the route characteristics." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/ba2.jpg" alt="Landmarks view" 
									text="The landmarks view screen" />
						</div>
					</div>
				</Page>
				<Page isLast={false} {...pages.IASTracker}>
					<p>This project was one of the <b>winners</b> of the first <Link href="http://digitalearthlab.jrc.ec.europa.eu/activities/mygeoss-applications-your-environment/57752">MYGEOSS</Link> contest for innovative applications in environmental and social areas promoted by the Joint Research Center of the European Comission. After winning, <Link href="http://ic5team.org/?q=en/about">IC5Team</Link>, the team behind the project commissioned me to make their project a reality. </p>
					<p>It consisted of a <b>web platform</b> and <b>smartphone apps</b> to locate invasive species, whether animal or plant, initially in Catalonia and Belgium, but adaptable to any other region of Europe.</p>
					<p>The public-facing website <b>showed a map with all the observations of invasive species</b> done since the app release. Those <b>observations are classified depending on wether they have been validated by an expert user or not</b> and they contain images and a description made by the user who sent the observation. <b>Observations can also be filtered</b> by their status and by species or taxons.</p>
					<p>The admin-facing website consisted of different tools to <b>manage those observations and validate or discard them</b> depending on an expert user criterium. Those <b>expert users could also be created and validated</b> by the administrators of the platform in order to expand the network of expertise required to support the observations all around the world. Experts could also <b>create regions</b> and <b>edit the list of invasive species that could be found inside them</b>.</p>
					<p>The smartphone application was, due to money and time constraints, an <b>hybrid application</b> that everybody could use <b>to send the observation of an invasive specie</b>. In order to limit the list of invasive species, the user was presented with only the ones that could be found on the region they were in. A photograph and a text was required for each observation so experts could clearly validate them.</p>
					<p>As the sole developer of this project I was responsible for <b>designing the architecture</b> of the platform and <b>implementing the websites and the smartphone apps</b>.</p>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/iastracker1.jpg" alt="View of the map with the observations" 
									text="The map with the observations as shown on the user-facing website." />
						</div>
					</div>
				</Page>
				<Page isLast={false} {...pages.CityVibes}>
					<p>This project was our team entry to the <Link href="https://www.app-camp.eu/">ESA App Camp</Link>. During a week we were introduced to <Link href="https://www.esa.int/ESA">ESA</Link>'s satellite missions and were asked to develop a solution that used satellite data.</p>
					<p>Our proposal was based on the realization that the things people value as quality of life are different by each individual and not fixed in time. Our solution to this problem was to <b>provide simple visualizations of the variations of different parameters within a selected city</b>, personalize this information by <b>accounting for individual preferences and needs</b> and <b>empower them to make choices</b> that positively impacted their city experiences.</p>
					<p>Some of the factors we took into account and their sources were:</p>
					<ul>
						<li><b>Nearest green</b> area and <b>body of water</b> from a given point was computed using <Link href="https://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-2">Sentinel-2</Link> data.</li>
						<li>The relative temperature of the city was computed using what's called the <b>heat island effect</b> from <Link>Sentinel-3</Link> data.</li>
						<li>The <b>concentration of Carbon Monoxide</b> accross the city was fetched from <Link>Sentinel-5</Link> data.</li>
						<li><b>Distance to schools</b>, <b>public transport stations</b>, <b>broadband speeds</b>, etc. were all obtained from public datasets.</li>
					</ul>
					<p>With all that information we were able to provide a <b>smartphone application</b> that, <b>given a set of slider values</b> that the user had set depending on their preferences, create an <b>interactive visualization of the city</b> with areas ranging from red through yellow to green depending on how they suited the user.</p>
					<p>Being a team of 4 and only having a week to decide on what we wanted to do and implement a beta version of it, I touched different aspects of the project: from <b>developing some of the application functionalities</b> to <b>processing Satellite data</b></p>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/cv1.jpg" alt="User preferences selection menu" 
									text="The user would move the sliders indicating how much they valuated each concept." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/cv2.jpg" alt="View of the map with the results overprinted" 
									text="The map showing a semi transparent layer with the results of their mixed preferences." />
						</div>
					</div>
				</Page>
				<Page isLast={false} {...pages.Instamaps}>
					<p><Link href="https://www.instamaps.cat">Instamaps</Link> is a free <b>Software as a Service</b> platform created by <b><Link href="https://twitter.com/ICGCgeostarters">Geostarters</Link></b>, a multidisciplinary task force gathered to create a platform to facilitate the usage of <Link href="http://www.icgc.cat">ICGC</Link>'s digital products and encourage using maps as a mean to disseminate information. On top of that, <b>Instamaps</b> provides tools to map, visualize and perform GIS operations with external data via uploading it or connecting to services like Dropbox, Google Drive, Socrata, ...</p>
					<p><Link href="http://eines.icgc.cat/storymaps/">Storymaps</Link> is also a free <b>Software as a Service</b> platform created by <b><Link href="https://twitter.com/ICGCgeostarters">Geostarters</Link></b> that was developed to solve the need of our users to create rich visualizations that would combine map visualizations with rich narratives.</p>
					<p><Link href="http://betaportal.icgc.cat/">Betaportal</Link> is the website where we publish our work as ICGC's innovation and prototyping group. These prototypes are usually done on hackathons when all the group focuses on a prototype for a day to test ideas and new technologies.</p>
					<p>As a late newcomer to the Geostarters group, Instamaps was already deployed to production and in very good shape. My contribution while at Geostarters has been<b>bug hunting</b>, <b>customer relations</b> and the <b>support and development of new features</b> of Instamaps, the <b>development of Storymaps</b> and the participation in many of the <b>prototypes</b> that can be found in the <b><Link href="http://betaportal.icgc.cat/">Betaportal</Link></b>. I have also had minor participation on the <b>development of some of the ICGC's smartphone applications</b>.</p>
					<p>More information about the technical aspects of Instamaps can be found on the following article:</p>
					<ul>
						<li><Paper title="Service-oriented map production environments: the implementation of Instamaps" journal="Service Oriented Mapping - Springer" url="https://www.springer.com/la/book/9783319724331" /></li>
					</ul>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/instamaps4.jpg" alt="Start screen of Instamaps" 
									text="Start screen of Instamaps." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/instamaps3.jpg" alt="Instamaps public gallery" 
									text="Instamaps public gallery." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/instamaps1.jpg" alt="A map made with Instamaps" 
									text="A map made with Instamaps." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/storymaps2.jpg" alt="A story map done with StoryMaps" 
									text="A story map done with StoryMaps." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/ullDelTemps.jpg" alt="One of our prototypes" 
									text="One of our prototypes. You can see the current orthophoto and an historical one superimposed. Geolocated images from ICGC's map library are also shown." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/ortoagumengtada.jpg" alt="Augmented orthophoto" 
									text="One of our prototypes. We modified the orthophoto to make the relief stand out." />
						</div>
					</div>
				</Page>
				<Page isLast={false} {...pages.Canhemon}>
					<p>It consisted of an Open Source <b>smartphone app</b> and the <b>back-end service</b> needed to support it. It was comissioned by the Joint Research Center of the European Comission and its goal was to create an App to check different aspects of trees.</p>
					<p>The smartphone application was an <b>hybrid application</b> used <b>to send the observation of a tree</b>. One of the main functionalities was that the user could create areas of interest, the region to observe, to be used offline. System admins were able to create new zones and assign them to the users. They could afterwards see a list of their assigned zones and upload information about the trees there.</p>
					<p>I was responsible for the <b>back-end implementation</b> and some small details of the <b>smartphone app</b>.</p>
					<p>All the code created during the development of this project can be found on <Link href="https://github.com/jessisena/TreeCheckerApp">this</Link> public repository.</p>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/canhemon1.jpg" alt="One of the steps of the starting guide" 
									text="One of the steps of the starting guide showing information about the areas of interest." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/canhemon2.jpg" alt="Information about an observation" 
									text="Information about an observation." />
						</div>
					</div>
				</Page>
				{false && 
				<Page isLast={false} {...pages.Websites}>
					<p>During all these years I've also been involved in the development of websites for various clients and friends.</p>
					<p>Those ranged from simple wordpress customizations to full custom websites done from zero and usually involved the hosting management and configuration.</p>
					<div className={ SharedStyles.row }>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/as.jpg" alt="Website example 1" 
									text="Website of a sport center." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/web/mc.jpg" alt="Website example 2" 
									text="An artist website with a shop to build art pieces from." />
						</div>
					</div>
				</Page>
				}
				<Page isLast={true} {...pages.Other}>
					<p>During all these years I've also been involved in the development of other projects. Here you can find a list of some of them and others I'm actively working on:</p>
					<ul>
						<li><b>3d cycling:</b> When working at <b>Alter Sport</b> I developed a 3d cycling prototype to attract people to our booth in business exhibitions. It's main components were a static bycicle with a speedometer connected to an Arduino board that computed the user cadence and transmitted it to a computer that played a 3d stereoscopic video created by us at the same pace.</li>
						<li><b>vt-optimizer:</b> A tool to optimize Mapbox Vector Tiles in order to be more performant when displaying them on the web. You can read more about it <Link href="https://medium.com/@ibesora/a-data-driven-journey-through-vector-tile-optimization-4a1dbd4f3a27">here</Link>.</li>
						<li><b>Algorithms:</b> A never-ending respository of algorithms in different programming languages in order to keep my algorithmic skills in good shape.</li>
						<li><b>Udacity's Deep Learning nanodegree course notes:</b> When doing the Deep Learning nanodegree I started to write the course notes on a public repository. Since then I've updated them various times in order to collect all my knowledge on the subject in one place. You can find them <Link href="https://ibesora.github.io/udacity-deeplearning-notes/">here</Link>. The projects I did on the nanodegree can also be found there.</li>
						<li><b>Ray tracer:</b> Following Peter Shirley's <Link href="https://www.amazon.com/dp/B01B5AODD8">Ray tracing in one weekend</Link> book, I implemented a WebGL ray tracer that runs via a fragment shader. In addition to the base implementation found in the book I've added some extra techniques like shadowing and area lights. You can find it <Link href="https://github.com/ibesora/webgl-raytracer">here</Link>.</li>
						<li><b>PhD:</b> I'm a PhD candidate on the <Link href="https://www.virvig.eu">ViRVIG</Link> research group. My thesis is focused on urban city reconstruction.</li>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/depth1.jpg" alt="Website example 1" 
									text="Website of a sport center." />
						</div>
						<div className= { SharedStyles.col1 }>
							<ImageWithText  
									source="/files/rendering/depth2.jpg" alt="Website example 1" 
									text="Website of a sport center." />
						</div>
					</ul>
				</Page>
			</div>
		);
	}
}

export default MainContent;
