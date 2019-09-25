import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_NEW_COMMENT, GET_COMMENTS_BY_SLUG } from '../graphql'
import { getSlug } from './utils'
import Loader from './Loader'

import { Button } from '..'

const Content = styled.div`
  p {
    label,
    input {
      display: block;
    }
    input {
      min-width: 275px;
      margin-top: 0.5rem;
      box-sizing: border-box;
      width: 100%;
    }
    textarea {
      resize: vertical;
      box-sizing: border-box;
      min-height: 150px;
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`

function AddComment() {
  const [addComment, { loading }] = useMutation(CREATE_NEW_COMMENT)
  const [name, setname] = useState('')
  const [content, setcontent] = useState('')

  const handelComment = () => {
    console.log(name, content)
    addComment({
      variables: { data: { name, content, slug: getSlug() } },
      refetchQueries: [{ query: GET_COMMENTS_BY_SLUG, variables: { slug: getSlug() } }],
    })
    setname('')
    setcontent('')
  }

  if (loading) return <Loader />

  return (
    <Content>
      <h5> What you think ? : </h5>
      <p>
        <label htmlFor="contact-name">
          Name
          <input
            name="name"
            value={name}
            id="contact-name"
            type="text"
            required
            onChange={e => setname(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label htmlFor="contact-message">
          Your Comment
          <textarea
            name="message"
            id="contact-message"
            value={content}
            required
            onChange={e => setcontent(e.target.value)}
          />
        </label>
      </p>
      <p>
        <Button onClick={handelComment}>Comment</Button>
      </p>
      <input type="hidden" name="form-name" value="contact-form" />
    </Content>
  )
}

export default AddComment
