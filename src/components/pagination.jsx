import _ from "lodash"

const Pagination = ({items, pageSize, currentPage, onPageChange}) => {

    const pageCount = items / pageSize
    if (Math.ceil(pageCount) === 1) return null;
    const pages = _.range(1, pageCount + 1)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page) => (
                    <li key={page} className={page === currentPage ? "page-item-active" : "page-item"}>
                        <a style={{cursor: "pointer"}} onClick={() => onPageChange(page)} class="page-link">
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination