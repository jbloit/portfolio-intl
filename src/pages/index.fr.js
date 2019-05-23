import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/fr"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Salut</h1>
      <p>Accueil.</p>
      <p>C'est le début</p>
      <Link to="/fr/page-2/">Aller à la page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
