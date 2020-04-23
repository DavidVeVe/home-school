import React from 'react';
import { Switch, NavLink, Route, withRouter, Link } from 'react-router-dom';

import './Dashboard.scss';
import Logo from '../../assets/images/react-2.svg';

import Posts from './Posts/Posts';
import Assigments from './Assignments/Assignments';

const Dashboard = (props) => {
	return (
		<div className='container-fluid'>
			<div>
				<img className='back-photo' src={Logo} alt='backphoto' />
			</div>
			<ul className='nav nav-tabs mt-5 mb-4 justify-content-center'>
				<li className='nav-item'>
					<NavLink
						exact
						activeStyle={{ backgroundColor: 'blue', color: 'white' }}
						to={`${props.match.url}`}
						className='nav-link active'>
						Posts
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						exact
						activeStyle={{ backgroundColor: 'blue', color: 'white' }}
						to={`${props.match.url}/assigments`}
						className='nav-link active'>
						Asignaturas
					</NavLink>
				</li>
			</ul>
			<div className='dashboard'>
				<div className='books-comments'>
					<a href='/'>Libros en linea</a>
					<Link to='/'>Avisos</Link>
				</div>
				<div className='posts-assignments'>
					<Switch>
						<Route exact path={`${props.match.url}`} component={Posts} />
						<Route
							path={`${props.match.url}/assigments`}
							component={Assigments}
						/>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Dashboard);
