//import axios from 'axios';
//import YTSearch from 'youtube-api-search';
import youtube from '../../utilities/youtube';
import { fetchChannel } from './channels';
import { clearComments } from './comments';

import * as actionTypes from './actionTypes';


export const fetchVideos = (term) => {
    //console.log('actions: fetchVideos');
    //console.log('term:' + term);
    return dispatch => {
        dispatch(fetchVideosStart());

        const params = {
            type: 'search',
            params: {
                q: term,
                part: 'id',
                maxResults: '15'
            }
        }

        youtube(params, (data) => {
            //sconsole.log(data);
            dispatch(fetchVideosDetail(data.items));
        });
    };
}

export const fetchVideosDetail = (data) => {
    //console.log('actions: fetchVideosDetail');
    const ids = data.map(video=> {
        return video.id.videoId;
    })
    const videoIds = ids.join(',');

    return dispatch => {
        const params = {
            type: 'videos',
            params: {
                id: videoIds,
                part: 'snippet,contentDetails,statistics'
            }
        }
        youtube(params, (detail) => {     
            //console.log(detail);
            dispatch(fetchVideosSuccess(detail.items));
            dispatch(fetchChannel(detail.items[0].snippet.channelId));
            dispatch(clearComments());
        });
    }
}

export const fetchVideosStart = () => {
    //console.log('actions: fetchVideosStart')
    return {
        type: actionTypes.FETCH_VIDEOS_START,
        loading: true
    }
}

export const fetchVideosSuccess = (fetchedVideos) => {
    //console.log('actions: fetchVideosSuccess')
    return {
        type: actionTypes.FETCH_VIDEOS_SUCCESS,
        videos: fetchedVideos
    }
}

export const selectVideo = (selectedVideo) => {
    //console.log('actions: selectVideo')
    return dispatch => {
        dispatch(selectVideoSuccess(selectedVideo));
        dispatch(fetchChannel(selectedVideo.snippet.channelId));
        dispatch(clearComments());
    }
}

export const selectVideoSuccess = (selectedVideo) => {
    //console.log('actions: selectVideoSuccess')
    return {
        type: actionTypes.SELECT_VIDEO_SUCCESS,
        selectedVideo: selectedVideo
    }
}

export const extendDetail = () => {
    //console.log('actions: extendDetail')
    return {
        type: actionTypes.EXTEND_DETAIL,
    }
}
