import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_COMMENTS_BY_SLUG } from '../graphql'
import Comment from './Comment'
import Loader from './Loader'
import { getSlug } from './utils'

const Comments = () => {
  const { loading, data } = useQuery(GET_COMMENTS_BY_SLUG, {
    variables: { slug: getSlug() },
  })
  if (loading) return <Loader />

  return (
    <div>
      <hr />
      <h4
        css={`
          text-align: center;
        `}
      >
        Comments
      </h4>
      <hr />
      {data && data.commentsBySlug.data.map((c, i) => <Comment {...c} key={i} />)}
    </div>
  )
}

export default Comments
