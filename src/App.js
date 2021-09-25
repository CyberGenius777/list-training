import { useEffect, useState } from 'react'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import PostFilter from './components/PostFilter'
import { toast, ToastContainer } from 'react-toastify'
import MyModal from './components/UI/MyModal/MyModal'
import { usePosts } from './hooks/usePosts'
import { bounceInRight } from 'react-animations'
import './App.css'
import PostService from './API/PostService'
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './hooks/useFetching'
import { getPageCount, getPagesArray } from './utils/pages'
import Pagination from './components/UI/pagination/Pagination'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    margin: '0 20px 0 0',
  },
  showYearColor: {
    color: '#a1a1a1',
  },
  bounceInRight: {
    animation: 'x 1s',
    animationName: bounceInRight,
  },
}

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id))
    toast('Пост успешно удален', {
      type: toast.TYPE.SUCCESS,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1500,
      theme: 'colored',
    })
  }

  return (
    <div className='App'>
      <div className='container'>
        <button onClick={() => setModal(true)}>Создать пост</button>
        <button onClick={() => setPosts([])}>Удалить посты</button>
        <MyModal visible={modal} setVisible={setModal}>
          <div className='create-post'>
            <CreatePost create={createPost} />
          </div>
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter} />
        {postError &&
          toast(postError, {
            type: toast.TYPE.ERROR,
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
            theme: 'colored',
          })}
        <div className='show-posts'>
          {isPostsLoading ? (
            <Loader />
          ) : (
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title='News'
              styles={styles}
            />
          )}
          <Pagination page={page} changePage={setPage} totalPages={totalPages} />
        </div>

        <ToastContainer
          position='top-center'
          autoClose={2000}
          closeButton={false}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  )
}

export default App
