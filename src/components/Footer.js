import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import styles from "./footer.module.css";

const Footer = (props) => (
  <div className={styles.footer}>
      <SelectLanguage langs={props.langs} />
  </div>
)

export default Footer;
