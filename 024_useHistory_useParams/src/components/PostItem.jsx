import React from "react";
import {useNavigate} from "react-router-dom";
import DefaultButton from "./UI/buttons/DefaultButton";

const PostItem = function({...props}) {
  console.log(props.post)

  const navigate = useNavigate()

  return (
      <li className="base-post">
        <div className="post-right-sidebar">
          <div className="title">{props.post.title}</div>
          <div className="text">{props.post.body}</div>
        </div>
        <DefaultButton onClick={() => {navigate('/post/' + props.post.id) }} className="btn-info">Go to details</DefaultButton>
      </li>
  )
}
export default PostItem;
