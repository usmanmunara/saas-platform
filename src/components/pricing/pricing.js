import React, { Component } from 'react';
import './pricing.css';

class Pricing extends Component {
  render() {
    return (
      <section
        ref={this.props.innerRef}
        className="price-area overlay section-padding"
        id="price-page"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
              <div className="page-title">
                <h2>Afortable Price</h2>
                <i className="fas fa-arrows-alt" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit voluptates, temporibus at, facere harum fugiat!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="price-table">
                <h3 className="text-uppercase price-title">Basic</h3>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <strong className="amount">
                      $
                      <span className="big">20</span>
                    </strong>/Month
                  </li>
                  <li>100 MB Disk Space</li>
                  <li>2 Subdomains</li>
                  <li>5 Email Accounts</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </ul>
                <hr />
                <a href="#home-page" className="button">
                  Purchase
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="price-table active">
                <span className="price-info">
                  <i className="fas fa-crown" />
                </span>
                <h3 className="text-uppercase price-title">STANDARD</h3>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <strong className="amount">
                      $
                      <span className="big">39</span>
                    </strong>/Month
                  </li>
                  <li>100 MB Disk Space</li>
                  <li>2 Subdomains</li>
                  <li>5 Email Accounts</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </ul>
                <hr />
                <a href="#home-page" className="button">
                  Purchase
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="price-table">
                <h3 className="text-uppercase price-title">UNLIMITED</h3>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <strong className="amount">
                      $
                      <span className="big">59</span>
                    </strong>/Month
                  </li>
                  <li>100 MB Disk Space</li>
                  <li>2 Subdomains</li>
                  <li>5 Email Accounts</li>
                  <li>Webmail Support</li>
                  <li>Customer Support 24/7</li>
                </ul>
                <hr />
                <a href="#home-page" className="button">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
