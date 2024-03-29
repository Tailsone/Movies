import { AnyAction } from "redux";
import { IMovieStore } from "./types";

const initialState = {
    movie: null,
}

export const movieReducer = (state: IMovieStore | {} = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'movie/setMovie':
            return {...state, movie: action.payload};
        case 'RESET_STATE':
            return initialState;
        default:
            return state;
    }
}
