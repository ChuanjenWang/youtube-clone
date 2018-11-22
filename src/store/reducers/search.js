import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    term: '',
    suggestions: [],
    fetching: false,
    showSuggestions: false,
    inSuggestions: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_START:
        return {
            ...state,
            term: action.term
        };
        case actionTypes.FETCH_SUGGESTIONS_START:
        return {
            ...state,
            fetching: true,
            showSuggestions: true
        };
        case actionTypes.FETCH_SUGGESTIONS_SUCCESS:
        return {
                ...state,
                fetching: false,
                suggestions: action.suggestions
        };
        case actionTypes.CLOSE_SUGGESTIONS:
        return {
                ...state,
                fetching: false,
                suggestions: [],
                showSuggestions: false
        };
        case actionTypes.IN_SUGGESTIONS:
        return {
                ...state,
                inSuggestions: true
        };
        case actionTypes.OUT_SUGGESTIONS:
        return {
                ...state,
                inSuggestions: false
        };
        default:
            return state;
    }
}

export default reducer;