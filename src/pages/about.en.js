import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/layout"
import myFace from "../img/about/me_2019_square.png"
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';


const IndexPage = (props) => {

  return (
    <Layout location={props.location}>

      <div className="plain">
        <div className="about">



          <img src={myFace} alt="Me" />

          <p>I'm an audio developer, with a focus on musical applications. I work either on tangible or virtual supports, such as installations or mobile apps.</p>

          <p>I worked for ten years at <a href="https://www.ircam.fr" target="_blank" rel="noopener noreferrer">Ircam</a> in Paris, first as a web developer for the Hypermedia studio, then as a researcher in real time interactive music applications. I earned my Ph.D there, working on machine learning algorithms for recognizing specific sound morphologies in audio recordings. </p>

          <p> I am now an freelancer based in Brussels. I have experience working with  <Link to="en/petiteFabrique">French instituitons</Link>, <Link to="en/humtap">Silicon Valley startups</Link>, or with <Link to="en/gd_sansTitre">artists from Marseille</Link>. I'm always ready to <Link to="en/contact">discuss your project</Link> if you think I might help in any way.</p>
          <p>I run a weekly  <a href="https://www.spoken.brussels/robotics" target="_blank" rel="noopener noreferrer">robotics class</a> for kids</p>
          <p>I play the drums.</p>

       

  
         <div className="skills">
            <div className="domain">Mobile dev </div> <div className="skillset">Swift, Objective-C, Kotlin, CoreAudio, AudioKit, Link API</div>
            <div className="domain">Digital instruments / sound design </div> <div className="skillset">Max/MSP, SuperCollider, Ableton Live, Reaper, Audacity, Bela, audio sur RaspberryPi, Jack</div>
            <div className="domain">Cross platform languages </div> <div className="skillset">Python, C++, Java</div>
            <div className="domain">Agile Methodolgy</div> <div className="skillset">Scrum, Kanban, Jira, Trello</div>
            <div className="domain">Music</div> <div className="skillset">Drummer 30+ years of practice, Four parts harmony (notions)</div>
         </div>

         {/* <h3>Science</h3>
         <div className="skills">
            <div className="domain">Machine Learning</div> <div className="skillset">Hidden Markov Models, Viterbi decoding</div>
            <div className="domain">Langages génériques </div> <div className="skillset">Python, C++, Java</div>
         </div> */}


          <div className="social">
            <div><a href="https://github.com/jbloit" target="_blank" rel="noopener noreferrer"><FaGithub size="2em" /></a></div>
            <div><a href="https://www.linkedin.com/in/julien-bloit-4081b16/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em" /></a></div>
            <div><a href="https://twitter.com/jbloit" target="_blank" rel="noopener noreferrer"><FaTwitter size="2em" /></a> </div>
          </div>

        </div>

      </div>

    </Layout>
  )
}

export default IndexPage
