import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type {} from 'redux-thunk/extend-redux';
import { InfinitySpin } from "react-loader-spinner";

import { routeMain } from "./routes";
import { selectList } from "store/movies/selectors";
import { loadMovies } from "store/movies/actions";
import { CategoryMoviesList } from "components/CategoryMoviesList";

import './styles.scss'


export const Category = () => {
    const dispatch = useDispatch();
    const moviesList = useSelector(selectList);

    useEffect(() => {
        dispatch(loadMovies('enemy'))
    }, [dispatch]);
    
    return (
        <section>
            <div className="category-title">
                <span>
                    Выбранная категория:
                </span>
                <span>
                    Enemy
                </span>
            </div>
            {moviesList ?
                <div>
                <CategoryMoviesList
                    list={moviesList}
                />
                </div> :
                <div>
                    <InfinitySpin 
                    width='200'
                    color="#4fa94d"
                    />
                </div>
            }
        </section>
    )
}

export { routeMain };