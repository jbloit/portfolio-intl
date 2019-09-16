import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout"
import myFace from "../img/about/me_2019_square.png"

const IndexPage = (props) => (
  <Layout location={props.location}>
    
    
    <div className="about">
    <p> 
  <img src={myFace} alt="Me"/>

   
    Je sais faire 
    <ul>
      <li>
        ceci
      </li>
      <li>
        cela
      </li>
    </ul>
      </p>
  
  </div>
      
           

  </Layout>
)

export default IndexPage
