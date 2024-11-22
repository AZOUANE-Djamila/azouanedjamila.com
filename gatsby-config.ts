/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio Azouane Djamila`,
    description: `Showcase of my experience, projects, and skills.`,
    author: `@azouanedjamila`,
    siteUrl: `https://azouanedjamila.com`,
    keywords: `Portfolio, Djamila, Experience, Projects, Web Developer, React Developer`,
    social: {
      twitter: `@azouanedjamila`,
      github: `https://github.com/azouanedjamila`,
      linkedin: `https://www.linkedin.com/in/azouanedjamila`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,        // For managing the head tag and SEO
    `gatsby-plugin-image`,               // For optimized image loading
    `gatsby-transformer-sharp`,          // Image transformations like resizing
    `gatsby-plugin-sharp`,               // For optimized image handling
    `gatsby-transformer-remark`,         // Markdown file processing (content)
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`, // Path to your projects folder
      },
    },
    `gatsby-plugin-sass`,                // Support for SASS/SCSS styles
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experiences`,
        path: `${__dirname}/src/content/experiences`, // Path to your experiences folder
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,  // Setup PWA capabilities and site metadata
      options: {
        name: `Portfolio Azouane Djamila`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Path to your site's icon
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(({ node }) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `weekly`,
              priority: 0.7,
            };
          }),
      },
    },    
  ],
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
    DETECT_NODE_MUTATIONS: true,
  },
}
