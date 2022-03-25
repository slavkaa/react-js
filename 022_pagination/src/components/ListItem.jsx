import React from "react";
import DefaultButton from "./UI/buttons/DefaultButton";

const ListItem = function({removePost, ...props}) {
  return (
      <li className="user-card">
        <img src={props.post.avatar} />
        <div className="card-right-sidebar">
          <span className="data">{props.post.email} <br/> {props.post.first_name} {props.post.last_name}</span>
        </div>
      </li>
  )
}
export default ListItem;
