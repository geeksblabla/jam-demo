import gql from 'graphql-tag'

export const CREATE_NEW_COMMENT = gql`
  mutation createComment($data: CommentInput!) {
    createComment(data: $data) {
      _id
    }
  }
`
