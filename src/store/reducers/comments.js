import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: [],
    fetching: false,
    reloading: false,
    nextPage: null,
    error: false,
    showSort: false,
    inSortBox: false,
    sort: 'relevance'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_COMMENTS_START: 
        return {
            ...state,
            fetching: true,
            error: false
        };
        case actionTypes.FETCH_COMMENTS_ORDER_START: 
        return {
            ...state,
            fetching: true,
            reloading: true,
            error: false
        };
        case actionTypes.FETCH_COMMENTS_SUCCESS: 
        return {
            ...state,
            list: state.list.concat(action.list),
            fetching: false,
            error: false,
            nextPage: action.nextPage
        };
        case actionTypes.FETCH_COMMENTS_ORDER_SUCCESS: 
        return {
            ...state,
            list: action.list,
            fetching: false,
            reloading: false,
            error: false,
            nextPage: action.nextPage,
            showSort: false
        };
        case actionTypes.FETCH_COMMENTS_FAIL: 
        return {
            ...state,
            fetching: false,
            error: true
        };
        case actionTypes.CLEAR_COMMENTS: 
        return {
            ...state,
            list: [],
            fetching: false,
            nextPage: null,
            error: false,
            showSort: false
        }
        case actionTypes.SWITCH_SORT_BOX: 
        return {
            ...state,
            showSort: !state.showSort,
            nextPage: null
        };
        case actionTypes.CLOSE_SORT_BOX:
        return {
            ...state,
            showSort: false
        };
        case actionTypes.IN_SORT_BOX:
        return {
            ...state,
            inSortBox: true
        };
        case actionTypes.OUT_SORT_BOX:
        return {
            ...state,
            inSortBox: false
        };
        case actionTypes.SET_COMMENTS_ORDER:
        return {
            ...state,
            sort: action.sort,
            showSort: false
        }
        default: 
        return state;    
    }
}

export default reducer;