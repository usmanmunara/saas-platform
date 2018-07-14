import React, { Component } from 'react';
import './faqs.css';
import { Panel, PanelGroup } from 'react-bootstrap';
import { Animate } from 'react-animate-mount';

class FAQS extends Component {
  state = {
    toggleInfo: [false, false, false, false]
  };

  toggleAccordion(key) {
    this.setState(({ toggleInfo }) => {
      const newToggleInfo = toggleInfo;
      newToggleInfo[key] = !toggleInfo[key];
      return {
        toggleInfo: newToggleInfo
      };
    });
  }

  //Since this is static web I haven't made a functional component for the Accordion.
  //If you intend to add more Accordions and make it dynamic
  //do make a new accordion.js functional component will make things easier.
  render() {
    return (
      <section
        ref={this.props.innerRef}
        className="gray-bg section-padding"
        id="faq-page"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
              <div className="page-title">
                <h2>Frequently Asked Questions</h2>
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
              <div className="panel-group" id="accordion">
                <div className="panel">
                  <h4 className="panel-title">
                    <a
                      aria-expanded={this.state.toggleInfo}
                      onClick={() => this.toggleAccordion(0)}
                    >
                      <span />
                      Sedeiusmod tempor inccsetetur aliquatraiy?
                    </a>
                  </h4>
                  <Animate duration={500} show={this.state.toggleInfo[0]}>
                    <div className="panel-collapse">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmodas temporo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrd exercitation ullamco laboris nisi ut aliquip ex
                        comodo consequat. Duis aute dolor in reprehenderit.
                      </p>
                    </div>
                  </Animate>
                </div>
              </div>
              <div className="panel-group" id="accordion">
                <div className="panel">
                  <h4 className="panel-title">
                    <a
                      aria-expanded={this.state.toggleInfo}
                      onClick={() => this.toggleAccordion(1)}
                    >
                      <span />
                      Tempor inccsetetur aliquatraiy?
                    </a>
                  </h4>
                  <Animate duration={500} show={this.state.toggleInfo[1]}>
                    <div className="panel-collapse">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmodas temporo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrd exercitation ullamco laboris nisi ut aliquip ex
                        comodo consequat. Duis aute dolor in reprehenderit.
                      </p>
                    </div>
                  </Animate>
                </div>
              </div>
              <div className="panel-group" id="accordion">
                <div className="panel">
                  <h4 className="panel-title">
                    <a
                      aria-expanded={this.state.toggleInfo}
                      onClick={() => this.toggleAccordion(2)}
                    >
                      <span />
                      Lorem ipsum dolor amet, consectetur adipisicing ?
                    </a>
                  </h4>
                  <Animate duration={500} show={this.state.toggleInfo[2]}>
                    <div className="panel-collapse">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmodas temporo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrd exercitation ullamco laboris nisi ut aliquip ex
                        comodo consequat. Duis aute dolor in reprehenderit.
                      </p>
                    </div>
                  </Animate>
                </div>
              </div>
              <div className="panel-group" id="accordion">
                <div className="panel">
                  <h4 className="panel-title">
                    <a
                      aria-expanded={this.state.toggleInfo}
                      onClick={() => this.toggleAccordion(3)}
                    >
                      <span />
                      Lorem ipsum dolor amet, consectetur adipisicing ?
                    </a>
                  </h4>
                  <Animate duration={500} show={this.state.toggleInfo[3]}>
                    <div className="panel-collapse">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmodas temporo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrd exercitation ullamco laboris nisi ut aliquip ex
                        comodo consequat. Duis aute dolor in reprehenderit.
                      </p>
                    </div>
                  </Animate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQS;
