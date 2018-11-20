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
					Descripció 1
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
