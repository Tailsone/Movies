import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type {} from 'redux-thunk/extend-redux';
import { ThreeDots } from 'react-loader-spinner';

import { routeMain } from "./routes";
import { selectMovie } from "store/movie/selectors";
import { loadMovie } from "store/movie/actions";
import imgPlaceholder from 'assets/images/placeholder.png';
import star from 'assets/images/star1.svg';


import './styles.scss'

export const MovieDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectMovie);

    useEffect(() => {
        dispatch(loadMovie(Number(id)))
    }, [dispatch, id]);

    return (
        <section className="movie-details-wrapper">
            {movie ? (
                <div className="movie-details">
                    <div>
                        {movie.image ? 
                        <img className="movie-img" src={movie.image.original} alt={movie.image.original}/> :
                        <img className="movie-img" src={imgPlaceholder} alt=''/>}
                    </div>
                    <div className="movie-info">
                        <div className="title-wrapper">
                            <h2 className="movie-name">
                                {movie.name}
                            </h2>
                            <div>
                                <img className="star-img" src={star} alt={star}/>
                                <span>
                                    {movie.rating.average ? 
                                    movie.rating.average.toString().replace('.', ',') + '/10' :
                                    'Н/Д'}
                                </span>
                            </div>
                        </div>
                        <div className="description-wrapper">
                            <div className="description-item">
                                <span>Год выхода:</span>
                                <div>
                                    {movie.premiered ?
                                    movie.premiered.split('-').shift() :
                                    'Нет данных'}
                                </div>
                            </div>
                            <div className="description-item">
                                <span>Страна:</span>
                                <div>
                                    {movie.network?.country.name ?
                                    movie.network.country.name :
                                    'Нет данных'}
                                </div>
                            </div>
                            <div className="description-item">
                                <span>Жанр:</span>
                                <div>
                                    {movie.genres.join(', ')}
                                </div>
                            </div>
                            <div className="description-item">
                                <span>Описание:</span>
                                <div className="description">
                                    {movie.summary ?
                                    <p dangerouslySetInnerHTML={{__html: movie.summary}}></p> :
                                    'Отсутствует'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) :
            <div className="details-loader-wrapper">
                <div className="details-loader">
                <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#5353ec" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    visible={true}
                />
                </div>
            </div>}
        </section>
    )
}

export { routeMain };