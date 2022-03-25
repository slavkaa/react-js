import React from "react"
import ListItem from "./ListItem"
import {CSSTransition, TransitionGroup} from "react-transition-group";

const UsersList = function({posts, isDisplayLoader}) {

  if (true === isDisplayLoader) {
    return (<div className="base-post">Posts loading ...</div>)
  } else if (posts.length === 0) {
    return (<div className="base-post">There are no posts</div>)
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
      </div>
    )
  }
}

export default UsersList;