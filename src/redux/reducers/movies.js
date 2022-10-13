import {
    DELETE_LAST_MOVIE,
    DELETE_MOVIE,
    UPDATE_LIKE,
    UPDATE_DISLIKE,
    LOADING_IN_PROGRESS,
    LOADING_MOVIES,
} from '../actionTypes';

const initialState = {
    movies: [],
    loadingInProgess: true,
};

const moviesReducer = (state = initialState, action) => {
    if (action.type === DELETE_MOVIE || action.type === DELETE_LAST_MOVIE) {
        return { ...state, movies: state.movies.filter((m) => m.id !== action.payload.id) }
    }
    else if ( action.type === LOADING_IN_PROGRESS ) {
        return { ...state, loadingInProgess: action.payload.bool }
    }
    else if ( action.type === LOADING_MOVIES ) {
        return { ...state, movies: action.payload.movies }
    }
    else if ( action.type === UPDATE_LIKE ) {
        const movies = state.movies.map((m) => {
            if (m.id === action.payload.id) {
                return { ...m, likes: m.likes + 1 }
            } else {
                return m; 
            }
        })
        return { ...state, movies }
    }
    else if ( action.type === UPDATE_DISLIKE ) {
        const movies = state.movies.map((m) => {
            if (m.id === action.payload.id) {
                return { ...m, dislikes: m.dislikes + 1 }
            } else {
                return m; 
            }
        })
        return { ...state, movies }
    }
    
    return state;
};

export default moviesReducer;
