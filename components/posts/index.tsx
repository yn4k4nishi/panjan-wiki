import Post from './post'

function Posts({ posts }) {
  if (posts) {
    return (
      <div>
        {posts.map((e) => (
          <div key={e.id} className="py-2">
            <Post id={e.id} title={e.title} content={e.content} />
          </div>
        ))}
      </div>
    )
  } else {
    return <p>null</p>
  }
}

export default Posts
