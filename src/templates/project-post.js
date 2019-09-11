// Template for the project posts

import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
// import styles from "projects.module.css"
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';


export default (props) => {
  const post = props.data.markdownRemark
  return (
    <Layout location={props.location}>
      <div >
        <h1> {post.frontmatter.title}</h1>
        <ul class="postMetaData">
          <li><FormattedMessage id="meta_support" /> : {post.frontmatter.support} </li>
        <li><FormattedMessage id="meta_client" /> : {post.frontmatter.client}</li>
        <li><FormattedMessage id="meta_date" /> : {post.frontmatter.date}</li>
        <li><FormattedMessage id="meta_role" /> : {post.frontmatter.role}</li>
        <li><FormattedMessage id="meta_tech" /> : 
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
        client
        role
        support
        tech
      }
    }
  }
`