import React from "react";
import { NavLink } from "react-router-dom";

import { IMoviesDetails } from "types/IMoviesDetails";
import { routeMain as routeMovieDetails } from "pages/MovieDetails";
import imgPlaceholder from 'assets/images/placeholder.png';

import './styles.scss'

interface IMoviesListParams {
    movie: IMoviesDetails;
}

export const MovieItem: React.FC<IMoviesListParams> = ({movie}) => {
    return (
        <NavLink to={routeMovieDetails(`${movie.show.id}`)}>
            <div className="movie-item-wrapper">
                <div className="movie-item-image">{movie.show.image ?
                    <img src={movie.show.image.original} alt={movie.show.image.original}/> :
                    <img src={imgPlaceholder} alt=''/>}
                </div>
                <div>
                    <span>
                        {movie.show.name}
                    </span>
                    <span>
                        {movie.show.premiered ? movie.show.premiered.split('-').shift() : ''} {movie.show.network?.country.name ? `(${movie.show.network?.country.name})` : ''}
                    </span>
                    <span>
                        {movie.show.genres.join(', ')}
                    </span>
                </div>
            </div>
        </NavLink>
    )
}