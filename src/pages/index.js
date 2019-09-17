import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout"
import coverImage from "../img/cover/compositrainAbstract.png"

const IndexPage = (props) => (
  <Layout location={props.location}>


    <div className="cover">
      <img src={coverImage} />
      <h2>Je conçois des</h2>
      <h1>Applications musicales</h1>
      <h4>artistiques, pédagogiques ou récréatives.</h4>
    </div>

  </Layout>
)

export default IndexPage
