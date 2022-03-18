import React from  "react"
import DefaultSelect from "./UI/inputs/DefaultSelect"

const PostsFilter = ({updateFilterValue, value}) => {
  const applyFilter = (e) => {
    updateFilterValue(e.target.value)
  }

  return (
    <div className="posts-filter">
      <DefaultSelect
        onChange={applyFilter}
        defaultValue="Choose sort by filter"
        value={value}
        options={[
          {name:"First name", value: "first_name"},
          {name:"Last name", value: "last_name"},
          {name:"Email", value: "email"},
          {name:"ID", value: "id"},
        ]}
      />
    </div>
  )
}

export default PostsFilter