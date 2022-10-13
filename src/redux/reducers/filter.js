import { DELETE_LAST_MOVIE, UPDATE_FILTER } from "../actionTypes";

const initialState = '';

const filterReducer = (state = initialState, action) => {
    if (action.type === UPDATE_FILTER) {
        return action.payload.category;
    }
    
    if (action.type === DELETE_LAST_MOVIE) {
        return '';
    }
    

    return state;
};

export default filterReducer;
