import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.OMDB_API_KEY;

const SearchInput = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 2rem;
  margin: 1rem 1rem 0 0;
  width: 70%;
`;

const Button = styled.button`
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #008060;
  padding: 0.6rem 1.5rem;
  font-size: 2rem;
  font-weight: 500;
`;


interface Props {
    title: string;
    setTitle: Function;
    setMovies: Function;
}

const SearchBar = ({ title, setTitle, setMovies }: Props) => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };
    
    const handleSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const movieData = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
                            .then(res => res.json())
        setMovies(movieData);
        console.log(movieData)
        setTitle("");
    };
      
    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
            <SearchInput
                onChange={handleInputChange}
                type="search"
                name="serach by movie title"
                value={title}
                placeholder="Search movie by title here."
            />
            <Button>Search</Button>
            </form>
        </div>
    )
}

export default SearchBar;
