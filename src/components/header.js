import React from "react"

import { Navbar, Nav } from "react-bootstrap"
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
      
      <div className="container">
        <Navbar className="navbar  navbar-expand-md navbar-light" id="mainNav" expand="xl"
                collapseOnSelect={true}>
          
            <Link className="navbar-brand">
              <img src={logo} alt={'The Wick'} className="imgFullCol" width="200" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav text-center ml-auto">
              <ul className="navbar-nav  text-center">
	              
                <li><Link to="/about-the-book/" className="nav-link" activeClassName="active">Locations</Link></li>
                <li><Link to="/about-the-author/" className="nav-link" activeClassName="active">Offices</Link></li>
                <li><Link to="/contact/" className="nav-link" activeClassName="active">Amenities</Link></li>
                <li><Link to="/contact/" className="nav-link" activeClassName="active">Neighborhood</Link></li>
                <li><Link to="/contact/" className="nav-link" activeClassName="active">Schedule a Tour</Link></li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
        </div>
      </>
    );
  }
}
