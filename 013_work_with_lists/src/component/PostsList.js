import React, {useState} from "react"
import PostItem from "./PostItem"

const PostsList = function(props) {
  const [posts, setPosts] = useState(props.posts ?? [
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
      text: "Global Ray is a package that enables ray(), dump(), and dd() from any PHP script."
    },
  ])

  return (
    <div className="base-list">
      <ul>
        {
          posts.map(post =>
            <PostItem post={post} key={post.id}/>
          )
        }
      </ul>
    </div>
  )
}

export default PostsList;