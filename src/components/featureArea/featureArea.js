import React, { Component } from 'react';
import './featureArea.css';

class FeatureArea extends Component {
  render() {
    return (
      <section
        ref={this.props.innerRef}
        className="gray-bg section-padding"
        id="service-page"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/Images/service-icon-1.png`}
                    alt=""
                  />
                </div>
                <h4>EASY TO USE</h4>
                <p>
                  Lorem ipsum dolor sit amt, consectet adop adipisicing elit,
                  sed do eiusmod tepo raraincididunt ugt labore.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/Images/service-icon-2.png`}
                    alt=""
                  />
                </div>
                <h4>AWESOEM DESIGN</h4>
                <p>
                  Lorem ipsum dolor sit amt, consectet adop adipisicing elit,
                  sed do eiusmod tepo raraincididunt ugt labore.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="box">
                <div className="box-icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/Images/service-icon-3.png`}
                    alt=""
                  />
                </div>
                <h4>EASY TO CUSTOMAIZE</h4>
                <p>
                  Lorem ipsum dolor sit amt, consectet adop adipisicing elit,
                  sed do eiusmod tepo raraincididunt ugt labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureArea;
