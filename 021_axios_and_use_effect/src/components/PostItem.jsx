import React, {useState} from "react";
import DefaultButton from "./UI/buttons/DefaultButton";

const PostItem = function({removePost, ...props}) {
  console.log(props.post)
  return (
      <li className="base-post">
        <div className="post-right-sidebar">
          <div className="title">{props.post.title}</div>
          <div className="text">{props.post.body}</div>
        </div>
        <DefaultButton className="btn-remove" onClick={() => removePost(props.post)}>Remove post </DefaultButton>
      </li>
  )
}
export default PostItem;
