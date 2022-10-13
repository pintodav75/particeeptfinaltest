import { combineReducers } from "redux";
import filterReducer from "./filter";
import moviesReducer from "./movies";
import paginationReducer from "./pagination";

export default combineReducers({
    movies: moviesReducer,
    filter: filterReducer,
    pagination: paginationReducer,
});
