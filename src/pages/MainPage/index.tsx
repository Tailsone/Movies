import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type {} from 'redux-thunk/extend-redux';

import { routeMain } from "./routes";
import { selectList } from "store/movies/selectors";
import { loadMovies } from "store/movies/actions";
import { MoviesList } from "components/MoviesList";
import { MainLoader } from "components/loaders/mainLoader";

import './styles.scss'

export const MainPage = () => {
    const dispatch = useDispatch();
    const moviesList = useSelector(selectList);

    useEffect(() => {
        dispatch(loadMovies('animal'))
    }, [dispatch]);
    
    return (
        <div className="main-wrapper">
            <div className="main-title">
                <h1>
                    MOVIESinfo
                </h1>
                <h2>
                    Самый популярный портал о фильмах 
                </h2>
            </div>
            <section>
                {moviesList.length > 0 ?
                    <MoviesList
                        list={moviesList.slice(0, 8)}
                    /> :
                    <div className="movies-list-wrapper">
                        <MainLoader/>
                        <MainLoader/>
                        <MainLoader/>
                        <MainLoader/>
                        <MainLoader/>
                        <MainLoader/>
                        <MainLoader/>
                        <MainLoader/>
                    </div>
                }
            </section>
        </div>
    )
}

export { routeMain };