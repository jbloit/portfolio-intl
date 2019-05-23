const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
// called whenever a new node is created or updated

// come up with a slug from the file name of the node (the .md file in this case)
// and add a 'slug' field to that node
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })

    }
}


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