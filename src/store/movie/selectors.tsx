import { IMovieStore } from "./types";

export const selectMovie = (state: {movieReducer: IMovieStore}) :IMovieStore['movie'] => state.movieReducer.movie;