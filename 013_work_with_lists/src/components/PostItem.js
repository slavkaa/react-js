import React, {useState} from "react";

const PostItem = function(props) {
  return (
    <li className="base-post">
      <img src={props.post.image} />
      <div className="post-right-sidebar">
        <span className="badge">{props.post.badge}</span>
        <span className="date">{props.post.date}</span>
        <div className="title">{props.post.title}</div>
        <div className="text">{props.post.text}</div>
      </div>
    </li>
  )
}
export default PostItem;
