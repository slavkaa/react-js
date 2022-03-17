
npm install react-transition-group --save

https://reactcommunity.org/react-transition-group/


# Troubleshooting

## Error: react transition group findDOMNode is deprecated in StrictMode.

Fix:
```

const PostsList = function({posts, removePost}) {
  return (
    <div className="base-list">
        <ul>
          <TransitionGroup>
          {
            (posts.length === 0)
              ? <div className="base-post">There are no posts</div>
              : posts.map(post =>
                {
                  const itemRef = React.forwardRef(() => {})  // <= Fix there

                  return(
                    <CSSTransition
                      key={post.id}
                      timeout={500}
                      classNames="item"
                      nodeRef={itemRef}  // <= Fix there
                    >
                      <PostItem removePost={removePost} post={post}/>
                    </CSSTransition>
                    )
                }
              )
          }
          </TransitionGroup>
        </ul>
    </div>
  )
}
```
