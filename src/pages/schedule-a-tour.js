import React from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
// import Img from 'gatsby-image';

const scheduleATour = (props) => (
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
                    <Form 
                    name="contact"
                    method="post"
                    action="/success/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit="submit"
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                    </p>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="name"
                                name="name"
                                placeholder="John Doe" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder="name@example.com" />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="message"
                                rows="3" />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
);

export default scheduleATour;

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