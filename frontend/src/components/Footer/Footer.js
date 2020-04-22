import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the
              upcoming programmers with the code. Scanfcode focuses on providing
              the most efficient code or snippets as the code wants to be
              simple. We will help programmers build up concepts in different
              programming languages that include C, C++, JavaScript, HTML, CSS,
              Bootstrap and Algorithm.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by
              <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <h3>
                    <FaFacebook />
                  </h3>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <h3>
                    <FaTwitter />
                  </h3>
                </a>
              </li>
              <li></li>
              <li>
                <a className="linkedin" href="#">
                  <h3>
                    <FaLinkedinIn />
                  </h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
