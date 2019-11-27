import React from "react"
import { Row, Col, Container, Carousel } from "react-bootstrap"
import Layout from "../../components/layout"
import SEO from "../../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
import Img from 'gatsby-image';

const theWick = (props) => (
    <Layout>
        <SEO title="Amenities" />
        <section>


        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.indexImage.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>The Wick</h1>
            </div>
          </div>          
        </BackgroundImage>

        <Container>
          <p className="summary">
          The Wick is located in the historic Royal Hotel located on Newcastle Street in downtown Brunswick, Georgia. Built in 1908, this property has gone through multiple modernizations over the course of its lifetime, but still maintains its original historic charm. With high ceilings adorned with pressed tin, gorgeous hardwood floors, original skylights, and large windows throughout, our office suites are truly one of a kind. Along with historic charm this working community also houses a 14 person conference room, kitchen, and copy center. Offering over 30 private office suites ranging from 100 - 300 square feet this community of entrepreneurs is a part of Brunswick’s vibrant small
          </p>
        </Container>

        <Container>
        <Carousel autoPlay interval={80000} touch={true}>
          <Carousel.Item>
            <Img fluid={props.data.wick01.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
          <Img fluid={props.data.wick02.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.wick03.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          </Carousel>
        </Container>

        <div className="subhead">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.6267005218305!2d-81.496362070799!3d31.15120889884333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e4d817bb4f97c1%3A0x7567711ebf771008!2s1612%20Newcastle%20St%2C%20Brunswick%2C%20GA%2031520!5e0!3m2!1sen!2sus!4v1574797196651!5m2!1sen!2sus" width="100%" height="100%" title="helo" frameborder="0"></iframe>
        </div>


        </section>
    </Layout>
);

export default theWick;
 
export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "wick1-header.jpg" }) {
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
    wick01: file(relativePath: { eq: "the-wick/wick01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick02: file(relativePath: { eq: "the-wick/wick02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick03: file(relativePath: { eq: "the-wick/wick03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;