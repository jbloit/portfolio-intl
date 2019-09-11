// Template for the project posts

import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"


export default (props) => {
  const post = props.data.markdownRemark
  return (
    <Layout location={props.location}>
      <div >
        <h1> {post.frontmatter.title}</h1>
        <ul class="postMetaData">
          <li>Support : {post.frontmatter.support} </li>
        <li>Publication : {post.frontmatter.date}</li>
        <li>Tech. : 
          {post.frontmatter.tech.map((aTech) => (
          " " + aTech + " "
      ))
      }
        </li>
        </ul>
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
        date(formatString: "YYYY")
        tech
        support
      }
    }
  }
`