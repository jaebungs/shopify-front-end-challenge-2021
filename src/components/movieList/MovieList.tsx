import React from 'react';
import { IMovie } from '../../types';
import MovieItem from './MovieItem';
import styled from 'styled-components';

const Section = styled.div`
    width: 50%;
    height: auto;
    background-color: #fff;
    border: 1px solid #000;
    margin-right: 3rem;
`

interface IProps {
    title: string;
    movies: IMovie[];
}

const MovieList = ({title, movies} : IProps) => {
    return (
        <Section>
            <h3>Search result for '{title}'...</h3>
            { movies.map((movie) => {
                return <MovieItem key={movie.imdbID} movie={movie}/>
            })}
        </Section>
    )
}

export default MovieList
