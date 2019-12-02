import React from "react"
import { Container, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
import Img from 'gatsby-image';

const theWick = (props) => (
    <Layout>
        <SEO title="The Wick 3.0" />
        <section>


        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.indexImage.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>The Wick 3.0</h1>
            </div>
          </div>          
        </BackgroundImage>

        <Container>
          <p className="summary">
          Help us welcome the newest addition to The Wick family of properties is close to it everything. Located in the heart of historic downtown Brunswick, Georgia on Gloucester Street, this project has been completely renovated in 2019. The Wick 3.0 boasts a grand and gracious lobby with no shortage of large office suites. With a spacious kitchen and conference room that seats 20 The Wick 3.0 offers over 35 offices ranging from 150 - 300 square feet. Many plans have been put into the works to create not only a working community between these three buildings but an opportunity to network and grow your small business. We look forward to sharing all we have in store with you.
          </p>
        </Container>

        <Container>
        <Carousel autoPlay interval={80000} touch={true}>
          <Carousel.Item>
            <Img fluid={props.data.wick0301.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.wick0302.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.wick0303.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.wick0304.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          </Carousel>
        </Container>

        <div className="subhead">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.5714722294547!2d-81.49689104882655!3d31.14941357239014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e4d8163082c631%3A0x8fd45d63c73590b0!2s501%20Gloucester%20St%2C%20Brunswick%2C%20GA%2031520!5e0!3m2!1sen!2sus!4v1575306466706!5m2!1sen!2sus" width="100%" height="100%" title="helo" frameborder="0"></iframe>
        </div>


        </section>
    </Layout>
);

export default theWick;
 
export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "wick-3-header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wick0301: file(relativePath: { eq: "wick-3/wick-3-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick0302: file(relativePath: { eq: "wick-3/wick-3-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick0303: file(relativePath: { eq: "wick-3/wick-3-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick0304: file(relativePath: { eq: "wick-3/wick-3-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;