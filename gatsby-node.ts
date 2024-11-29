const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // GraphQL query to get all existing site pages
  const result = await graphql(`
    query {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  // Handle errors from the GraphQL query
  if (result.errors) {
    console.error(result.errors);
    throw new Error('Error querying all site pages');
  }

  // Extract existing page paths from the query result
  const pagePaths = result.data.allSitePage.nodes.map(page => page.path);

  // Normalize paths by ensuring trailing slashes are consistent
  const normalizePath = (path) => {
    return path.endsWith('/') ? path : `${path}/`;
  };
  
  // Define pages to create with their paths and component paths
  const pages = [
    { path: '/experiences/', componentPath: './src/pages/experiences.tsx' },
    { path: '/projects/', componentPath: './src/pages/projects.tsx' },
    { path: '/contact/', componentPath: './src/pages/contact.tsx' },
    { path: '/404/', componentPath: './src/pages/404.tsx' },
  ];
  
  // Use a for loop to create pages conditionally
  for (const { path: pagePath, componentPath } of pages) {
    const normalizedPath = normalizePath(pagePath);
  
    // Check if the page already exists by using the normalized path
    if (!pagePaths.includes(normalizedPath)) {
      console.log(`Creating page: ${pagePath}`);  // Debug log
      try {
        // Resolve the component path dynamically using absolute path
        const resolvedComponent = path.resolve(__dirname, componentPath);
        console.log(`Resolved component path: ${resolvedComponent}`);
  
        // Create the page using createPage API
        createPage({
          path: normalizedPath,
          component: resolvedComponent,
          context: {},  // You can pass any data to the page here
        });
      } catch (error) {
        // Log an error if the component resolution fails
        console.error(`Error resolving component for path ${pagePath}:`, error);
      }
    } else {
      console.log(`Page already exists: ${pagePath}`);
    }
  }
}