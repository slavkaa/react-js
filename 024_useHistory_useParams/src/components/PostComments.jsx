import React, {useEffect, useState} from "react"
import postsApi from "../api/postsApi";

const PostComments = function({postId}) {

  const [comments, setComments] = useState([])

  async function fetchComments() {
    setComments(await postsApi.fetchComments(postId))
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className="base-list">
      <h2><br/>Comments:<br/><br/></h2>
      <ul>
        {
          (comments.length === 0)
            ? <div className="base-post">There are no comments</div>
            : comments.map(comment => {
                return (
                  <div  className="base-post" key={comment.id}>
                    "{comment.body}" from {comment.name} ({comment.email})
                  </div>
                )
              }
            )
        }
      </ul>
    </div>
  )
}

export default PostComments;
