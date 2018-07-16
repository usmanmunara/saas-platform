import React, { Component } from 'react';
import './featureDescription.css';
import { Row } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

class AnimateScreenSlider extends Component {
  render() {
    const {
      captionTitle,
      captionDescription,
      imageOne,
      imageTwo
    } = this.props.data;
    return (
      <Row>
        <div className="v-center">
          <div className="col-xs-12 col-md-6">
            <Animated animationInDelay={400} animationIn="fadeInUp">
              <div className="caption-title">
                <h2>{captionTitle}</h2>
              </div>
            </Animated>
            <Animated animationInDelay={600} animationIn="fadeInUp">
              <div className="caption-desc">
                <p>{captionDescription}</p>
              </div>
            </Animated>
            <Animated animationInDelay={800} animationIn="fadeInUp">
              <div className="caption-button">
                <a href="#home-page" className="button">
                  Read more
                </a>
              </div>
            </Animated>
          </div>
          <div className="col-xs-6 col-md-3">
            <Animated animationInDelay={1000} animationIn="fadeInRight">
              <div className="caption-photo one">
                <img src={imageOne} alt="feature description " />
              </div>
            </Animated>
          </div>
          <div className="col-xs-6 col-md-3">
            <Animated animationInDelay={1200} animationIn="fadeInRight">
              <div className="caption-photo two">
                <img src={imageTwo} alt="feature description " />
              </div>
            </Animated>
          </div>
        </div>
      </Row>
    );
  }
}

export default AnimateScreenSlider;
