import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

interface BlogsProps {
  data: {
    allButterPost: {
      edges: [
        {
          node: {
            id: string
            slug: string
            title: string
            meta_description: string
          }
        }
      ]
    }
  }
}

const BlogsPage = ({ data }: BlogsProps) => {
  const posts = data.allButterPost.edges

  return (
    <Layout>
      <div className="flex flex-wrap -mx-4">
        {posts.map(({ node }) => {
          return (
            <div key={node.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4">
              <Link key={node.id} to={`/blogs/${node.slug}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                  <div className="p-8">
                    <div className="font-bold text-xl mb-4">{node.title}</div>
                    <p className="text-gray-700 text-sm">{node.meta_description}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogsPage

export const pageQuery = graphql`
  query {
    allButterPost {
      edges {
        node {
          id
          slug
          title
          status
          meta_description
        }
      }
    }
  }
`