import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import postsApi from "../api/postsApi";
import PostComments from "../components/PostComments";

const PostData = function() {

  const urlParams = useParams()
  const [post, setPost] = useState()

  async function fetchPost() {
    setPost(await postsApi.getById(urlParams.id))
  }

  useEffect(() => {
    fetchPost()
  }, [])

  if (post) {
    return (
      <div className="base-post">
        <div className="post-right-sidebar">
          <h1 className="title">{post.title}</h1>
          <div className="text">{post.body}</div>
        </div>
        <PostComments postId={post.id} />
      </div>
    )
  } else {
    return (
      <div>Post not found</div>
      )
  }
}
export default PostData;