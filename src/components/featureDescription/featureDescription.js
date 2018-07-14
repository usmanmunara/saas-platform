import React, { Component } from 'react';
import './featureDescription.css';
import { Carousel, CarouselItem, Row } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

class FeatureDescription extends Component {
  render() {
    const screenSliderData = [
      {
        captionTitle: 'Easy to build',
        captionDescription:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute'
      }
    ];
    return (
      <section
        ref={this.props.innerRef}
        className="angle-bg sky-bg section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div id="caption_slide" className="carousel slide caption-slider">
                <Carousel
                  className="caption-slider featureDescriptionCarousel"
                  controls={false}
                >
                  <CarouselItem>
                    <Row>
                      <div className="v-center">
                        <div className="col-xs-12 col-md-6">
                          <Animated
                            animationInDelay={400}
                            animationIn="fadeInUp"
                          >
                            <div className="caption-title">
                              <h2>Easy to build</h2>
                            </div>
                          </Animated>
                          <Animated
                            animationInDelay={600}
                            animationIn="fadeInUp"
                          >
                            <div className="caption-desc">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute
                              </p>
                            </div>
                          </Animated>
                          <Animated
                            animationInDelay={800}
                            animationIn="fadeInUp"
                          >
                            <div className="caption-button">
                              <a href="#" className="button">
                                Read more
                              </a>
                            </div>
                          </Animated>
                        </div>
                        <div className="col-xs-6 col-md-3">
                          <Animated
                            animationInDelay={1000}
                            animationIn="fadeInRight"
                          >
                            <div className="caption-photo one">
                              <img
                                src="images/screen-1.jpg"
                                alt="feature description image"
                              />
                            </div>
                          </Animated>
                        </div>
                        <div className="col-xs-6 col-md-3">
                          <Animated
                            animationInDelay={1200}
                            animationIn="fadeInRight"
                          >
                            <div className="caption-photo two">
                              <img
                                src="images/screen-2.jpg"
                                alt="feature description image"
                              />
                            </div>
                          </Animated>
                        </div>
                      </div>
                    </Row>
                  </CarouselItem>
                  <CarouselItem>
                    <Animated
                      // animationInDelay={1000}
                      // animationOutDelay={1000}
                      animationIn="fadeIn"
                      animationOut="fadeOut"
                    >
                      <Row>
                        <div className="v-center">
                          <div className="col-xs-12 col-md-6">
                            <div className="caption-title">
                              <h2>Easy to use</h2>
                            </div>
                            <div className="caption-desc">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute
                              </p>
                            </div>
                            <div className="caption-button">
                              <a href="#" className="button">
                                Read more
                              </a>
                            </div>
                          </div>
                          <div className="col-xs-6 col-md-3">
                            <div className="caption-photo one">
                              <img
                                src="images/screen-3.jpg"
                                alt="feature description image"
                              />
                            </div>
                          </div>
                          <div className="col-xs-6 col-md-3">
                            <div className="caption-photo two">
                              <img src="images/screen-4.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </Row>
                    </Animated>
                  </CarouselItem>
                  <CarouselItem>
                    <Animated animationIn="fadeIn" animationOut="fadeOut">
                      <Row>
                        <div className="v-center">
                          <div className="col-xs-12 col-md-6">
                            <div className="caption-title">
                              <h2>Easy to Customize</h2>
                            </div>
                            <div className="caption-desc">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute
                              </p>
                            </div>
                            <div className="caption-button">
                              <a href="#" className="button">
                                Read more
                              </a>
                            </div>
                          </div>
                          <div className="col-xs-6 col-md-3">
                            <div className="caption-photo one">
                              <img
                                src="images/screen-1.jpg"
                                alt="feature description image"
                              />
                            </div>
                          </div>
                          <div className="col-xs-6 col-md-3">
                            <div className="caption-photo two">
                              <img
                                src="images/screen-2.jpg"
                                alt="feature description image"
                              />
                            </div>
                          </div>
                        </div>
                      </Row>
                    </Animated>
                  </CarouselItem>
                  <CarouselItem>
                    <Animated animationIn="fadeIn" animationOut="fadeOut">
                      <Row>
                        <div className="v-center">
                          <div className="col-xs-12 col-md-6">
                            <div className="caption-title">
                              <h2>Awesome Design</h2>
                            </div>
                            <div className="caption-desc">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute
                              </p>
                            </div>
                            <div className="caption-button">
                              <a href="#" className="button">
                                Read more
                              </a>
                            </div>
                          </div>
                          <div className="col-xs-6 col-md-3">
                            <div className="caption-photo one">
                              <img
                                src="images/screen-3.jpg"
                                alt="feature description image"
                              />
                            </div>
                          </div>
                          <div className="col-xs-6 col-md-3">
                            <div className="caption-photo two">
                              <img
                                src="images/screen-4.jpg"
                                alt="feature description image"
                              />
                            </div>
                          </div>
                        </div>
                      </Row>
                    </Animated>
                  </CarouselItem>
                </Carousel>
                <div className="carousel-indicator-captions">
                  <div>
                    <strong>Lorem ipsum </strong>
                    <span>consectetur adipisicing elit.</span>
                  </div>
                  <div>
                    <strong>Lorem ipsum </strong>
                    <span>consectetur adipisicing elit.</span>
                  </div>
                  <div>
                    <strong>Lorem ipsum </strong>
                    <span>consectetur adipisicing elit.</span>
                  </div>
                  <div>
                    <strong>Lorem ipsum </strong>
                    <span>consectetur adipisicing elit.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureDescription;
