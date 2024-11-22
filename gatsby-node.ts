// In gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  result.data.allSitePage.nodes.forEach((page) => {
    if (page.path === '/404/') {
      createPage({
        path: '/404/',
        component: require.resolve('./src/pages/404.tsx'),
      });
    }
  });
};
