import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from "./selectLanguage.module.css";

const SelectLanguage = (props) => {

  const links = props.langs.map(lang =>

    <div>
    <Link to={lang.link} key={lang.langKey}>
        {lang.langKey}
    </Link> 
    </div>
  );

  return (

    <div className={styles.selectLanguage}>

      <ul>
        <span>
        {links}
        </span>
      </ul>

    </div>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
