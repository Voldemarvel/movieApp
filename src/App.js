import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Inception',
      openingText: 'dream within a dream movie - Christopher Nolan',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Tenet',
      openingText: 'Time goes backwards - Christopher Nolan',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
