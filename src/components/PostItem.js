const PostItem = ({ posts: { id, title, description, year }, remove, number, styles }) => {
  return (
    <li style={styles.li}>
      <div style={styles.container}>
        <div>
          {number}. {title}
        </div>
        <p>{description}</p>
      </div>
      <button onClick={() => remove(id)}>Удалить</button>
    </li>
  )
}

export default PostItem
