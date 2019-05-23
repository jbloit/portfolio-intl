import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/fr"

const SecondPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Page deux</h1>
      <p>Bienvenue</p>
      <Link to="/fr/">Acceuil</Link>
    </div>
  </Layout>
)

export default SecondPage
