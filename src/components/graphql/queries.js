import gql from 'graphql-tag'

export const GET_COMMENTS_BY_SLUG = gql`
  query commentsBySlug($slug: String!) {
    commentsBySlug(slug: $slug) {
      data {
        name
        content
      }
    }
  }
`
