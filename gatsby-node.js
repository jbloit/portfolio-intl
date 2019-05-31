const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// call the createPages API to add pages 
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter{
                type
              }
            }
          }
        }
      }
    `
    ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {

            console.log(node.fields.slug)

            if(node.frontmatter.type === "project"){
                console.log("Create PROJECT page from .md file")
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/project-post.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                })
            } else if (node.frontmatter.type === "lab") {
                console.log("Create LAB page from .md file")
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/lab-post.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                })
            }


        })


        // console.log(JSON.stringify(result, null, 4))
    })
}