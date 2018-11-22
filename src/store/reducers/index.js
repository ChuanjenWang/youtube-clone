import { combineReducers } from 'redux'; 

import videosReducer from '../reducers/videos';
import channelsReducer from '../reducers/channels';
import commentsReducer from '../reducers/comments';
import searchReducer from '../reducers/search';

const rootReducer = combineReducers({
    videos: videosReducer,
    channels: channelsReducer,
    comments: commentsReducer,
    search: searchReducer
})

export default rootReducer