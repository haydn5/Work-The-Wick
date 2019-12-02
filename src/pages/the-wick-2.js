import React from "react"
import { Container, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
import Img from 'gatsby-image';

const theWick = (props) => (
    <Layout>
        <SEO title="The Wick 2.0" />
        <section>


        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.indexImage.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>The Wick 2.0</h1>
            </div>
          </div>          
        </BackgroundImage>

        <Container>
          <p className="summary">
          Sitting adjacent to the beautiful Mary Ross Waterfront Park and situated on the East River the Wick 3.0 offers spectacular views from many suites. With its classic tabby exterior and spacious offices this recently renovated property provides a quiet work environment in a tranquil setting right in the middle of historic Downtown Brunswick, Georgia. It’s amenities include a central meeting space, a small kitchenette, and mail center. These spaces are perfect for those who are seeking networking opportunities and the ability to eat lunch by the marina daily! The Wick 2.0 offers nearly 30 private offices ranging from 100 - 250 square feet.
          </p>
        </Container>

        <Container>
        <Carousel autoPlay interval={80000} touch={true}>
          <Carousel.Item>
            <Img fluid={props.data.wick201.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
          <Img fluid={props.data.wick202.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.wick203.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          <Carousel.Item>
            <Img fluid={props.data.wick204.childImageSharp.fluid} alt="The Wick 3 Font Face of the Building" className="d-block img-fluid" />
          </Carousel.Item>
          </Carousel>
        </Container>

        <div className="subhead">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.5439487016874!2d-81.49991864882654!3d31.150177672352864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e4d816e1abc4b7%3A0xdf3be784287a1fc9!2s127%20F%20St%2C%20Brunswick%2C%20GA%2031520!5e0!3m2!1sen!2sus!4v1575306257337!5m2!1sen!2sus" width="100%" height="100%" title="helo" frameborder="0"></iframe>
        
        </div>


        </section>
    </Layout>
);

export default theWick;
 
export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "wick-2-header-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wick201: file(relativePath: { eq: "wick-2/wick-2-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick202: file(relativePath: { eq: "wick-2/wick-2-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick203: file(relativePath: { eq: "wick-2/wick-2-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wick204: file(relativePath: { eq: "wick-2/wick-2-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
  }
`;