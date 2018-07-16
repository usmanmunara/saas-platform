import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <footer
        ref={this.props.innerRef}
        className="footer-area relative sky-bg"
        id="contact-page"
      >
        <div className="absolute footer-bg" />
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                <div className="page-title">
                  <h2>Contact with us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit voluptates, temporibus at, facere harum fugiat!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <address className="side-icon-boxes">
                  <div className="side-icon-box">
                    <div className="side-icon">
                      <img src="images/location-arrow.png" alt="" />
                    </div>
                    <p>
                      <strong>Address: </strong> Box 564, Disneyland
                      <br />USA
                    </p>
                  </div>
                  <div className="side-icon-box">
                    <div className="side-icon">
                      <img src="images/phone-arrow.png" alt="" />
                    </div>
                    <p>
                      <strong>Telephone: </strong>
                      <a href="callto:8801812726495">+8801812726495</a>
                      <br />
                      <a href="callto:8801687420471">+8801687420471</a>
                    </p>
                  </div>
                  <div className="side-icon-box">
                    <div className="side-icon">
                      <img src="images/mail-arrow.png" alt="" />
                    </div>
                    <p>
                      <strong>E-mail: </strong>
                      <a href="mailto:youremail@example.com">
                        youremail@example.com
                      </a>
                      <br />
                      <a href="mailto:youremail@example.com">
                        example@mail.com
                      </a>
                    </p>
                  </div>
                </address>
              </div>
              <div className="col-xs-12 col-md-8">
                <form
                  action="process.php"
                  id="contact-form"
                  method="post"
                  className="contact-form"
                >
                  <div className="form-double">
                    <input
                      type="text"
                      id="form-name"
                      name="form-name"
                      placeholder="Your name"
                      className="form-control"
                      required="required"
                    />
                    <input
                      type="email"
                      id="form-email"
                      name="form-email"
                      className="form-control"
                      placeholder="E-mail address"
                      required="required"
                    />
                  </div>
                  <input
                    type="text"
                    id="form-subject"
                    name="form-subject"
                    className="form-control"
                    placeholder="Message topic"
                  />
                  <textarea
                    name="form-message"
                    id="form-message"
                    rows="5"
                    className="form-control"
                    placeholder="Your message"
                    required="required"
                  />
                  <button type="submit" className="button">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 pull-right">
                <ul className="social-menu text-right x-left">
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
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#home-page">
                      <i className="fab fa-github-alt" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  corrupti architecto consequuntur, laborum quaerat sed nemo
                  temporibus unde, beatae vel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center">
                <p>
                  &copy;Copyright 2018 All right resurved. This template is made
                  with
                  <i className="fas fa-heart" aria-hidden="true" /> by
                  <a href="https://colorlib.com">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Contact;
