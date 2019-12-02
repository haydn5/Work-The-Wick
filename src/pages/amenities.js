import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
import Img from 'gatsby-image';

const amenities = (props) => (
    <Layout>
        <SEO title="Amenities" />
        <section>
        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.amenities.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>Amenities</h1>
            </div>
          </div>          
        </BackgroundImage>

        <Container>
          <h2 className="summary">All-Inclusive Ease</h2>
          <p className="summary">The Wick is more than just an office – it's an all-inclusive office experience. Rental rates are inclusive of all utilities so you can focus on your work and let us handle the bills. In addition,  we offer some of these other great amenities to members as well, all included in your lease.
          </p>
          <hr />
        </Container>

        <Container>

          <Row>
            <Col lg={4}>
                <p><Img fluid={props.data.noInvoices.childImageSharp.fluid} /></p>
            </Col>
            <Col lg={8}>
              <h2>Utilities Included</h2>
              <p><strong>Electricity, WI-FI, Water, Security, Trash, Maintenance</strong></p>

              <p>The Wick is more than just an office – it's an all-inclusive office experience. Rental rates are inclusive of all utilities so you can focus on your work and let us handle the bills. In addition,  we offer some of these other great amenities to members as well, all included in your lease.</p>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
                <p><Img fluid={props.data.conferenceroom.childImageSharp.fluid} /></p>
            </Col>
            <Col lg={8}>
              <h2>Conference Rooms</h2>
              <p><strong>Executive Conference Rooms Availabel for Use</strong></p>

              <p>All members have access to our 14 person executive conference rooms on a first-come first-serve basis. The shared calendar is made available to all tenants for ease of use.</p>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
                <p><Img fluid={props.data.events.childImageSharp.fluid} /></p>
            </Col>
            <Col lg={8}>
              <h2>Community Events</h2>
              <p><strong>Regular Tenant Networking Events Throughout The Year</strong></p>

              <p>The most important part of The Wick is the community of driven, passionate people in a variety of industries. We coordinate tenant events regularly to provide opportunities for tenants to meet, mingle, and work together.</p>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
                <p><Img fluid={props.data.officeEquipment.childImageSharp.fluid} /></p>
            </Col>
            <Col lg={8}>
              <h2>Print/Copy/Scan</h2>
              <p><strong>Multipurpose Copy Center</strong></p>

              <p>All properties have their own high speed professional grade multi-purpose printer/copiers with scan to email capability.</p>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
                <p><Img fluid={props.data.camera.childImageSharp.fluid} /></p>
            </Col>
            <Col lg={8}>
              <h2>24/7 Access & Security</h2>
              <p><strong>Secure Buildings with 24/7 Access</strong></p>

              <p>All properties have 24/7 security with cameras, automatic door locks, and more. Tenants have 24/7 access with unique security credentials for after hour access.</p>
            </Col>
          </Row>
          

        </Container>
        </section>
    </Layout>
);

export default amenities;

export const pageQuery = graphql`
  query {
    conferenceroom: file(relativePath: { eq: "conference-room.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    events: file(relativePath: { eq: "events.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    officeEquipment: file(relativePath: { eq: "machine-clipart-office-equipment-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    noInvoices: file(relativePath: { eq: "no-invoices.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    amenities: file(relativePath: { eq: "amenities.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    camera: file(relativePath: { eq: "bullet-camera-atlanta-business.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;