import React from 'react';

const Pagination = (props) => {
  const nextPage = props.handleNextPageClick;
  const prevPage = props.handlePrevPageClick;

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center h-10 -space-x-px text-base">
          <li>
            <a
              href="#/"
              onClick={prevPage}
              className="flex items-center justify-center h-10 px-4 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#/"
              onClick={nextPage}
              className="flex items-center justify-center h-10 px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
