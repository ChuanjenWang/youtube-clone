import * as actionTypes from './actionTypes';
import youtube from '../../utilities/youtube';

export const fetchChannel = (id) => {
    //console.log('action: fetchChannel');
    return dispatch => {
        
        const params = {
            type: 'channels',
            params: {
                id: id,
                part: 'snippet',
            }
        }

        youtube(params, (data) => {
            //console.log(data);
            dispatch(fetchChannelSuccess(data));
        });
    }   
}

export const fetchChannelSuccess = (data) => {
    //console.log('action: fetchChannelSuccess');
    return {
        type: actionTypes.FETCH_CHANEEL_SUCCESS,
        selectedChannel: data
    }
}