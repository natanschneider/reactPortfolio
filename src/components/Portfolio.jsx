import React from 'react';
import projects from '../data/projects';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map(project => (
					<PortfolioItem
						imgUrl={project.imgURL}
						title={project.title}
						stack={project.stack}
						link={project.link}
						repository={project.repository}
					/>
				))}
			</div>
		</div>
	)
}

export default Portfolio;