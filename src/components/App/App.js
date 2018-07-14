import React, { Component } from 'react';
import './App.css';
import MainMenu from '../mainMenu/mainMenu';
import Header from '../header/header';
import '../../style.css';
import '../../responsive.css';
import FeatureArea from '../featureArea/featureArea';
import FeatureDescription from '../featureDescription/featureDescription';
import SpecialFeature from '../specialFeature/specialFeature';
import Pricing from '../pricing/pricing';
import Team from '../team/team';
import Testimonials from '../testimonials/tesimonials';
import FAQS from '../faqs/faqs';
import Contact from '../contact/contact';
import Waypoint from 'react-waypoint';

class App extends Component {
  state = {
    mainMenuBkgColor: 'none',
    menuKey: 1,
    activeHref: '#home-page'
  };
  handleMainmenuAffix = ({ currentPosition }) => {
    if (currentPosition === Waypoint.above) {
      this.setState({
        mainMenuBkgColor: '#138fc2'
      });
    } else if (currentPosition === Waypoint.inside) {
      this.setState({
        mainMenuBkgColor: 'transparent'
      });
    }
  };
  handleMainmenuSpyScroll({ key, activeHref }) {
    this.setState({
      menuKey: key,
      activeHref
    });
  }

  render() {
    return (
      <div data-target="#primary-menu" className="App">
        <Waypoint
          onPositionChange={this.handleMainmenuAffix}
          bottomOffset="5px"
        >
          <MainMenu
            backgroundColor={this.state.mainMenuBkgColor}
            activeHref={this.state.activeHref}
          />
        </Waypoint>
        <Waypoint
          onEnter={() => {
            this.handleMainmenuSpyScroll('1', '#home-page');
          }}
        >
          <Header />
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleMainmenuSpyScroll('2', '#service-page')}
        >
          <FeatureArea />
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleMainmenuSpyScroll('2', '#service-page')}
        >
          <FeatureDescription />
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleMainmenuSpyScroll('3', '#feature-page')}
        >
          <SpecialFeature />
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleMainmenuSpyScroll('4', '#price-page')}
        >
          <Pricing />
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleMainmenuSpyScroll('5', '#team-page')}
        >
          <Team />
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleMainmenuSpyScroll('6', '#faq-page')}
        >
          <FAQS />
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleMainmenuSpyScroll('7', '#testimonials')}
        >
          <Testimonials />
        </Waypoint>
        <Waypoint
          onEnter={() => this.handleMainmenuSpyScroll('8', '#contact-page')}
        >
          <Contact />
        </Waypoint>
      </div>
    );
  }
}

export default App;
