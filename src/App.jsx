import React from 'react'
import Post from './components/Post'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Home from './components/Home';
import FourOFour from './components/FourOFour';
import Login from './components/Login';
import AdminTimeline from './components/AdminTimeline';

function App() {
	return (
			<div className="bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Router>
						<Routes>
							<Route path='/' element={ <Home /> } exact />
							<Route path='/post/:id' element={ <Post /> } exact />
							<Route path='/post' element={ <Posts /> } exact />
							<Route path='/admin' element={ <Login /> } exact />
							<Route path='/admin/timeline' element={ <AdminTimeline /> } exact />
							<Route path='*' element={ <FourOFour /> } />
						</Routes>
					</Router>
				</div>
			</div>
	)
}

export default App
