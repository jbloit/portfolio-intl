import React from 'react'
import Layout from "../layouts/layout"
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div className="plain">

      <p>
        Want to work together? <br/> Do you want to start a project? <br/>Just saying hi? <br /> <br />Get in touch :
      <div className="social">
          <div><a href="mailto:julien.bloit@gmail.com"><FaEnvelope size="2em" /></a> </div>
        </div>


      </p>
    </div>



  </Layout>
)

export default IndexPage
