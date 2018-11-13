import { combineReducers } from 'redux'; 

import videosReducer from '../reducers/videos';
import channelsReducer from '../reducers/channels';
import commentsResucer from '../reducers/comments';


const rootReducer = combineReducers({
    videos: videosReducer,
    channels: channelsReducer,
    comments: commentsResucer
})

export default rootReducer