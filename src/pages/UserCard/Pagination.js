const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
    const totalPages = Math.ceil(totalUsers / usersPerPage);
    const pageNumbers = [];
    const maxButtons = 4; // Maximum number of buttons to display

    // Determine the range of page numbers to display
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    // Adjust startPage if there are not enough pages to the right
    if (endPage - startPage < maxButtons - 1) {
        startPage = Math.max(1, endPage - maxButtons + 1);
    }

    // Create an array of page numbers to display
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1} // Disable if on the first page
            >
                Previous
            </button>
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={number === currentPage ? 'active' : ''}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages} // Disable if on the last page
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
