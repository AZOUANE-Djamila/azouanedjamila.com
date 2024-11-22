const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query all pages created by Gatsby
  const result = await graphql(`
    query {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  // Check for errors in the query result
  if (result.errors) {
    console.error(result.errors);
    throw new Error("Error querying all site pages");
  }

  // Create custom pages if they don't exist already
  const pagePaths = result.data.allSitePage.nodes.map((page) => page.path);

  // Create experiences page if not already created
  if (!pagePaths.includes("/experiences/")) {
    createPage({
      path: "/experiences/",
      component: require.resolve("./src/pages/experiences.tsx"), // Make sure this path is correct
      context: {},
    });
  }

  // Create other pages similarly
  if (!pagePaths.includes("/projects/")) {
    createPage({
      path: "/projects/",
      component: require.resolve("./src/pages/projects.tsx"), // Ensure the path is correct
      context: {},
    });
  }

  if (!pagePaths.includes("/contact/")) {
    createPage({
      path: "/contact/",
      component: require.resolve("./src/pages/contact.tsx"), // Ensure the path is correct
      context: {},
    });
  }

  // Handle 404 page
  if (!pagePaths.includes("/404/")) {
    createPage({
      path: "/404/",
      component: require.resolve("./src/pages/404.tsx"),
      context: {},
    });
  }
};
