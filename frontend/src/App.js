import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import CreateClass from './components/CreateClass/CreateClass';
import Home from './containers/Home/Home';
import Leasons from './containers/Leasons/Leasons';
import Childs from './containers/Childs/Childs';
import AddChild from './containers/Childs/AddChild/AddChild';
import Settings from './containers/Settings/Settings';

import store from './redux/configStore';
import Footer from './components/UI/Footer/Footer';

function App() {
	return (
		<Provider store={store({})}>
			<Router>
				<div className='App'>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/create-class' component={CreateClass} />
						<Route path='/addChild' component={AddChild} />
						<Route path='/settings' component={Settings} />
						<Route path='/leasons' component={Leasons} />
						<Route path='/:child' component={Childs} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
