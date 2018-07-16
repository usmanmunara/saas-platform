import React, { Component } from 'react';
import './featureDescription.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import AnimateScreenSlider from './animatedscreenSlider';

class FeatureDescription extends Component {
  render() {
    const screenSliderData = [
      {
        captionTitle: 'Easy to build',
        captionDescription:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
        imageOne: 'images/screen-1.jpg',
        imageTwo: 'images/screen-2.jpg'
      },
      {
        captionTitle: 'Easy to Use',
        captionDescription:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
        imageOne: 'images/screen-3.jpg',
        imageTwo: 'images/screen-4.jpg'
      },
      {
        captionTitle: 'Easy to Customize',
        captionDescription:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
        imageOne: 'images/screen-1.jpg',
        imageTwo: 'images/screen-2.jpg'
      },
      {
        captionTitle: 'Awesome Design',
        captionDescription:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
        imageOne: 'images/screen-3.jpg',
        imageTwo: 'images/screen-4.jpg'
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
                  interval={3500}
                  className="caption-slider featureDescriptionCarousel"
                  controls={false}
                >
                  {screenSliderData.map((data, index) => {
                    return (
                      <CarouselItem key={index}>
                        <AnimateScreenSlider data={data} />
                      </CarouselItem>
                    );
                  })}
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
