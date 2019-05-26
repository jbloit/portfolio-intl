// Template for the project posts

import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/en"

export default (props) => {
  const post = props.data.markdownRemark
  return (
    <Layout location={props.location}>
      <div>
        <h1>PROJECT --- {post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

// Pull data from field that has the slug from this page.
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`