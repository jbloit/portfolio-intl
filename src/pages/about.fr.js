import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout"
import myFace from "../img/about/me_2019_square.png"

const IndexPage = (props) => (
  <Layout location={props.location}>

    <div className="plain">
      <div className="about">


        {/* <p>The tomato (see pronunciation) is the edible, often red berry-type fruit of the nightshade Solanum lycopersicum, commonly known as a tomato plant. The tomato is consumed in diverse ways, including raw, as an ingredient in many dishes, sauces, salads, and drinks.</p> */}

        <img src={myFace} alt="Me" />


        <p>The tomato (see pronunciation) is the edible, often red berry-type fruit of the nightshade Solanum lycopersicum, commonly known as a tomato plant. The tomato is consumed in diverse ways, including raw, as an ingredient in many dishes, sauces, salads, and drinks.</p>



      </div>

    </div>

  </Layout>
)

export default IndexPage
