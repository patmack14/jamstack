import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

interface BlogPostProps {
  data: {
    butterPost: {
      date: string
      body: string
      title: string
    }
  }
}

export default function Template({ data }: BlogPostProps) {
  const { title, date, body } = data.butterPost

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="font-bold mb-8 text-4xl">{title}</h1>
        <h2 className="font-semibold mb-8 text-base">Published on {date}</h2>
        <div className="text-xl font-serif leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    butterPost(slug: { eq: $slug }) {
      title
      body
      date
      meta_description
      status
      tags {
        name
      }
    }
  }
`