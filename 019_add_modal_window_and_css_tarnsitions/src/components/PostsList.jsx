import React from "react"
import PostItem from "./PostItem"
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostsList = function({posts, removePost}) {
  return (
    <div className="base-list">
        <ul>
          <TransitionGroup>
          {
            (posts.length === 0)
              ? <div className="base-post">There are no posts</div>
              : posts.map(post =>
                {
                  return(
                    <CSSTransition
                      key={post.id}
                      timeout={500}
                      classNames="item"
                    >
                      <PostItem removePost={removePost} post={post}/>
                    </CSSTransition>
                    )
                }
              )
          }
          </TransitionGroup>
        </ul>
    </div>
  )
}

export default PostsList;