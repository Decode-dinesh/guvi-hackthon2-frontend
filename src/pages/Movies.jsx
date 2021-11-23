import React from 'react';
import AllMoviesFetch from '../components/AllMoviesFetch';
import MovieSlider from '../components/MovieSlider';

export default function Movies() {
    return (
        <>
          <MovieSlider/> 
          <AllMoviesFetch/> 
        </>
    )
}
