import React, { Component } from 'react';
import './header.css';
import { Carousel } from 'react-bootstrap';

class Header extends Component {
  state = {
    sliderData: [
      'screen-1.jpg',
      'screen-2.jpg',
      'screen-3.jpg',
      'screen-4.jpg',
      'screen-5.jpg'
    ]
  };

  render() {
    return (
      <header
        ref={this.props.innerRef}
        className="header-area overlay full-height relative v-center"
        id="home-page"
      >
        <div className="absolute anlge-bg" />
        <div className="container">
          <div className="row v-center">
            <div className="col-xs-12 col-md-7 header-text">
              <h2>It’s all about Promoting your Business</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                ex inventore vel error quibusdam animi fugiat, doloribus dolores
                consectetur nulla deleniti sint blanditiis quod debitis quis
                vitae officiis tempora numquam.
              </p>
              <a href="#home-page" className="button white">
                Watch video
              </a>
            </div>
            <div className="hidden-xs hidden-sm col-md-5 text-right">
              <div className="displayItem">
                <Carousel indicators={false}>
                  {this.state.sliderData ? (
                    this.state.sliderData.map((imageName, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <img
                            alt="display"
                            src={`${
                              process.env.PUBLIC_URL
                            }/Images/${imageName}`}
                          />
                        </Carousel.Item>
                      );
                    })
                  ) : (
                    <Carousel.Item>
                      <img
                        alt="display"
                        src={`${process.env.PUBLIC_URL}/Images/screen-1.jpg`}
                      />
                    </Carousel.Item>
                  )}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
