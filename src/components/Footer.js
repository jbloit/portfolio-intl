import React from 'react'
import Link from 'gatsby-link'
import styles from "./footer.module.css";
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = (props) => (

<div className={styles.footer}>
<div className="social">
<div><a href="https://github.com/jbloit" target="_blank" rel="noopener noreferrer"><FaGithub size="2em"/></a></div>
<div><a href="https://www.linkedin.com/in/julien-bloit-4081b16/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em"/></a></div>
<div><a href="https://twitter.com/jbloit" target="_blank" rel="noopener noreferrer"><FaTwitter size="2em"/></a> </div>
<div><a href="mailto:julien.bloit@gmail.com"><FaEnvelope size="2em"/></a> </div>
</div>
</div>
)

export default Footer;
