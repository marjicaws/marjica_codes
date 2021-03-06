import "./Home.css";
import { Link } from "react-router-dom";

import React from "react";

const Home = () => {
  return (
    <div className="home-img-div">
      <div className="home-border">
        <h1 className="home-name"> Marjica Watson-Santos</h1>

        <div className="circle">
          <button className="cd-btn">
            <div className="line1">
              <h3 className="cd-title">Blk Tech Records</h3>
              <h2 className="cd-song">"Hire Me"</h2>
              <h3 className="cd-name">Mars</h3>
              <div className="line2">
                <div className="line3">
                  <div className="line4">
                    <div className="dot">
                      <div className="cootieshot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        <h2 className="home-title">Aspiring Software Engineer</h2>
        <h2 className="home-title">Singer-Songwriter</h2>

        <h3 className="home-date">2022</h3>
        <div className="btns">
          <Link className="about-btn" to="/about">
            <button className="btn-home">
              <p>about</p>
            </button>
          </Link>
          <Link className="portfolio-link" to="/portfolio">
            <button className="btn-port">
              <p>portfolio</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
