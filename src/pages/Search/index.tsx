import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useThrottledCallback } from "use-debounce";

import { selectList } from "store/movies/selectors";
import { loadMovies } from "store/movies/actions";
import { CategoryMovieItem } from "components/CategoryMoviesList/CategoryMovieItem";
import { routeMain } from "./routes";
import searchIcon from 'assets/images/search-icon.svg';

import './styles.scss'


export const Search = () => {
    const [request, setRequest] = useState('');
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const moviesList = useSelector(selectList);
    const throttled = useThrottledCallback((() => setRequest(value)), 3000);
    const requestHandle = () => {
        setRequest(value);
        setValue('');
    };
   
    useEffect(() => {
        dispatch(loadMovies(request))
    }, [dispatch, request]);

    useEffect(() => {
        value.length > 2 &&
        throttled();
    }, [value, throttled]);
    
    return (
        <section>
            <div className="search-title">
                <h2>Поиск по категории</h2>
                <div className="input-wrapper">
                    <input type="text" value={value} onChange={(e)=> (setValue(e.target.value))} placeholder="Example: drama"/>
                    <button onClick={()=> requestHandle()}>
                        <img src={searchIcon} alt=""/>
                    </button>
                </div>
                <span>
                    Результаты поиска:
                </span>
            </div>
            <div>
                {request.length > 0 ? <div className="search-movies-list-wrapper">
                    {moviesList.length > 1 ?
                        moviesList.map(movie => {
                            return(
                                <CategoryMovieItem
                                    key={movie.show.id}
                                    movie={movie}
                                />
                            )
                        }) : 
                        <div className="search-request-text">Ничего не нашлось. Попробуйте поискать что-то другое.</div> }
                    </div> : 
                    <div className="search-request-text">Введите поисковой запрос</div>}
            </div>
        </section>
    )
}

export { routeMain };