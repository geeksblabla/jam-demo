import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '../graphql'
import AddComment from './AddComment'
import Comments from './Comments'

const Index = () => (
  <ApolloProvider client={client}>
    <div>
      <Comments />
      <AddComment />
    </div>
  </ApolloProvider>
)

export default Index
