import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'
import { toast } from 'react-toastify'
import WarningIcon from '@material-ui/icons/Warning'

const CreatePost = ({ create }) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const createPost = ({ title, body }) => {
    if (title && body) {
      const newPost = { ...post, id: Date.now() }
      create(newPost)

      setPost({ title: '', body: '' })
    } else {
      toast('Не все поля заполнены', {
        position: toast.POSITION.TOP_CENTER,
        progress: undefined,
        type: toast.TYPE.WARNING,
        icon: <WarningIcon />,
        theme: 'colored',
      })
    }
  }

  return (
    <>
      <TextField
        variant='outlined'
        className='textfield'
        placeholder='Заголовок поста'
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <TextField
        variant='outlined'
        className='textfield'
        placeholder='Описание поста'
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button
        onClick={() => createPost(post)}
        className='button'
        style={{ justifyContent: 'center' }}
        variant='contained'
        color='primary'>
        Создать пост
      </Button>
    </>
  )
}

export default CreatePost
