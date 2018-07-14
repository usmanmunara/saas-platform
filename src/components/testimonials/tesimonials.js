import React, { Component } from 'react';
import './testimonials.css';
import { Carousel } from 'react-bootstrap';

class Testimonials extends Component {
  render() {
    return (
      <section
        ref={this.props.innerRef}
        id="testimonials"
        className="testimonial-area section-padding gray-bg overlay"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
              <div className="page-title">
                <h2>Client says</h2>
                <i className="fas fa-arrows-alt" />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit voluptates, temporibus at, facere harum fugiat!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <div className="testimonials">
                <Carousel interval={3000} indicators={false}>
                  <Carousel.Item>
                    <div className="testimonial">
                      <div className="testimonial-photo">
                        <img src="images/avatar-small-1.png" alt="" />
                      </div>
                      <h3>AR Rahman</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel vero dolore officiis, velit id libero illum
                        harum hic magni, quae repellendus adipisci possimus
                        saepe nostrum doloribus repudiandae asperiores commodi
                        voluptate.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial">
                      <div className="testimonial-photo">
                        <img src="images/avatar-small-2.png" alt="" />
                      </div>
                      <h3>AR Rahman</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel vero dolore officiis, velit id libero illum
                        harum hic magni, quae repellendus adipisci possimus
                        saepe nostrum doloribus repudiandae asperiores commodi
                        voluptate.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial">
                      <div className="testimonial-photo">
                        <img src="images/avatar-small-3.png" alt="" />
                      </div>
                      <h3>AR Rahman</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel vero dolore officiis, velit id libero illum
                        harum hic magni, quae repellendus adipisci possimus
                        saepe nostrum doloribus repudiandae asperiores commodi
                        voluptate.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial">
                      <div className="testimonial-photo">
                        <img src="images/avatar-small-4.png" alt="" />
                      </div>
                      <h3>AR Rahman</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel vero dolore officiis, velit id libero illum
                        harum hic magni, quae repellendus adipisci possimus
                        saepe nostrum doloribus repudiandae asperiores commodi
                        voluptate.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial">
                      <div className="testimonial-photo">
                        <img src="images/avatar-small-5.png" alt="" />
                      </div>
                      <h3>AR Rahman</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel vero dolore officiis, velit id libero illum
                        harum hic magni, quae repellendus adipisci possimus
                        saepe nostrum doloribus repudiandae asperiores commodi
                        voluptate.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial">
                      <div className="testimonial-photo">
                        <img src="images/avatar-small-6.png" alt="" />
                      </div>
                      <h3>AR Rahman</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel vero dolore officiis, velit id libero illum
                        harum hic magni, quae repellendus adipisci possimus
                        saepe nostrum doloribus repudiandae asperiores commodi
                        voluptate.
                      </p>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
