import * as Techs from './techs.js';
import * as Roles from './roles.js';
import * as Categories from './categories.js';

function createPageData(key, title, backgroundImageURL, 
	temporaryImage, techUsed, roles, categories) {

	return {
		key,
		title, 
		backgroundImageURL, 
		temporaryImage, 
		techUsed, 
		roles, 
		categories
	};

}

const Page1 = createPageData( 1, "Ripoll's entrance", "", "http://placehold.it/1000x300", 
	[ Techs.OpenGL, Techs.CPlusPlus, Techs.Qt ], [ Roles.RenderingEngineer ], 
	[Categories.CG]
);

const Page2 = createPageData( 2, "Virtual Tarraco", "", "http://placehold.it/1000x300", 
	[ Techs.OpenGL, Techs.CPlusPlus, Techs.Qt ], [ Roles.RenderingEngineer ], 
	[Categories.CG]
);

const Page3 = createPageData( 3, "BAIP 2020", "", "http://placehold.it/1000x400", 
	[ Techs.OpenGL, Techs.CPlusPlus, Techs.Qt ], [ Roles.RenderingEngineer ], 
	[Categories.CG]
);

const Page4 = createPageData( 4, "Alter Fitness", "", "http://placehold.it/1000x500", 
	[ Techs.AWS, Techs.JS, Techs.HTML5, Techs.CSS3, Techs.PHP, Techs.MySQL ], [ Roles.LeadEngineer ], 
	[Categories.WebApps]
);

const Page5 = createPageData( 5, "Berga Activa", "", "http://placehold.it/1000x500", 
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Laravel, Techs.MySQL, Techs.Android, Techs.IOS ], [ Roles.LeadEngineer ], 
	[Categories.WebApps, Categories.App]
);

const Page6 = createPageData( 6, "IASTracker", "", "http://placehold.it/1000x500", 
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Laravel, Techs.PostgreSQL, Techs.Cordova, Techs.Leaflet ], [ Roles.LeadEngineer ], 
	[Categories.WebApps, Categories.App]
);

const Page7 = createPageData( 7, "City vibes", "", "http://placehold.it/1000x500", 
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Python, Techs.Cordova, Techs.Leaflet ], [ Roles.AppDeveloper ], 
	[Categories.App]
);

const Page8 = createPageData( 8, "Instamaps, Storymaps and prototypes", "", "http://placehold.it/1000x500", 
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Leaflet, Techs.Mapbox, Techs.PostgreSQL, Techs.NodeJS ], [ Roles.FullStackDeveloper ], 
	[Categories.WebApps]
);

const Page9 = createPageData( 9, "Canhemon", "", "http://placehold.it/1000x500", 
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.Leaflet, Techs.Django, Techs.React ], [ Roles.BackendDeveloper, Roles.AppDeveloper ], 
	[Categories.Web, Categories.App]
);

//altersportgim.com, martacastro.net, triatloberga.cat, bergatrail, ...
const Page10 = createPageData( 10, "Websites", "", "http://placehold.it/1000x500", 
	[Techs.JS, Techs.HTML5, Techs.CSS3, Techs.PHP ], [ Roles.WebDeveloper ], 
	[Categories.Web]
);

//Access control, 3d spinning, vector tile optimizer, algorithms, deep learning
const Page11 = createPageData( 11, "Minor and ongoing projects", "", "http://placehold.it/1000x500", 
	[Techs.RaspberryPi, Techs.Arduino, Techs.NodeJS, Techs.Keras, Techs.Tensorflow ], [ Roles.FullStackDeveloper ], 
	[Categories.Other]
);


export const Pages = [ Page1, Page2, Page3, Page4, Page5, 
	Page6, Page7, Page8, Page9, Page10, Page11 ];