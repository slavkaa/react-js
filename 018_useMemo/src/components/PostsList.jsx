import React from "react"
import PostItem from "./PostItem"

const PostsList = function({posts, removePost}) {
  return (
    <div className="base-list">
      <ul>
        {
          (posts.length === 0)
            ? <div className="base-post">There are no posts</div>
            : posts.map(post =>
              <PostItem removePost={removePost} post={post} key={post.id}/>
            )
        }
      </ul>
    </div>
  )
}

export default PostsList;