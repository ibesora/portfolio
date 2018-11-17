import BasicData from './basicData.js';

class TechData extends BasicData {

	constructor(id, name, src, link) {
		super(id, name);

		this.src = src;
		this.link = link;

	}

}

export default TechData;