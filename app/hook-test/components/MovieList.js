import React from 'react';
import MovieDetail from './MovieDetail';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  const DetailComponent = props.detailComponent;
  const hasDetail = props.hasDetail;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-1/3"
          key={movie.imdbID}>
          <div className="h-80">
            <img
              className="h-full p-5 m-auto rounded-3xl"
              src={movie.Poster}
              alt={movie.Title}></img>
          </div>

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.Title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movie.Year}
            </p>
          </div>

          <div className="flex flex-col gap-4 m-5">
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <FavouriteComponent />
            </div>
            {DetailComponent ? (
              <div
                onClick={() => props.handleDetailClick(movie)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <DetailComponent />
              </div>
            ) : (
              <></>
            )}
          </div>

          {hasDetail && hasDetail.imdbID === movie.imdbID ? (
            <div className="absolute top-0 flex flex-col h-full p-3 bg-white rounded-lg justify-evenly opacity-1">
              <MovieDetail
                movie={hasDetail}
                handleCancleDetailClick={props.handleCancleDetailClick}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
};

export default MovieList;
