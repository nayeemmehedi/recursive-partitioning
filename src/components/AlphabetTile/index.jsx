import React from 'react';

const AlphabetTile = ({ letter, onClick }) => {
  return (
    <button
      className="bg-gray-200 text-gray-800 font-bold py-4 px-6 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      onClick={() => onClick(letter)}
    >
      {letter}
    </button>
  );
};

export default AlphabetTile;


