import React, {useState} from "react";
import DefaultButton from "./UI/buttons/DefaultButton";

const PostItem = function({removePost, ...props}) {
  return (
      <li className="base-post">
        <img src={props.post.avatar} />
        <div className="post-right-sidebar">
          <span className="badge">{props.post.email}</span>
          <div className="title">{props.post.first_name} {props.post.last_name}</div>
        </div>
        <DefaultButton className="btn-remove" onClick={() => removePost(props.post)}>Remove post </DefaultButton>
      </li>
  )
}
export default PostItem;
