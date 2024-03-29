import React from "react";

import { IMoviesDetails } from "types/IMoviesDetails";
import { MovieItem } from "./MovieItem";

import './styles.scss'

interface IMoviesListParams {
    list: IMoviesDetails[];
}

export const MoviesList: React.FC<IMoviesListParams> = ({list}) => {
    return (
        <div className="movies-list-wrapper">
            {
                list.map(movie => {
                    return(
                        <MovieItem
                            key={movie.show.id}
                            movie={movie}
                        />
                    )
                })
            }
        </div>
    )
}