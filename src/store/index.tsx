import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { moviesReducer } from "./movies/reducers";
import { movieReducer } from "./movie/reducers";

const rootReducer = combineReducers({
    moviesReducer, movieReducer,
})

const store = legacy_createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;