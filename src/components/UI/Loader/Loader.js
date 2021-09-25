import cl from './Loader.module.css'

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={cl['lds-ellipsis']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
