import React, {useState, useRef} from "react"
import PostItem from "./PostItem"
import DefaultButton from "./UI/buttons/DefaultButton"
import DefaultInput from "./UI/inputs/DefaultInput"

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

  const [newPostData, setNewPostData] = useState({
    title: "Monolithic Application Performance Monitoring with Scout",
    badge: "Sponsor",
    date: "March 14th, 2022",
    image: "https://laravelnews.imgix.net/images/monolithic-apm-featured.png",
    text: "Scout APM gives metrics about smaller services and full tracing whenever any bug occurs. Monitoring can be utilized in a variety of disciplines to get the most out of the item under observation."
  })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, collectNewPostData()])
    cleanUpForm()
  }

  const collectNewPostData = () => {
    return {
      id: Date.now(),
      title: newPostData.title,
      badge: newPostData.badge,
      date: newPostData.date,
      image: newPostData.image,
      text: newPostData.text
    }
  }

  const cleanUpForm = () => {
    setNewPostData({title: '', badge: '', date: '', image: '', text: '' })
  }

  return (
    <div className="base-list">
      <div className="add-post-form">
        <DefaultInput
          value={newPostData.title}
          onChange={e => setNewPostData({...newPostData, title: e.target.value} )}
          placeholder="Title"
        />
        <DefaultInput
          value={newPostData.badge}
          onChange={e => setNewPostData({...newPostData, badge: e.target.value} )}
          placeholder="Badge"
        />
        <DefaultInput
          value={newPostData.date}
          onChange={e => setNewPostData({...newPostData, date: e.target.value} )}
          placeholder="Date"
        />
        <DefaultInput
          value={newPostData.image}
          onChange={e => setNewPostData({...newPostData, image: e.target.value} )}
          placeholder="Image URL"
        />
        <DefaultInput
          value={newPostData.text}
          onChange={e => setNewPostData({...newPostData, text: e.target.value} )}
          placeholder="Text"
        />
        <DefaultButton onClick={addNewPost}>Add post</DefaultButton>
      </div>
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