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


          {/* <p>The tomato (see pronunciation) is the edible, often red berry-type fruit of the nightshade Solanum lycopersicum, commonly known as a tomato plant. The tomato is consumed in diverse ways, including raw, as an ingredient in many dishes, sauces, salads, and drinks.</p> */}

          <img src={myFace} alt="Me" />


          <p>Je suis développeur audio, spécialisé en applications musicales. Je travaille sur des supports tangibles ou virtuels, des installations ou des applications mobiles.</p>

          <p>J'ai travaillé pendant près de dix ans à l'<a href="https://www.ircam.fr" target="_blank" rel="noopener noreferrer">Ircam</a>, passant du développement web dans le studio hypermédia fondé par Bernard Stiegler, à la recherche en intéraction musicale temps réel. J'y ai obtenu un doctorat, dont la thèse portait sur l'apprentissage statistique appliqué à la reconnaissance de morphologies sonores.</p>

          <p> Je suis un travailleur indépendant basé à Bruxelles. J'ai de l'expérience aussi bien avec les <Link to="fr/petiteFabrique">institutions Françaises</Link>, les <Link to="fr/humtap">startups Californiennes</Link> et les <Link to="fr/gd_sansTitre">artistes Marseillais</Link>. Je suis toujours prêt à <Link to="fr/contact">discuter de votre projet</Link> si vous pensez que je peux vous aider.</p>

          <p>J'anime un <a href="https://www.spoken.brussels/robotics" target="_blank" rel="noopener noreferrer">atelier hebdomadaire de robotique pour enfants.</a></p>
          <p>Je joue de la batterie.</p>

  
         <div className="skills">
            <div className="domain">Développement Mobile </div> <div className="skillset">Swift, Objective-C, Kotlin, CoreAudio, AudioKit, Link API</div>
            <div className="domain">Lutherie numérique / sound design </div> <div className="skillset">Max/MSP, SuperCollider, Ableton Live, Reaper, Audacity, Bela, audio sur RaspberryPi, Jack</div>
            <div className="domain">Langages génériques </div> <div className="skillset">Python, C++, Java</div>
            <div className="domain">Méthodes agiles</div> <div className="skillset">Scrum, Kanban, Jira, Trello</div>
            <div className="domain">Musique</div> <div className="skillset">Batteur +30ans d'expérience, Harmonie 4 voies (notions)</div>
         </div>

         {/* <h3>Science</h3>
         <div className="skills">
            <div className="domain">Machine Learning</div> <div className="skillset">Hidden Markov Models, Viterbi decoding</div>
            <div className="domain">Langages génériques </div> <div className="skillset">Python, C++, Java</div>
         </div> */}



        </div>

      </div>

    </Layout>
  )
}

export default IndexPage
