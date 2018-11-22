import * as actionTypes from '../actions/actionTypes';

const initialState = {
    suggestions: [],
    viedos: [],
    fetchingSuggestions: false,
    showSuggestions: false,
    selectedVideo: null,
    extend: false,
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case actionTypes.FETCH_VIDEOS:
            return {
                ...state,
                viedos: action.videos
            };
        case actionTypes.FETCH_VIDEOS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.videos,
                selectedVideo: action.videos[0],
                loading: false
            };
        case actionTypes.SELECT_VIDEO_SUCCESS:
            return {
                ...state,
                selectedVideo: action.selectedVideo,
                extend: false
            };
        default:
            return state; 
    }
} 

export default reducer;


