import React, { Component } from 'react';

class ResponsivePicture extends Component {
	constructor(props) {

		super(props);
		this.state = { dataLoaded: false, fullWidth: true };

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

		return this.renderContents("temporalURL");

	}

	renderDefinitiveContents() {
		return this.renderContents("definitiveURL");
	}

	renderContents(imageDataKey){
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
				style={ this.state.fullWidth ? {width:"100%"} : {}} 
				onLoad= { () => this.imageLoaded() }
			/>);

		return contents;
	}

	imageLoaded() {

		if(!this.state.dataLoaded)
			this.setState(() => { return { dataLoaded: true } });
		else
			this.setState(() => { return { fullWidth: false } });

	}

}

export default ResponsivePicture;