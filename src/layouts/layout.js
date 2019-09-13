import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import SelectLanguage from '../components/SelectLanguage'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, Link, graphql } from "gatsby"
import styles from "./layout.module.css";
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';
import enData from 'react-intl/locale-data/en';
import frData from 'react-intl/locale-data/fr';
import en from '../data/messages/en';
import fr from '../data/messages/fr';
import 'intl';

//import './layout.css';

const messages = { en, fr };
addLocaleData([...enData, ...frData]);

const Layout = (props) => {

  // if (location !== undefined) 

  const { children, location } = props;
  if (location !== undefined) {
    const url = location.pathname;
    const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));


    return (
      <IntlProvider
        locale={langKey}
        messages={messages[langKey]}
      >
        <div>
          <Helmet
            title="Portfolio of Julien Bloit"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />

          <header>
            <Link to={`/`} ><h1 className={styles.title}>{props.data.site.siteMetadata.title} </h1></Link>
            <input type="checkbox" id="navToggle" className={styles.navToggle} />
            <nav>
              <ul>
                <li><Link to={`/` + langKey + `/projects/`}><FormattedMessage id="nav_projects" /></Link></li>
                <li><Link to={`/` + langKey + `/lab/`}><FormattedMessage id='nav_lab' /></Link></li>
                <li> <Link to={`/` + langKey + `/about/`}><FormattedMessage id='nav_about' /></Link></li>
                <li><Link to={`/` + langKey + `/contact/`}><FormattedMessage id='nav_contact' /></Link></li>
                <li><SelectLanguage langs={langsMenu} /></li>
              </ul>

            </nav>

            <label for="navToggle" className={styles.navToggleLabel}>
              <span></span>
            </label>
          </header>


          <div className="content">
            <div className={styles.headerOffset} />
            {children}

          </div>
          <Footer langs={langsMenu} />

        </div>
      </IntlProvider>
    )
  } else {
    return null
  }
}




Layout.propTypes = {
  children: PropTypes.func,
}

export default props => (
  <StaticQuery
    query={graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }      
      }
    }
  }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);
