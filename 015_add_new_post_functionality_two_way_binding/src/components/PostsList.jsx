import React, {useState, useRef} from "react"
import PostItem from "./PostItem"
import AddPostForm from "./AddPostForm";

const PostsList = function(props) {
  return (
    <div className="base-list">
      <ul>
        {
          props.posts.map(post =>
            <PostItem removePost={props.removePost} post={post} key={post.id}/>
          )
        }
      </ul>
    </div>
  )
}

export default PostsList;