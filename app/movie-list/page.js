'use client';

import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddToFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import ShowDetail from './components/ShowDetail';
import Pagination from './components/Pagination';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [showDetail, setShowDetail] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords =
    movies.length > 0 ? movies.slice(indexOfFirstRecord, indexOfLastRecord) : 0;
  const nPages = Math.ceil(movies.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const getMovieRequest = async () => {
    if (searchValue.length > 3) {
      const url = `https://www.omdbapi.com/?apikey=f2bc368e&s=${searchValue}`;
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        setMovies([]);
      }
    }
  };

  const addFavouriteMovie = (movie) => {
    if (favourites.length >= 3) {
      alert('You are reach to max favourite list');
      return;
    }
    const isDuplicate = favourites.some((item) => item.imdbID === movie.imdbID);

    if (isDuplicate) {
      alert('Movie is alread in your favourite list');
    }
    if (!isDuplicate) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    setShowDetail('');
    saveToLocalStorage(newFavouriteList);
  };

  const getMovieDetail = async (movie) => {
    const url = `http://www.omdbapi.com/?apikey=f2bc368e&i=${movie.imdbID}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    setShowDetail(responseJson);
  };

  const removeMovieDetail = () => {
    setShowDetail('');
    // console.table(showDetail);
  };
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  });

  useEffect(() => {
    const movieFavourites =
      JSON.parse(localStorage.getItem('react-movie-app-favourites')) ?? [];
    setFavourites(movieFavourites);
  }, []);

  return (
    <section>
      <div className="m-5">
        <div className="flex justify-center flex-auto m-5">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>

        <div className="flex items-center justify-center p-6 m-5 mx-auto space-x-4 overflow-auto shadow-lg rounded-xl bg-slate-50">
          {currentRecords.length > 0 ? (
            <MovieList
              movies={currentRecords}
              favouriteComponent={AddFavourites}
              handleFavouritesClick={addFavouriteMovie}
              handleDetailClick={getMovieDetail}
            />
          ) : (
            'No List'
          )}
        </div>
        <div className="flex justify-center">
          <Pagination
            handlePrevPageClick={prevPage}
            handleNextPageClick={nextPage}
          />
        </div>

        <div className="m-5">
          <MovieListHeading heading="Favourites" />
        </div>

        <div className="flex items-center justify-center p-6 m-5 mx-auto space-x-4 overflow-auto shadow-lg rounded-xl">
          {favourites.length > 0 ? (
            <MovieList
              movies={favourites}
              handleFavouritesClick={removeFavouriteMovie}
              favouriteComponent={RemoveFavourites}
              detailComponent={ShowDetail}
              handleDetailClick={getMovieDetail}
              hasDetail={showDetail}
              handleCancleDetailClick={removeMovieDetail}
            />
          ) : (
            <div className="text-5xl">Please add favorite movie!</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
