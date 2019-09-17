import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout"
import myFace from "../img/about/me_2019_square.png"
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const IndexPage = (props) => (
  <Layout location={props.location}>

    <div className="plain">
      <div className="about">


        {/* <p>The tomato (see pronunciation) is the edible, often red berry-type fruit of the nightshade Solanum lycopersicum, commonly known as a tomato plant. The tomato is consumed in diverse ways, including raw, as an ingredient in many dishes, sauces, salads, and drinks.</p> */}

        <img src={myFace} alt="Me" />


        <p>The tomato (see pronunciation) is the edible, often red berry-type fruit of the nightshade Solanum lycopersicum, commonly known as a tomato plant. The tomato is consumed in diverse ways, including raw, as an ingredient in many dishes, sauces, salads, and drinks.</p>

        <div className="social">
        <div><a href="https://github.com/jbloit" target="_blank"><FaGithub size="2em" /></a></div>
        <div><a href="https://www.linkedin.com/in/julien-bloit-4081b16/" target="_blank"><FaLinkedin size="2em" /></a></div>
        <div><a href="https://twitter.com/jbloit" target="_blank"><FaTwitter size="2em" /></a> </div>
      </div>

      </div>

    </div>

  </Layout>
)

export default IndexPage
