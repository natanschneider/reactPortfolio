import React, { useEffect, useState } from 'react'
import Post from './components/Post'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Home from './components/Home';

function App() {
	return (
			<div className="bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Router>
						<Routes>
							<Route path='/' element={ <Home /> } exact />
							<Route path='/post/:id' element={ <Post /> } exact />
							<Route path='/post' element={ <Posts /> } exact />
						</Routes>
					</Router>
				</div>
			</div>
	)
}

export default App
