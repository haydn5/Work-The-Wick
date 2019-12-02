import React from "react"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Scroller from './scroller'
import { Link } from 'gatsby'

import logo from "../images/work-the-wick-logo.svg"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
      <div className="orange-bar"></div>
      <div className="container">
        <Navbar className="navbar  navbar-expand-md" id="mainNav" expand="xl"
                collapseOnSelect={true}>
          
            <Link className="navbar-brand">
              <img src={logo} alt={'The Wick'} className="imgFullCol" width="200" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav text-center ml-auto" >
              <ul className="navbar-nav  text-center">
            
              
              <NavDropdown title="Offices" id="basic-nav-dropdown">
                <NavDropdown.Item href="/the-wick/">The Wick</NavDropdown.Item>
                <NavDropdown.Item href="/the-wick-2/">The Wick 2.0</NavDropdown.Item>
                <NavDropdown.Item href="/the-wick-3/">The Wick 3.0</NavDropdown.Item>
              </NavDropdown>
                <li><Link to="/amenities/" className="nav-link" activeClassName="active">Amenities</Link></li>
            
                <li><Link to="/neighborhood" className="nav-link" activeClassName="active">Neighborhood</Link></li>
                <li><Link to="/schedule-a-tour/" className="nav-link" activeClassName="active">Schedule a Tour</Link></li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
        </div>
      </>
    );
  }
}
