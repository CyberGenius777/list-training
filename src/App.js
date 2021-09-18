import { useState } from 'react'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import PostFilter from './components/PostFilter'
import { toast, ToastContainer } from 'react-toastify'
import MyModal from './components/UI/MyModal/MyModal'
import { usePosts } from './hooks/usePosts'

import './App.css'

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
}

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Уткин о сборной',
      description:
        'Ничья с Хорватией важна лишь с 6 очками с Кипром и Мальтой. Не верьте тем, кто про карликов говорит',
      year: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      title: 'Новая BMW M5 станет мощнее, чем когда-либо — но окажется гибридом',
      description:
        'BMW начнёт выводить на рынок новое поколение 5‑й серии в 2023 году. Как пишет Autocar, флагманом семейства останется BMW M5, но двигатель спортседана ждёт концепту­альная переработка: M5 превратится в подключаемый гибрид. Отдача её силовой установки составит около 750 л.с., при этом позже в семействе появятся и ещё более мощные версии',
      year: new Date().toLocaleTimeString(),
    },
    {
      id: 3,
      title: 'Mercedes-AMG анонсировал премьеру первого электрокара',
      description:
        'Mercedes-AMG вслед за первым серийным гибридом готовится показать и первую модель с полностью электрической силовой установкой',
      year: new Date().toLocaleTimeString(),
    },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

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
        <MyModal visible={modal} setVisible={setModal}>
          <div className='create-post'>
            <CreatePost create={createPost} />
          </div>
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter} />

        <div className='show-posts'>
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title='News'
            styles={styles}
          />
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
