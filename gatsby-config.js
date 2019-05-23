const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Julien Bloit`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: true,
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      // a "source" plugin: bring data into gatsby's data system

      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },



    // a "transformer" plugin: transform raw data brought by source plugins
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },


    // Image 
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img/`,
      },
    },



  ],
}
