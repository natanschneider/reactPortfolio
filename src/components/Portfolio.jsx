import React, { useState, useEffect } from 'react';
import projects from '../data/projects';
import PortfolioItem from './PortfolioItem';
import axios from 'axios';

function Portfolio() {
	const [portfolio, setPortfolio] = useState([])

	useEffect(() => {
		fetchPortfolio();
	}, []);

	const fetchPortfolio = () => {
		axios({
			method: 'get',
			url: import.meta.env.VITE_API_URL+'/portfolio',
			data: {
				token: import.meta.env.VITE_API_TOKEN
			},
			headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin' : '*',
					'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			}
		})
		.then(response => {
			console.log(response.data)
			setPortfolio(response.data)
		})
		.catch(error => {
			console.log(error.message)
		})
	}

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