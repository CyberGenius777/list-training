const MyInput = ({ value, onChange, placeholder }) => {
  const styles = {
    container: {
      margin: '20px 0',
      display: 'flex',
    },
    input: {
      padding: 10,
      width: '100%',
      outline: 'none',
    },
  }
  return (
    <div style={styles.container}>
      <input style={styles.input} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default MyInput
