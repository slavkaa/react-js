
import './App.css';

import React, {useState, useRef, useEffect} from 'react';
import UsersList   from "./components/UsersList";
import {useInitPosts} from './hooks/useUpdatePostsList'
import usersApi from "./api/usersApi";
import {useInfinitiveScroll} from "./hooks/useInfinitiveScroll";

function App() {
  const [posts, setPosts] = useInitPosts()
  const [postsListCurrentPage, setPostsListCurrentPage] = useState(1)
  const [postsTotalPages, setPostsTotalPages] = useState(0)
  const [loadMoreText, setLoadMoreText] = useState('User cards will be loaded if you see me.')

  const [isDisplayLoader, setIsDisplayLoader] = useState(true)

  const loadMorePostsReference = useRef()

  useInfinitiveScroll(
    loadMorePostsReference,
    (postsListCurrentPage < postsTotalPages),
    isDisplayLoader,
    () => {
      setIsDisplayLoader(true)
      setPostsListCurrentPage(postsListCurrentPage + 1)

      if (postsListCurrentPage + 1 === postsTotalPages) {
        setTimeout(() => {
          setLoadMoreText('All user card has been loaded.')
        }, 1000)
      }
    }
  )

  async function fetchUsersList() {
    setTimeout(async () => {
      const postsData = await usersApi.fetchUsersListData(postsListCurrentPage)
      setPostsTotalPages(postsData.total_pages)
      setPosts([...posts, ...postsData.data])
      setIsDisplayLoader(false)
    }, 1000) // just to test loader text
  }

  useEffect(() => {
    fetchUsersList()
  }, [postsListCurrentPage])

  return (
    <div className="app">
      <UsersList
        posts={posts}
        isDisplayLoader={isDisplayLoader}
        loadMoreText={loadMoreText}
        loadMorePostsReference={loadMorePostsReference}
      />
    </div>
  );
}

export default App;
