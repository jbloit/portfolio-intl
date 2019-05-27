import React from 'react'
import Link from 'gatsby-link'

import styles from "./footer.module.css";

const Footer = (props) => (
  <div className={styles.footer}>

      <p>Built with <a href="https://www.gatsbyjs.org/">Gatsby.</a> <br/> Get the source <a href="https://github.com/jbloit/portfolio-intl">here.</a></p>

  </div>
)

export default Footer;
