import React from  "react"
import DefaultInput from "./UI/inputs/DefaultInput";

const PostsSearch = ({updateSearchString}) => {

  const applySearch = (e) => {
    updateSearchString(e.target.value)
  }

  return (
    <div className="posts-search-form">
      <DefaultInput
        onChange={applySearch}
        placeholder="Type search string: search in emails."
      />
    </div>
  )
}

export default PostsSearch