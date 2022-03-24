
import './App.css';

import React, {useState, useMemo, useEffect} from 'react';

import PostsList   from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
import PostsFilter from "./components/PostsFilter";
import PostsSearch from "./components/PostsSearch";

import DefaultModalWindow from "./components/UI/modal_windows/DefaultModalWindow";
import DefaultButton      from "./components/UI/buttons/DefaultButton";
import DefaultPaginator   from "./components/UI/paginator/DefaultPaginator";

import {useInitPosts} from './hooks/useUpdatePostsList'

import usersApi from "./api/usersApi";

function App() {
  const [posts, setPosts] = useInitPosts()
  const [postsListCurrentPage, setPostsListCurrentPage] = useState(1)
  const [postsTotalPages, setPostsTotalPages] = useState(0)

  const [filter, setFilter] = useState('')
  const [searchString, setSearchString] = useState('')

  const [isDisplayAddPostModal, setIsDisplayAddPostModal] = useState(false)
  const [isDisplayLoader, setIsDisplayLoader] = useState(true)

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  async function fetchPosts() {
    setTimeout(async () => {
      const postsData = await usersApi.fetchPostsData(postsListCurrentPage)
      setPostsTotalPages(postsData.total_pages)
      setPosts(postsData.data)
      setIsDisplayLoader(false)
    }, 1000) // just to test loader text
  }

  useEffect(() => {
    fetchPosts()
  }, [postsListCurrentPage])

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

  const usersListPaginatorOnChange = (pageNumber) => {
    console.log('usersListPaginatorOnChange')
    setIsDisplayLoader(true)
    setPostsListCurrentPage(pageNumber)
  }

  return (
    <div className="app">

      <DefaultButton onClick={() => { fetchPosts() }}>Fetch Posts</DefaultButton>

      <DefaultModalWindow visible={isDisplayAddPostModal} setVisible={setIsDisplayAddPostModal}>
        <AddPostForm addPost={addPost}/>
      </DefaultModalWindow>

      <PostsFilter value={filter} updateFilterValue={updateFilterValue}/>
      <PostsSearch updateSearchString={updateSearchString} />

      <DefaultPaginator
        currentPage={postsListCurrentPage}
        totalPages={postsTotalPages}
        showNearestPages={2}
        setPage={usersListPaginatorOnChange}
        isDisabled={isDisplayLoader}
      />

      <PostsList posts={postSearchResults} removePost={removePost} isDisplayLoader={isDisplayLoader}/>

      <DefaultPaginator
        currentPage={postsListCurrentPage}
        totalPages={postsTotalPages}
        showNearestPages={2}
        setPage={usersListPaginatorOnChange}
        isDisabled={isDisplayLoader}
      />

      <DefaultButton onClick={() => { setIsDisplayAddPostModal(true) }}>Add Post</DefaultButton>
    </div>
  );
}

export default App;
