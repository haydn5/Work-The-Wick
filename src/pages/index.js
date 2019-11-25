import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
import Img from 'gatsby-image';

import wick1logo from "../images/logo-1-wick.svg"
import wick2logo from "../images/logo-2-wick.svg"
import wick3logo from "../images/logo-3-wick.svg"


const test3 = (props, {text123}) => (
  <Layout>
        <SEO title="Offices in Brunswick, Georgia"/>
        <section className="page-section">

        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.indexImage.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>Private offices in Downtown Brunswick starting at $200/mo. all inclusive.</h1>
            </div>
          </div>
          {/* <div className="helper"> */}
          {/* <h1>Private offices in Downtown Brunswick starting at $200/mo. all inclusive.</h1> */}
          {/* </div> */}
          
        </BackgroundImage>
        <Container>
          <h2 className="summary">100 Offices   —   3 Locations   —   1 Community</h2>
          <p className="summary">The Wick is a shared work space that offers tenants the privacy of individual office spaces with the amenities of larger office buildings. With 3 convenient locations in Historic Downtown Brunswick offering over 100 unique offices, The Wick is a community of entrepreneurs, small businesses, professionals, non-profits, creatives, and more.</p>
        </Container>
        <hr /> 
        <Container>

          <Row>
            <Col lg={4}>
              <p><Img fluid={props.data.wick1Front.childImageSharp.fluid} alt="The Wick 1 Font Face of the Building" /></p>
            </Col>
            <Col lg={8}>
              <p><img src={wick1logo} alt="Wick 1 Logo" className="img-fluid maxWidth200 paddingRight127" /></p>
              <h3 className="text-uppercase">1612 Newcastle Street</h3>
              <p>Originally the Royal Hotel, built in 1908, this property has gone through multiple modernizations over the course of its lifetime, but still maintains its original charm. With 14' ceilings adorned with pressed tin, gorgeous hardwood floors, original skylights, and 8' windows throughout, this building is sure to make an impact on your guests. The Wick offers over 30 private offices ranging from 100 - 300 square feet.</p>
              <Button variant="info">Learn More</Button>
            </Col>
            
          </Row>
          <hr />
          <Row>
            <Col lg={4}>
              <p><Img fluid={props.data.wick2Front.childImageSharp.fluid} alt="The Wick 2 Font Face of the Building" /></p>
            </Col>
            <Col lg={8}>
              <p><img src={wick2logo} alt="Wick 2 Logo" className="img-fluid maxWidth200" /></p>
              <h3 className="text-uppercase">127 F. Street</h3>
              <p>Situated next to Mary Ross Waterfront Park and the East River, this location offers river, marsh, and park views from many suites. This recently renovated property provides a quiet work environment in a tranquil setting. The Wick 2.0 offers nearly 30 private offices ranging from 100 - 250 square feet.</p>
              <Button variant="info">Learn More</Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={4}>
              <p><Img fluid={props.data.wick3Front.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" /></p>
            </Col>
            <Col lg={8}>
              <p><img src={wick3logo} alt="Wick 3 Logo" className="img-fluid maxWidth200" /></p>
              <h3 className="text-uppercase">501 Gloucester Street</h3>
              <p>Situated next to Mary Ross Waterfront Park and the East River, this location offers river, marsh, and park views from many suites. This recently renovated property provides a quiet work environment in a tranquil setting. The Wick 2.0 offers nearly 30 private offices ranging from 100 - 250 square feet.</p>
              <Button variant="info">Learn More</Button>
            </Col>
          </Row>

        </Container>

        <Container>
          <h2 className="summary">Locations</h2>
          <p className="summary">Located in the heart of Historic Downtown Brunswick, all three of The Wick locations offer tenants easy access to restaurants, shops, banks, professional services, and more. With locations on Newcastle Street, Gloucester Street, and next to Mary Ross Waterfront Park, these central locations are ideal for individuals and businesses alike.</p>
        </Container>
 
        </section>
        
      </Layout>
);

export default test3;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "wick-1-outside-cars.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wick1Front: file(relativePath: { eq: "wick-1-outside.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick2Front: file(relativePath: { eq: "wick-2-outside.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick3Front: file(relativePath: { eq: "wick-3-outside.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;