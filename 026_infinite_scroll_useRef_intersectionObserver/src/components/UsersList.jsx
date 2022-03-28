import React from "react"
import ListItem from "./ListItem"
import {CSSTransition, TransitionGroup} from "react-transition-group";

const UsersList = function({posts, isDisplayLoader, loadMorePostsReference, loadMoreText}) {

  if (posts.length === 0) {
    if (isDisplayLoader) {
      return <div className="base-post">Users loading ...</div>
    } else {
      return <div className="base-post">There are no User cards</div>
    }
  } else {
    return (
      <div className="base-list">
        {
          <ul>
            <TransitionGroup>
              {
                posts.map( post =>
                {
                  return(
                    <CSSTransition
                      key={post.id}
                      timeout={500}
                      classNames="item"
                    >
                      <ListItem post={post}/>
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </ul>
        }
        { isDisplayLoader ? <div className="base-post">Users loading ...</div> : '' }
        <div ref={loadMorePostsReference} style={{height: 20, background: '#eee'}}>
          {loadMoreText}
        </div>
      </div>
    )
  }
}

export default UsersList;