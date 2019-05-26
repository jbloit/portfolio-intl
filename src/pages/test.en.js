import React from 'react'
import { graphql } from "gatsby"


const IndexPage = (props) => {
  // console.log(props)
  console.log(props)
  return (

    <div><p>Projets</p></div>

  )
}
export default IndexPage


export const query = graphql`   
    query {
        
            site{
              siteMetadata{
                title
              }
            }
          
    }
`