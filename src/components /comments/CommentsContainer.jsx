import React from 'react'
import CommentForm from './CommentForm'

const CommentsContainer = ({className}) => {
    return (
        <div className={`${className}`}>
          <CommentForm />
        </div>
    )
}

export default CommentsContainer