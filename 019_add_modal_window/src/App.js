import React, {useState, useMemo} from 'react';
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
import PostsFilter from "./components/PostsFilter";
import DefaultModalWindow from "./components/UI/modal_windows/DefaultModalWindow";
import DefaultButton from "./components/UI/buttons/DefaultButton";

import './App.css';
import PostsSearch from "./components/PostsSearch";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Implement a custom driver for Laravel Socialite",
      badge: "Tutorial",
      date: "March 11th, 2022",
      image: "tumbnails/Kirschbaumsocialite.jpg",
      text: "Learn how to implement a custom driver in Laravel Socialite."
    },{
      id: 2,
      title: "Cache Chunks of Your Blade Markup With Ease",
      badge: "Packages",
      date: "March 10th, 2022",
      image: "tumbnails/laravel-blade-cache-featured.png",
      text: "Laravel Blade Cache Directive is a package by Ryan Chandler that allows you to cache chunks of Blade files."
    },{
      id: 3,
      title: "Laravel 9.4 Released",
      badge: "News",
      date: "March 9th, 2022",
      image: "tumbnails/laravel9-1646792144.jpg",
      text: "The Laravel team released 9.4 with the ability to override CSRF cookies, a Str::lcfirst() method, an optional retry mechanism for queued mailables, and more."
    },{
      id: 4,
      title: "Run ray(), dump(), and dd() From Any PHP Script",
      badge: "Developer tools",
      date: "March 8th, 2022",
      image: "tumbnails/global-ray-featured.png",
      text: "Global Ray is a package that enables ray(), dump()s, and dd() from any PHP script."
    },
  ])

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
