import React, { useState, Fragment } from "react";

import "./HomePage.css";

import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import TeacherPage from "../Teacher/Teacher";
import HomeAvatar from "./homeAvatar/homeAvatar";

const HomePage = () => {
  const [typeAccount, setTypeAccount] = useState("");
  const token = false;
  const handleField = (event) => {
    const {
      target: { value },
    } = event;
    setTypeAccount(value);
  };

  return (
    <div>
      <main>
        {!token ? (
          <section className="homePage">
            <div className="homeAvatar">
              <h1>Inicio de sesión recientes</h1>
              <section className="homeAvatar__container">
                <HomeAvatar />
                <HomeAvatar />
                <HomeAvatar />
              </section>
            </div>
            <SignUp onchange={handleField} />
          </section>
        ) : (
          <TeacherPage />
        )}
      </main>
      {/* <About />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
