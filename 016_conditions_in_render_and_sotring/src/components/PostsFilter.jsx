import React from  "react"
import DefaultSelect from "./UI/inputs/DefaultSelect"

const PostsFilter = ({applyPostsFilter, ...props}) => {
  return (
    <div className="add-post-filter">
      <DefaultSelect
        onChange={applyPostsFilter}
        defaultValue="Choose sort by"
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