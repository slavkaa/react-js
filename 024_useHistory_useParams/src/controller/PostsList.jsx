import React, {useEffect, useState} from "react"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useInitPosts} from "../hooks/useUpdatePostsList";
import postsApi from "../api/postsApi";
import PostItem from "../components/PostItem";

const PostsList = function() {

  const [posts, setPosts] = useInitPosts()
  const [isDisplayLoader, setIsDisplayLoader] = useState(true)

  async function fetchPosts() {
    setTimeout(async () => {
      setPosts(await postsApi.fetchPosts())
      setIsDisplayLoader(false)
    }, 1000) // just to test loader text
  }

  useEffect(() => {
    fetchPosts()
  }, [])

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
                      <PostItem post={post}/>
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

export default PostsList;