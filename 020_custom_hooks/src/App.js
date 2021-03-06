
import './App.css';

import React, {useState, useMemo} from 'react';
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
import PostsFilter from "./components/PostsFilter";
import DefaultModalWindow from "./components/UI/modal_windows/DefaultModalWindow";
import DefaultButton from "./components/UI/buttons/DefaultButton";
import PostsSearch from "./components/PostsSearch";
import {useInitPosts} from './hooks/useUpdatePostsList'

function App() {
  const [posts, setPosts] = useInitPosts()
  const [filter, setFilter] = useState('')
  const [searchString, setSearchString] = useState('')
  const [isDisplayAddPostModal, setIsDisplayAddPostModal] = useState(false)

  const addPost = (post) => {
    setPosts([...posts, post])
  }

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
          post.title.toLowerCase().includes(searchString.toLowerCase())
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
      <DefaultModalWindow visible={isDisplayAddPostModal} setVisible={setIsDisplayAddPostModal}>
        <AddPostForm addPost={addPost}/>
      </DefaultModalWindow>
      <PostsFilter value={filter} updateFilterValue={updateFilterValue}/>
      <PostsSearch updateSearchString={updateSearchString} />
      <PostsList posts={postSearchResults} removePost={removePost}/>
      <DefaultButton onClick={() => { setIsDisplayAddPostModal(true) }}>Add Post</DefaultButton>
    </div>
  );
}

export default App;
