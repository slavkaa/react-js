import React, {useState, useRef} from "react"
import PostItem from "./PostItem"

const PostsList = function(props) {
  return (
    <div className="base-list">
      <ul>
        {
          props.posts.map(post =>
            <PostItem post={post} key={post.id}/>
          )
        }
      </ul>
    </div>
  )
}

export default PostsList;