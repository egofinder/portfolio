import React from 'react';

const MovieListHeading = (props) => {
  return (
    <div className="flex items-center flex-auto text-xl">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
