import React, {useState} from "react";
import DefaultButton from "./UI/buttons/DefaultButton";

const PostItem = function({removePost, ...props}) {
  return (
    <li className="base-post">
      <img src={props.post.image} />
      <div className="post-right-sidebar">
        <span className="badge">{props.post.badge}</span>
        <span className="date">{props.post.date}</span>
        <div className="title">{props.post.title}</div>
        <div className="text">{props.post.text}</div>
      </div>
      <DefaultButton className="btn-remove" onClick={() => removePost(props.post)}>Remove post </DefaultButton>
    </li>
  )
}
export default PostItem;
