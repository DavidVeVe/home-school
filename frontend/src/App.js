import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<ToastContainer
					autoClose={3000}
					hideProgressBar
					position={'top-right'}
				/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route render={() => <Redirect path='/' />} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
