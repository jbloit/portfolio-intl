import React from 'react'
import Layout from "../layouts/layout"
import Img from "gatsby-image";
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

// see https://react-icons.netlify.com/#/icons/fa


const IndexPage = (props) => (
  <Layout location={props.location}>
  <div><p>J'accepte de nouvelles collaborations </p></div>
        

<div className="social">
<div><a href="https://github.com/jbloit" target="_blank"><FaGithub size="2em"/></a></div>
<div><a href="https://www.linkedin.com/in/julien-bloit-4081b16/" target="_blank"><FaLinkedin size="2em"/></a></div>
<div><a href="https://twitter.com/jbloit" target="_blank"><FaTwitter size="2em"/></a> </div>


<div><a href="mailto:julien.bloit@gmail.com"><FaEnvelope size="2em"/></a> </div>
</div>

  </Layout>
)

export default IndexPage

