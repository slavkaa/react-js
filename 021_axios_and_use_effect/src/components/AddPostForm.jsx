import React, {useState} from "react"
import DefaultInput from "./UI/inputs/DefaultInput";
import DefaultButton from "./UI/buttons/DefaultButton";

const AddPostForm = ({addPost, ...props}) => {
  const [newPostData, setNewPostData] = useState({
    title: "Monolithic Application Performance Monitoring with Scout",
    badge: "Sponsor",
    date: "March 14th, 2022",
    image: "https://laravelnews.imgix.net/images/monolithic-apm-featured.png",
    text: "Scout APM gives metrics about smaller services and full tracing whenever any bug occurs. Monitoring can be utilized in a variety of disciplines to get the most out of the item under observation."
  })

  const addNewPost = (e) => {
    e.preventDefault()
    addPost(collectNewPostData())
    cleanUpForm()
  }

  const setDefaultValues = (e) => {
    e.preventDefault()
    setNewPostData({
      title: "Monolithic Application Performance Monitoring with Scout",
      badge: "Sponsor",
      date: "March 14th, 2022",
      image: "https://laravelnews.imgix.net/images/monolithic-apm-featured.png",
      text: "Scout APM gives metrics about smaller services and full tracing whenever any bug occurs. Monitoring can be utilized in a variety of disciplines to get the most out of the item under observation."
    })
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
      <DefaultButton className="btn-info" onClick={setDefaultValues}>Set default values</DefaultButton>
      <DefaultButton onClick={addNewPost}>Add post</DefaultButton>
    </div>
  )
}

export default AddPostForm