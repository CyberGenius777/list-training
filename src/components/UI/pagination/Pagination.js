import { getPagesArray } from '../../../utils/pages'

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages)
  return (
    <div className='page_wrapper'>
      {pagesArray.map((pageNumber) => (
        <button
          className={pageNumber === page ? 'page page_current' : 'page'}
          key={pageNumber}
          onClick={() => changePage(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  )
}

export default Pagination
