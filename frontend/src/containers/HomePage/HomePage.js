import React from 'react';
import { connect } from 'react-redux';

import './HomePage.css';

import SignUp from '../../components/SignUp/SignUp';
import TeacherPage from '../Teacher/Teacher';
import HomeAvatar from './homeAvatar/homeAvatar';

const HomePage = (props) => {
<<<<<<< HEAD
  return (
    <div className='homepage'>
      <main>
        {!props.token ? (
          <Fragment>
            <h2>LOGO</h2>
            <SignUp />
          </Fragment>
        ) : (
          <TeacherPage />
        )}
      </main>
      <About />
      <Footer />
    </div>
  );
=======
	return (
		<div>
			<main>
				{!props.token ? (
					<section className='homePage'>
						<div className='homeAvatar'>
							<h1>Inicio de sesión recientes</h1>
							<section className='homeAvatar__container'>
								<HomeAvatar />
								<HomeAvatar />
								<HomeAvatar />
							</section>
						</div>
						<SignUp />
					</section>
				) : (
					<TeacherPage />
				)}
			</main>
		</div>
	);
>>>>>>> 7c75087367a4562a59a68aba1d958305706120c7
};

const mapStateToProps = (state) => ({
  token: true,
});

export default connect(mapStateToProps)(HomePage);
