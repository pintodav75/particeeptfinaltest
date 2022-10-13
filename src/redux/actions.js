import { movies$ } from "../movies";
import {
  UPDATE_FILTER,
  DELETE_MOVIE,
  DELETE_LAST_MOVIE,
  SET_PAGE,
  UPDATE_LIKE,
  UPDATE_DISLIKE,
  LOADING_IN_PROGRESS,
  LOADING_MOVIES,
} from "./actionTypes";


export const updateFilter = category => ({
    type: UPDATE_FILTER,
    payload: {
      category
    }
});

export const deleteMovie = id => ({
  type: DELETE_MOVIE,
  payload: {
    id
  }
});

export const deleteLastMovie = id => ({
  type: DELETE_LAST_MOVIE,
  payload: {
    id
  }
});


export const setPage = page => ({
  type: SET_PAGE,
  payload: {
    page
  }
});

export const updateLike = id => ({
  type: UPDATE_LIKE,
  payload: {
    id
  }
});

export const updateDisLike = id => ({
  type: UPDATE_DISLIKE,
  payload: {
    id
  }
});

export const getMovies = () => {
  return dispatch => {
     movies$.then((movies) => {
        dispatch(loadingInProgress(false))
        dispatch(loadingMovies(movies))
      })
  }
}

export const loadingMovies = movies => (
  {
    type: LOADING_MOVIES,
    payload: { movies }
  }
)


export const loadingInProgress = bool => (
  {
    type: LOADING_IN_PROGRESS,
    payload: { bool }
  }
)
