import React from 'react'
import Layout from "../layouts/layout"
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div className="plain">

    <br />
      <br />
      <br />

      <div >
        <p>
          Julien Bloit<br />
          Rue Marconi 125<br />
          1190 Forest, Belgium<br/>
          VAT: BE 0634.594.289<br/><br/>
          +32 485 922 865<br/>
          julien.bloit@gmail.com
        </p>
      </div>

      <div className="social">
        <div><a href="https://github.com/jbloit" target="_blank" rel="noopener noreferrer"><FaGithub size="2em" /></a></div>
        <div><a href="https://www.linkedin.com/in/julien-bloit-4081b16/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em" /></a></div>
        <div><a href="https://twitter.com/jbloit" target="_blank" rel="noopener noreferrer"><FaTwitter size="2em" /></a> </div>
      </div>

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
