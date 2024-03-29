import React from "react";

import { IMoviesDetails } from "types/IMoviesDetails";
import { CategoryMovieItem } from "./CategoryMovieItem";

import './styles.scss'


interface IMoviesListParams {
    list: IMoviesDetails[];
}

export const CategoryMoviesList: React.FC<IMoviesListParams> = ({list}) => {
    return (
        <div className="category-movies-list-wrapper">
            {
                list.map(movie => {
                    return(
                        <CategoryMovieItem
                            key={movie.show.id}
                            movie={movie}
                        />
                    )
                })
            }
        </div>
    )
}