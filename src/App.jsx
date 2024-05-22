
import React, { useState } from 'react';
import AlphabetTile from './components/AlphabetTile';

const App = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;

    // Replace three consecutive letters with an underscore
    newOutputString = newOutputString.replace(/(.)\1{2}/g, '_');

    // Replace more than three consecutive letters with underscores
    newOutputString = newOutputString.replace(/(.)\1{3,}/g, (match) => '_'.repeat(match.length));

    setOutputString(newOutputString);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div id="outputString" className="mb-8 text-2xl font-bold">
        {outputString}
      </div>
      <div className="grid grid-cols-7 gap-4">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
          <AlphabetTile key={letter} letter={letter} onClick={handleTileClick} />
        ))}
      </div>
    </div>
  );
};

export default App;