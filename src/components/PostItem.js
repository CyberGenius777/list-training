const PostItem = ({ posts: { id, title, body }, remove, styles }) => {
  return (
    <li style={styles.li}>
      <div style={styles.container}>
        <div>
          <h4>
            {id}. {title}
          </h4>
        </div>
        <p>{body}</p>
      </div>
      <button onClick={() => remove(id)}>Удалить</button>
    </li>
  )
}

export default PostItem
