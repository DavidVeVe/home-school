import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './HomePage.css';

import SignUp from '../../components/SignUp/SignUp';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import TeacherPage from '../Teacher/Teacher';

const HomePage = (props) => {
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
};

const mapStateToProps = (state) => ({
  token: false,
});

export default connect(mapStateToProps)(HomePage);
