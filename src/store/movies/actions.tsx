import { getMovies } from "services/GetMovies";
import { Dispatch } from 'redux';
import { IMoviesStore } from "./types";

export const setMoviesAction = (list: IMoviesStore) => {
    return {
        type: 'movies/setMovies',
        payload: list,
    }
}

export const loadMovies = (req: string) => async (dispatch: Dispatch) => {
    dispatch({ type: 'RESET_STATE' });
    try {
        const {data} = await getMovies(req);
        data.length > 0 ? dispatch(setMoviesAction(data)) : console.log('Данные не получены');
    }
    catch(e) {
        console.log(e, 'Произошла ошибка')
    }
}