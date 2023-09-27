import React, { useState } from 'react';

const SearchBox = (props) => {
  const [tempValue, setTempValue] = useState('');

  return (
    <div className="flex flex-auto">
      <input
        id="search"
        type="text"
        className="block w-1/2 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={tempValue}
        onChange={(event) => setTempValue(event.target.value)}
        placeholder="Type to search..."></input>

      <button
        type="submit"
        onClick={(event) => props.setSearchValue(tempValue)}
        className="w-1/5 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
