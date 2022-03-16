import React, {useState} from 'react';
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
import PostsFilter from "./components/PostsFilter";

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

  const [filter, setFilter] = useState(null)
  const [searchString, setSearchString] = useState('')
  const [postSearchResults, setPostsSearchResults] = useState(posts)

  const addPost = (post) => {
    setPostsSearchResults([...posts, searchString])
    addPost([...posts, post])
  }

  const removePost = (post) => {
    setPostsSearchResults(postSearchResults.filter(p => p.id !== post.id))
  }

  const updatePostsList = (filterValue = null, searchStringValue = null) =>
  {
    filterValue = updateFilterValue(filterValue)
    searchStringValue = updateSearchString(searchStringValue)

    if (null !== filterValue) {
      setPostsSearchResults(
        [...posts]
          .sort((a, b) => {
            return a[filterValue].toString().localeCompare( b[filterValue].toString() )
           }
        )
      )
    }

    if ('' !== searchStringValue) {
      setPostsSearchResults(
        [...postSearchResults]
          .filter((post) =>
            post.title.toLowerCase().includes(searchStringValue.toLowerCase())
        )
      )
    }
  }

  const updateFilterValue = (value) => {
    if (null === value) {
      value = filter
    } else {
      setFilter(value)
    }

    return value;
  }

  const updateSearchString = (value) => {
    if (null === value) {
      value = searchString
    } else {
      setSearchString(value)
    }

    return value;
  }

  return (
    <div className="app">
      <AddPostForm posts={posts} addPost={addPost}/>
      <PostsFilter updatePostsList={updatePostsList}/>
      <PostsSearch updatePostsList={updatePostsList} />
      <PostsList posts={postSearchResults} removePost={removePost}/>
    </div>
  );
}

export default App;
