import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import CreateClass from './containers/CreateClass/CreateClass';
import HomePage from './containers/HomePage/HomePage';
import Leasons from './containers/Leasons/Leasons';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/create-class' component={CreateClass} />
					<Route path='/leasons' component={Leasons} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
