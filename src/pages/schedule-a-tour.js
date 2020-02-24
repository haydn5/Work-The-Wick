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
                    <p>
                        For all leasing inquiries, please call 912-571-8170, email <a href="mailto:Info@WorkTheWick.com">Info@WorkTheWick.com</a>, or enter your info and we’ll reach out to you!
                    </p>
                    </Col>
                    <Col lg={6}>
                    <Form 
                    name="contact v8"
                    method="post"
                    action="/success/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit="submit"
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact v8" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                    </p>
                     


                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        type="text" name="first-name"
                                     />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                       type="text" name="last-name"

                                     />
                            </Form.Group>
                            </Col>
                        </Row>


                            
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                required
                                type="email" 
                                name="email" 
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                required
                                type="text" 
                                name="phone" 
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>How much space are you looking for?</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="how-much-space"
                                rows="3"
                                placeholder="Examples: About 150-200 square feet; Enough for 3 people working full-time; A small office for 1 but lots of storage space..."
                             />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Please tell us a little bit about your business.</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="more-about-business"
                                rows="3"
                                placeholder="What do you do? (but really, what don’t you do…)"
                             />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
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