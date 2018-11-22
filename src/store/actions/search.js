import fetchJsonp from 'fetch-jsonp';

import * as actionTypes from './actionTypes';

export const searchStart = (term) => {
    //console.log('actions: searchStart');
    return {
        type: actionTypes.SEARCH_START,
        term: term
    };
};
export const fetchSuggestions = (term) => {
    return dispatch => {
        dispatch(fetchSuggestionsStart());
        const url = `https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=${term}&format=5&alt=json`;
        let arr = [];
        
        fetchJsonp(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                json[1].map((item) => arr.push(item[0]));
                dispatch(fetchSuggestionsSuccess(arr));
            })
            .catch(function(ex) {
                console.log('parsing suggestions failed', ex)
        });
    }
}

export const fetchSuggestionsStart = () => {
    return {
        type: actionTypes.FETCH_SUGGESTIONS_START
    }
}
export const fetchSuggestionsSuccess = (fetchedSuggestions) => {
    return {
        type: actionTypes.FETCH_SUGGESTIONS_SUCCESS,
        suggestions: fetchedSuggestions
    }
}
export const closeSuggestions = () => {
    return {
        type: actionTypes.CLOSE_SUGGESTIONS
    }
}
export const inSuggestions = () => {
    return {
        type: actionTypes.IN_SUGGESTIONS
    }
}
export const outSuggestions = () => {
    return {
        type: actionTypes.OUT_SUGGESTIONS
    }
}
