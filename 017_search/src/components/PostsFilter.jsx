import React from  "react"
import DefaultSelect from "./UI/inputs/DefaultSelect"

const PostsFilter = ({setFilter, updatePostsList}) => {
  const applyFilter = (e) => {
    updatePostsList(e.target.value)
  }

  return (
    <div className="posts-filter">
      <DefaultSelect
        onChange={applyFilter}
        defaultValue="Choose sort by filter"
        options={[
          {name:"Title", value: "title"},
          {name:"Date", value: "date"},
          {name:"Badge", value: "badge"},
          {name:"ID", value: "id"},
        ]}
      />
    </div>
  )
}

export default PostsFilter