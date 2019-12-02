import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
// import Img from 'gatsby-image';

const neighborhood = (props) => (
    <Layout>
        <SEO title="Neighborhood" />
        <section>
        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.indexImage.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>Neighborhood</h1>
            </div>
          </div>          
        </BackgroundImage>

        <Container>
          <h2 className="summary">Historic Downtown Brunswick</h2>
          <p className="summary">The Wick and The Wick 2.0 are conveniently located in the heart of Historic Downtown Brunswick. The downtown area has great retail stores, restaurants, professional services, and entertainment. Come experience some of Brunswick's notable sites and events including: First Fridays, Signature Squares, the Ritz Theatre, the Brunswick Landing Marina, and more.
          </p>
          <hr />
        </Container>
        <div className="subhead">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.6267005218305!2d-81.496362070799!3d31.15120889884333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e4d817bb4f97c1%3A0x7567711ebf771008!2s1612%20Newcastle%20St%2C%20Brunswick%2C%20GA%2031520!5e0!3m2!1sen!2sus!4v1574797196651!5m2!1sen!2sus" width="100%" height="100%" title="helo" frameborder="0"></iframe>
        </div>
        
        </section>
    </Layout>
);

export default neighborhood;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "neighborhood.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;