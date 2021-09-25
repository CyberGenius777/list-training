import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'
import './PostList.module.css'

const PostList = ({ posts, title, remove, styles }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: 'center' }}>Постов нет!</h2>
  }

  return (
    <>
      <h2>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <PostItem remove={remove} number={index + 1} posts={post} styles={styles} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}

export default PostList
