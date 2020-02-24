import React from "react"
import { Container, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
import Img from 'gatsby-image';

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
          <p className="summary">All of The Wick locations are conveniently located in the heart of Historic Downtown Brunswick. The downtown area is filled with great retail shops, restaurants, art galleries, professional services, and entertainment. Experience some of Brunswick's notable sites and events including: Signature Square Parks, Historic Old City Hall, Lover’s Oak, Mary Ross Waterfront Park, Historic Ritz Theatre, Brunswick Landing Marina, First Fridays, and much more!
          </p>
          <hr />
        </Container>
        <Container>
        <Carousel autoPlay interval={80000} touch={true}>
          <Carousel.Item>
            <Img fluid={props.data.neighborhood01.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.neighborhood02.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.neighborhood03.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.neighborhood04.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.neighborhood05.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.neighborhood06.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          </Carousel>
        </Container>
        
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
    neighborhood01: file(relativePath: { eq: "neighborhood/neighborhood-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    neighborhood02: file(relativePath: { eq: "neighborhood/neighborhood-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    neighborhood03: file(relativePath: { eq: "neighborhood/neighborhood-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    neighborhood04: file(relativePath: { eq: "neighborhood/neighborhood-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    neighborhood05: file(relativePath: { eq: "neighborhood/neighborhood-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    neighborhood06: file(relativePath: { eq: "neighborhood/neighborhood-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;