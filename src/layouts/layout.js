import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import 'intl';
import './layout.css'

const Layout = ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }      
            }
          }
        }
      `}
      render={data => {
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

              <div>
                {children}
              </div>

              <Footer langs={langsMenu} />
            </div>
          </IntlProvider>
        )
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
