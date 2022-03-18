
import './App.css';

import React, {useState, useMemo, useEffect} from 'react';
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
import PostsFilter from "./components/PostsFilter";
import DefaultModalWindow from "./components/UI/modal_windows/DefaultModalWindow";
import DefaultButton from "./components/UI/buttons/DefaultButton";
import PostsSearch from "./components/PostsSearch";
import {useInitPosts} from './hooks/useUpdatePostsList'
import postsApi from "./api/postsApi";

function App() {
  const [posts, setPosts] = useInitPosts()
  const [filter, setFilter] = useState('')
  const [searchString, setSearchString] = useState('')
  const [isDisplayAddPostModal, setIsDisplayAddPostModal] = useState(false)
  const [isDisplayLoader, setIsDisplayLoader] = useState(true)

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  async function fetchPosts() {
    setTimeout(async () => {
      setPosts(await postsApi.fetchPosts())
      setIsDisplayLoader(false)
    }, 1000) // just to test loader text
  }

  useEffect(() => {
    console.log('USE EFFECT')
    fetchPosts()
  }, [])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const updatePostsSearchResults = () =>
  {
    let postsList = posts;

    if (null !== filter) {
      postsList = [...posts]
        .sort((a, b) => {
            return a[filter].toString().localeCompare( b[filter].toString() )
          }
        )
    }

    if ('' !== searchString) {
      postsList = [...postsList]
        .filter((post) =>
          post.email.toLowerCase().includes(searchString.toLowerCase())
        )
    }

    return postsList
  }

  const updateFilterValue = (value) => {
    setFilter(value)
  }

  const updateSearchString = (value) => {
    setSearchString(value)
  }

  const postSearchResults = useMemo(() => {
    if ('' !== filter || '' !== searchString) {
      return updatePostsSearchResults()
    }

    return posts
  }, [filter, searchString, posts])

  return (
    <div className="app">
      <DefaultButton onClick={() => { fetchPosts() }}>Fetch Posts</DefaultButton>
      <DefaultModalWindow visible={isDisplayAddPostModal} setVisible={setIsDisplayAddPostModal}>
        <AddPostForm addPost={addPost}/>
      </DefaultModalWindow>
      <PostsFilter value={filter} updateFilterValue={updateFilterValue}/>
      <PostsSearch updateSearchString={updateSearchString} />
      <PostsList posts={postSearchResults} removePost={removePost} isDisplayLoader={isDisplayLoader}/>
      <DefaultButton onClick={() => { setIsDisplayAddPostModal(true) }}>Add Post</DefaultButton>
    </div>
  );
}

export default App;
