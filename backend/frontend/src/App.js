import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { validateUser } from './redux/actions';
import { connect } from 'react-redux';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Dashboard from './containers/Dashboard/Dashboard';

function App({ validateUser }) {
	useEffect(() => {
		validateUser();
	}, [validateUser]);

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
					<Route path='/:groupId/dashboard' component={Dashboard} />
					<Route render={() => <Redirect path='/' />} />
				</Switch>
			</div>
		</Router>
	);
}

const mapDispatchToProps = {
	validateUser,
};

export default connect(null, mapDispatchToProps)(App);
