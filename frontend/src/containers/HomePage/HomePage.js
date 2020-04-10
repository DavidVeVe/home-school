import React from 'react';
import { connect } from 'react-redux';

import './HomePage.css';

import SignUp from '../../components/SignUp/SignUp';
import TeacherPage from '../Teacher/Teacher';
import HomeAvatar from './homeAvatar/homeAvatar';

const HomePage = (props) => {
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
};

const mapStateToProps = (state) => ({
  token: false,
});

export default connect(mapStateToProps)(HomePage);
