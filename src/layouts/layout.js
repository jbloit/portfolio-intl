import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, Link, graphql } from "gatsby"
import styles from "./layout.module.css";
import { IntlProvider, FormattedMessage } from 'react-intl';
import 'intl';

//import './layout.css';


const Layout = ({ children, location, i18nMessages }) => {
  return (
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
      render={data => {

        if (location !== undefined) {
          const url = location.pathname;
          const { langs, defaultLangKey } = data.site.siteMetadata.languages;
          const langKey = getCurrentLangKey(langs, defaultLangKey, url);
          const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
          const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))

          return (
            <IntlProvider
              locale={langKey}
              messages={i18nMessages}
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

                  <Link to={`/`} ><h1 className={styles.title}>{data.site.siteMetadata.title} </h1></Link>
                  <input type="checkbox" id="navToggle" className={styles.navToggle} />
                  <nav>
                    <ul>
                      <li><Link to={`/` + langKey + `/projects/`}><FormattedMessage id='nav_projects'/></Link></li>
                      <li><Link to={`/` + langKey + `/lab/`}><FormattedMessage id='nav_lab'/></Link></li>
                      <li> <Link to={`/` + langKey + `/about/`}><FormattedMessage id='nav_about'/></Link></li>
                      <li><Link to={`/` + langKey + `/contact/`}><FormattedMessage id='nav_contact'/></Link></li>
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

        }



      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
