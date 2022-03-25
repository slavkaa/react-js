
import './App.css';

import React, {useState, useMemo, useEffect} from 'react';
import UsersList   from "./components/UsersList";
import DefaultPaginator   from "./components/UI/paginator/DefaultPaginator";
import {useInitPosts} from './hooks/useUpdatePostsList'
import usersApi from "./api/usersApi";

function App() {
  const [posts, setPosts] = useInitPosts()
  const [postsListCurrentPage, setPostsListCurrentPage] = useState(1)
  const [postsTotalPages, setPostsTotalPages] = useState(0)

  const [filter, setFilter] = useState('')
  const [searchString, setSearchString] = useState('')

  const [isDisplayLoader, setIsDisplayLoader] = useState(true)

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  async function fetchUsersList() {
    setTimeout(async () => {
      const postsData = await usersApi.fetchUsersListData(postsListCurrentPage)
      setPostsTotalPages(postsData.total_pages)
      setPosts(postsData.data)
      setIsDisplayLoader(false)
    }, 1000) // just to test loader text
  }

  useEffect(() => {
    fetchUsersList()
  }, [postsListCurrentPage])

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

  const usersListPaginatorOnChange = (pageNumber) => {
    console.log('usersListPaginatorOnChange')
    setIsDisplayLoader(true)
    setPostsListCurrentPage(pageNumber)
  }

  return (
    <div className="app">

      <DefaultPaginator
        currentPage={postsListCurrentPage}
        totalPages={postsTotalPages}
        showNearestPages={2}
        setPage={usersListPaginatorOnChange}
        isDisabled={isDisplayLoader}
      />

      <UsersList posts={posts} isDisplayLoader={isDisplayLoader}/>

      <DefaultPaginator
        currentPage={postsListCurrentPage}
        totalPages={postsTotalPages}
        showNearestPages={2}
        setPage={usersListPaginatorOnChange}
        isDisabled={isDisplayLoader}
      />

    </div>
  );
}

export default App;
