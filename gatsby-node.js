const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const template = path.resolve(`src/templates/blog-post.tsx`)

  return graphql(`
    {
      allButterPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allButterPost.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/${node.slug}`,
        component: template,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}