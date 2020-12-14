import React, {useState, createContext} from 'react';
import MovieList from '../components/MovieList';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name : 'The Neon Demon',
            director : 'Nicolas Winding Refn',
            yearOfRelease : 2015
        },
        {
            name : 'Vertigo',
            director : 'Alfred Hitchcock',
            yearOfRelease : 1958
        },
        {
            name : 'Toute une nuit',
            director : 'Chantal Akerman',
            yearOfRelease : 1982
        },
    ])

    return (
        <MovieContext.Provider
            value={[movies, setMovies]}
        >
            {props.children}
        </MovieContext.Provider>
    )
}