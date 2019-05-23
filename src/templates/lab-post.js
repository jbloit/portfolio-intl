// Template for the project posts

import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>

        <h1>LAB --- {post.frontmatter.title}</h1>
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