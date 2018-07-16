import React, { Component } from 'react';
import './team.css';

class Team extends Component {
  render() {
    return (
      <section
        ref={this.props.innerRef}
        className="section-padding gray-bg"
        id="team-page"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
              <div className="page-title">
                <h2>Special team</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit voluptates, temporibus at, facere harum fugiat!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="single-team">
                <div className="team-photo">
                  <img src="images/team-section-1.png" alt="" />
                </div>
                <h4>JEMY SEDONCE</h4>
                <h6>Co. Founder</h6>
                <ul className="social-menu">
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="single-team">
                <div className="team-photo">
                  <img src="images/team-section-2.png" alt="" />
                </div>
                <h4>DEBORAH BROWN</h4>
                <h6>UX Designer</h6>
                <ul className="social-menu">
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="single-team">
                <div className="team-photo">
                  <img src="images/team-section-3.png" alt="" />
                </div>
                <h4>HARRY BANKS</h4>
                <h6>Founder</h6>
                <ul className="social-menu">
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="single-team">
                <div className="team-photo">
                  <img src="images/team-section-4.png" alt="" />
                </div>
                <h4>VICTORIA CLARK</h4>
                <h6>Creative Director</h6>
                <ul className="social-menu">
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
