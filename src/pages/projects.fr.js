import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../layouts/fr"
import Img from "gatsby-image";
import styles from "./projects.module.css";

const IndexPage = (props) => (
  <Layout location={props.location}>
  <h1>Mes projets</h1>
    <div className={styles.projects}>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={styles.projectThumb}>
          <h3>{node.frontmatter.title}</h3>
          <h4>{node.frontmatter.client}</h4>
          <p>{node.frontmatter.abstract}</p>
          <Link to={node.fields.slug}>
            <Img
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
            />
          </Link>

        </div>

      ))}
    </div>
  </Layout>
)

export default IndexPage



export const query = graphql`   
    query{
        allMarkdownRemark(filter: {frontmatter: {type: {eq:"project"}}, fields: {langKey: {eq:"fr"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
              node {
                id
                frontmatter{
                title   
                client    
                abstract
                thumbnail {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                
                }
               }
               fields{
                   slug
                   langKey
               }
              }
            }
          }
        }
`