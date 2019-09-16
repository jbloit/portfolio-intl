import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout"
import coverImage from "../img/cover/compositrainAbstract.png"

const IndexPage = (props) => (
  <Layout location={props.location}>


    <div className="cover">

      <img src={coverImage} />

      <div class="headlines">
      <div>
        <h1>
        Je construis des dispositifs pour modeler la matière musicale,
        </h1>
        <h4>
        à des fins artistiques, pédagogiques ou récréatives.
       
        </h4>
        </div>
      </div>

    </div>



  </Layout>
)

export default IndexPage
