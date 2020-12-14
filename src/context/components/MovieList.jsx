import React, {useContext} from 'react';
import {MovieContext} from "../contexts/MovieContext";

export default function MovieList() {

    const [movies, setMovies] = useContext(MovieContext);
    console.log(movies)
    return (
        <div>
            <h2>Movie Liste</h2>
            {movies.map(movie =>
                <p> {movie.name} </p>
            )}
        </div>
    )
}