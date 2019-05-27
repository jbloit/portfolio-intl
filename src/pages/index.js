import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout"

const IndexPage = (props) => (
  <Layout location={props.location}>
            <br/>je construis des dispositifs pour modeler la matière musicale, à des fins 
                <ul>
                    <li><a href="#">artistiques</a></li>
                    <li><a href="#">pédagogiques</a></li>
                    <li><a href="#">récréatives</a></li>
                </ul>
  </Layout>
)

export default IndexPage
