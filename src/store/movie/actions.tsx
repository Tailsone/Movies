import { getMovie } from "services/GetMovie";
import { Dispatch } from 'redux';
import { IMovieStore } from "./types";

export const setMovieAction = (movie: IMovieStore) => {
    return {
        type: 'movie/setMovie',
        payload: movie,
    }
}

export const loadMovie = (id: number) => async (dispatch: Dispatch) => {
    dispatch({ type: 'RESET_STATE' });
    try {
        const {data} = await getMovie(id);
        Object.keys(data).length > 0 ? dispatch(setMovieAction(data)) : console.log('Данные не получены')
    }
    catch(e) {
        console.log(e, 'Произошла ошибка')
    }
}
