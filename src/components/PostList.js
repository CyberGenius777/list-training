import PostItem from './PostItem'
import './PostList.module.css'

const PostList = ({ posts, title, remove, styles }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: 'center' }}>Постов нет!</h2>
  }

  return (
    <>
      <h2>{title}</h2>
      <ul>
        {posts.map((post, index) => (
          <PostItem remove={remove} number={index + 1} key={index} posts={post} styles={styles} />
        ))}
      </ul>
    </>
  )
}

export default PostList
