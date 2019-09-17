import React from 'react'
import Layout from "../layouts/layout"
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div className="plain">

      <p>
        Envie de travailler ensemble? <br/> Une idée de projet? <br/>Un petit bonjour? <br /> <br />Contactez-moi :
      <div className="social">
          <div><a href="mailto:julien.bloit@gmail.com"><FaEnvelope size="2em" /></a> </div>
        </div>


      </p>
    </div>



  </Layout>
)

export default IndexPage
