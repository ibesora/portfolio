import BasicData from './basicData.js';

class CategoryData extends BasicData {

	constructor(id, name, link, invisible) {
		super(id, name);

		this.link = link;
		this.invisible = !!invisible;

	}

}

export default CategoryData;