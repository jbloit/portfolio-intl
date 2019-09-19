import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout"
import coverImage from "../img/cover/compositrainAbstract.png"

const IndexPage = (props) => (
  <Layout location={props.location}>


    <div className="cover">
    {/* <div className="pitch">
        <h1>Applications musicales</h1>
        <p>Pédagogiques</p>
        <p>Artistiques</p>
        <p>ou Récréatives</p>
      </div> */}
      <img src={coverImage} />


    </div>
    <h1>Audio Developer ~</h1>
  </Layout>
)

export default IndexPage
