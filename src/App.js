import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import Builder from './components/Builder'
import Builds from './components/Builds'
import Products from './components/Products'

export default function App() {
	return (
		<Router>
			<NavBar />

			<div className='main-component'>
				<Route exact path="/" component={Home} />
				<Route path="/builder" component={Builder} />
				<Route path="/builds" component={Builds} />
				<Route path="/products/:id" component={Products} />
			</div>
		</Router>
	);
}
