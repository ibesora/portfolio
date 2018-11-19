import React, { Component } from 'react';

class ResponsivePicture extends Component {
	constructor(props) {

		super(props);
		this.state = { dataLoaded: false };

	}

	render() {
		return (
			<picture className={ this.props.pictureClass }>
				{ 
					this.state.dataLoaded ? 
						this.renderDefinitiveContents() :
						this.renderTemporalContents() 
				}
			</picture>
		);
	}

	renderTemporalContents() {

		return this.renderContents("temporalURL", true);

	}

	renderDefinitiveContents() {
		return this.renderContents("definitiveURL");
	}

	renderContents(imageDataKey, mustGrow){
		const contents = [];
		const last = this.props.sources[this.props.sources.length -1];

		for(let i=0; i<this.props.sources.length-1; ++i) {
			const currentSource = this.props.sources[i];
			contents.push(<source 
							key={ i } 
							srcSet={ currentSource[imageDataKey] } 
							media={ currentSource.media } 
							alt={ this.props.alt } 
						/>);
		}
		
		contents.push(<img 
				key={ this.props.sources.length-1 } 
				src={ last[imageDataKey] } 
				className={this.props.imgClass} 
				alt={this.props.alt}
				style={ mustGrow ? {width:"100%"} : {}} 
			/>);

		return contents;
	}

	componentDidMount() {
		// We change the state after a small delay so React doesn't optimize the change out
		setTimeout(() => {
			this.setState(() => { return { dataLoaded: true } });
		}, 100);
	}

}

export default ResponsivePicture;