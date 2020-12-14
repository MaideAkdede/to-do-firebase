import React from 'react';
import MovieList from "./components/MovieList";
import {MovieProvider} from "./contexts/MovieContext";

export default function App() {
    return (
        <MovieProvider>
            <h1>Context API</h1>
            <MovieList />
        </MovieProvider>
    )
}