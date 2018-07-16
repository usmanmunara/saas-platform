import React, { Component } from 'react';
import './mainMenu.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class MainMenu extends Component {
  state = {
    activeKey: 1,
    backgroundColor: 'none'
  };
  handleNavbarActive(key) {
    this.setState({ activeKey: key });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.backgroundColor !== this.props.backgroundColor) {
      this.setState({
        backgroundColor: this.props.backgroundColor
      });
    }
  }

  render() {
    return (
      <div ref={this.props.innerRef} className="Mainmenu">
        <div className="mainmenu-area">
          <Navbar
            style={{ backgroundColor: this.state.backgroundColor }}
            fixedTop={true}
          >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home-page" className="logo">
                  <h2 className="">colid</h2>
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav
                onSelect={(key, e) => this.handleNavbarActive(key, e)}
                activeKey={
                  !this.props.activeHref ? this.state.activeKey : false
                }
                activeHref={this.props.activeHref}
                pullRight
              >
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={1}
                  href="#home-page"
                >
                  Home
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={2}
                  href="#service-page"
                >
                  Service
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={3}
                  href="#feature-page"
                >
                  Features
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={4}
                  href="#price-page"
                >
                  Pricing
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={5}
                  href="#team-page"
                >
                  Team
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={6}
                  href="#faq-page"
                >
                  FAQ
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={7}
                  href="#testimonials"
                >
                  Testimonials
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={8}
                  href="#contact-page"
                >
                  Contact
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default MainMenu;
