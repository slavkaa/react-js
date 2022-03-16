import React from "react"
import PostItem from "./PostItem"

const PostsList = function(props) {
  return (
    <div className="base-list">
      <ul>
        {
          (props.posts.length === 0)
            ? <div className="base-post">There are no posts</div>
            : props.posts.map(post =>
              <PostItem removePost={props.removePost} post={post} key={post.id}/>
            )
        }
      </ul>
    </div>
  )
}

export default PostsList;