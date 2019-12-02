import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
// import Img from 'gatsby-image';

const success = (props) => (
    <Layout>
        <SEO title="Schedule A Tour" />
        <section>
            <BackgroundImage
            Tag="section"
            className="masthead fixed"
            fluid={props.data.indexImage.childImageSharp.fluid}
            fadeIn
            >
            <div className="black-overlay">
                <div className="content-box">
                <h1>Schedule a Tour</h1>
                </div>
            </div>          
            </BackgroundImage>
            <Container>
                <Row>
                    <Col lg={6}>

                    </Col>
                    <Col lg={6}>
                    Success!
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
);

export default success;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "wick-1-outside-cars.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`;