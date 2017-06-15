import React, {Component} from 'react';

class Projects extends Component{
	render(){
		return(
			<div className="item">
                <span className="project-title"><a href={this.props.item.url}>{this.props.item.name}</a></span> - <span className="project-tagline">
                	A responsive website template designed to help startups promote, market and sell their products.
                </span>
            </div>
			);
	}
}
export default Projects;