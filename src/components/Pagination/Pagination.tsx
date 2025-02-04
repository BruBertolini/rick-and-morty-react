import React from 'react'

interface PaginationProps {
    currentPage: number;
    maxPages: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, maxPages, setPage }) => {
    let pagesToShow: Array<number> = [];

    for (let index = currentPage - 1; index <= currentPage + 1; index++) {
        if (index >= 1 && index <= maxPages) {
            pagesToShow.push(index);
        }

    }

    const hasPrevious = currentPage > 1;
    const hasNext = currentPage < maxPages;
    const disableFirst = currentPage === 1;
    const disableLast = currentPage === maxPages || !maxPages;

    let next = () => {
        setPage((x) => x + 1)
    }

    let previous = () => {
        setPage((x) => x - 1)
    }

    return (

        <div className='container d-flex justify-content-center gap-1 my-5'>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${disableFirst ? 'disabled' : ''}`}>
                        <button className="page-link" disabled={disableFirst} onClick={x => setPage(1)}>
                            &lt;&lt;
                        </button>
                    </li>

                    <li className={`page-item ${!hasPrevious ? 'disabled' : ''}`}>
                        <button className="page-link" disabled={!hasPrevious} onClick={previous}>
                            &lt;
                        </button>
                    </li>

                    {pagesToShow.map((page) => (
                        <li className="page-item">
                            <button
                                key={page}
                                onClick={() => setPage(page)}
                                className={`page-link ${page === currentPage ? 'active' : ''}`}
                            >
                                {page}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${!hasNext ? 'disabled' : ''}`}>
                        <button className="page-link" disabled={!hasNext} onClick={next}>
                            &gt;
                        </button>
                    </li>
                    <li className={`page-item ${disableLast ? 'disabled' : ''}`}>
                        <button className="page-link" disabled={disableLast} onClick={x => setPage(maxPages)}>
                            &gt;&gt;
                        </button>
                    </li>
                </ul>
            </nav>
        </div>)
}

export default Pagination