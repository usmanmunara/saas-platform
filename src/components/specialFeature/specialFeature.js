import React, { Component } from 'react';
import './specialFeature.css';

class SpecialFeature extends Component {
  render() {
    return (
      <section
        ref={this.props.innerRef}
        className="gray-bg section-padding"
        id="feature-page"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
              <div className="page-title">
                <h2>SPECIAL FEATURES</h2>
                <i className="fas fa-arrows-alt" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit voluptates, temporibus at, facere harum fugiat!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src="images/portfolio-icon-1.png"
                    alt="Special Features"
                  />
                </div>
                <h3>Creative Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque quas nulla est adipisci,
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src="images/portfolio-icon-2.png"
                    alt="Special Features"
                  />
                </div>
                <h3>Unlimited Features</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque quas nulla est adipisci,
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src="images/portfolio-icon-3.png"
                    alt="Special Features"
                  />
                </div>
                <h3>Full Free Chat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque quas nulla est adipisci,
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src="images/portfolio-icon-4.png"
                    alt="Special Features"
                  />
                </div>
                <h3>Retina ready</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque quas nulla est adipisci,
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src="images/portfolio-icon-5.png"
                    alt="Special Features"
                  />
                </div>
                <h3>High Resolution</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque quas nulla est adipisci,
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src="images/portfolio-icon-6.png"
                    alt="Special Features"
                  />
                </div>
                <h3>Clean Codes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque quas nulla est adipisci,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SpecialFeature;
