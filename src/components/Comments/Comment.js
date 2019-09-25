import React from 'react'

const Comment = ({ name, content }) => (
  <div>
    <h5>{name} : </h5>
    <p> {content} </p>
  </div>
)

export default Comment
