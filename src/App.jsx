import React, { useEffect, useState } from 'react'
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Feed from './components/Feed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Post from './components/Post'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Header from './components/Header';

function App() {



	return (
		

			<div className="bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Router>
						<Routes>
							<Route path='/' exact Component={Home} />
							<Route path='/post/:id' exact Component={Post} />
							<Route path='/post' exact Component={Posts} />
							<Route render={() => <h1>404: page not found</h1>} />
						</Routes>
					</Router>
				</div>
			</div>
		
	)
}

const Home = () => (
	<>
		<Header />
		<Intro />
		<Portfolio />
		<Timeline />
		<Feed />
		<Contact />
		<Footer />
	</>
);

export default App
