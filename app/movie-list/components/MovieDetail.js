import React from 'react';

const MovieDetail = (props) => {
  const movie = props.movie;
  return (
    <>
      <dl className="max-w-xl text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        <div className="flex flex-col pb-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Title
          </dt>
          <dd className="text-lg font-semibold">{movie.Title}</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Main Actors
          </dt>
          <dd className="text-lg font-semibold">{movie.Actors}</dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Plot
          </dt>
          <dd className="text-lg font-semibold">{movie.Plot}</dd>
        </div>
      </dl>
      <div
        onClick={props.handleCancleDetailClick}
        className="inline-flex items-center justify-center w-full py-2 mb-0 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Close Detail
      </div>
    </>
  );
};

export default MovieDetail;
