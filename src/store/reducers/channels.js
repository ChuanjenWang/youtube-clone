import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selectedChannel: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_CHANEEL_SUCCESS:
        return {
            ...state,
            selectedChannel: action.selectedChannel
        }
        default:
        return state;
    }
}

export default reducer;