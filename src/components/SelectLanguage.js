import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {

  const links = props.langs.map(lang =>

    <div>
    <Link to={lang.link} key={lang.langKey}>
     
        {lang.langKey}
    
    </Link> 
    </div>
  );

  return (

    <div>

      <ul>
        {links}
      </ul>

    </div>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
