import { AnyAction } from "redux";
import { IMoviesStore } from "./types";

const initialState = {
    list: [],
}

export const moviesReducer = (state: IMoviesStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'movies/setMovies':
            return {...state, list: [...action.payload]};
        case 'RESET_STATE':
            return initialState;
        default:
            return state;
    }
}
