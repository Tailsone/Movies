import { IMoviesStore } from "./types";

export const selectList = (state: {moviesReducer: IMoviesStore}) :IMoviesStore['list'] => state.moviesReducer.list;