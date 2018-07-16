import React, { Component } from 'react';
import './mainMenu.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: 1,
      backgroundColor: 'none'
    };
  }
  handleNavbarActive(key, e) {
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
                  <AnchorLink href="#home-page">Home</AnchorLink>
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={2}
                  href="#service-page"
                >
                  <AnchorLink href="#service-page">Service</AnchorLink>
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={3}
                  href="#feature-page"
                >
                  <AnchorLink href="#feature-page">Features</AnchorLink>
                </NavItem>

                <NavItem
                  className="navItemCustomStyle"
                  eventKey={4}
                  href="#price-page"
                >
                  <AnchorLink href="#price-page">Pricing</AnchorLink>
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={5}
                  href="#team-page"
                >
                  <AnchorLink href="#team-page">Team</AnchorLink>
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={6}
                  href="#faq-page"
                >
                  <AnchorLink href="#faq-page">FAQ</AnchorLink>
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={7}
                  href="#testimonials"
                >
                  <AnchorLink href="#testimonials">Testimonials</AnchorLink>
                </NavItem>
                <NavItem
                  className="navItemCustomStyle"
                  eventKey={8}
                  // href="#contact-page"
                >
                  <AnchorLink href="#contact-page">Contact</AnchorLink>
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
