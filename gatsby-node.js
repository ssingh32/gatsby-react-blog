const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const { createPages } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');

    const res = await graphql(`query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                    slug
              }
            }
          }
        }
      }`);

      res.data.allMarkdownRemark.edges.forEach((edge) => {
            createPages({
                component: blogTemplate,
                path: `/blog/${edge.nodes.fields.slug}`,
                context: {
                    slug : edge.nodes.fields.slug
                }
            })
      })
}