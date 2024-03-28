import React, { useEffect, useState } from "react";
import { getCommentsData } from "../../data/comments";

import CommentForm from "./CommentForm";

const CommentsContainer = ({ className }) => {
const [comments, setcomments] = useState([]);
  
console.log(comments);

useEffect (() => {

  (async() => {
    const commentData = await getCommentsData();
  })()
}, [])

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: "10",
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: "it was a nice post, Thank you!",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T17:22:05.092+0000",
    };
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
    </div>
  );
};

export default CommentsContainer;
