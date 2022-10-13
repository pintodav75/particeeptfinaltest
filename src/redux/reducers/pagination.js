import { SET_PAGE } from "../actionTypes";

const initialState = {
    page: 1,
};

const paginationReducer = (state = initialState, action) => {
    if (action.type === SET_PAGE)
        return { page: action.payload.page }
    
    return state;
};

export default paginationReducer;
