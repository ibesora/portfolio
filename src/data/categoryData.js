import BasicData from './basicData.js';

class CategoryData extends BasicData {

	constructor(id, name, link) {
		super(id, name);

		this.link = link;

	}

}

export default CategoryData;