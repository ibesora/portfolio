import * as Techs from './techs.js';
import * as Roles from './roles.js';
import * as Categories from './categories.js';

function createPageData(key, title, description, backgroundImageURL, 
	temporaryImage, techUsed, roles, categories) {

	return {
		key,
		title, 
		description, 
		backgroundImageURL, 
		temporaryImage, 
		techUsed, 
		roles, 
		categories
	};

}

const Page1 = createPageData( 1, "Title 1", "Description 1", "", "http://placehold.it/1000x300", 
	[ Techs.React, Techs.Android, Techs.VUE ], [ Roles.AppDeveloper , Roles.FullStackDeveloper], 
	[Categories.Web]
);

const Page2 = createPageData( 2, "Title 2", "Description 2", "", "http://placehold.it/1000x400", 
	[ Techs.Arduino ], [ Roles.RenderingEngineer], 
	[Categories.Other]
);

const Page3 = createPageData( 3, "Title 3", "Description 3", "", "http://placehold.it/1000x500", 
	[ Techs.AWS ], [ Roles.LeadEngineer ], 
	[Categories.App]
);

export const Pages = [ Page1, Page2, Page3 ];