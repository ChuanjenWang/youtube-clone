import React from 'react';

import VideoPlayer from '../../UI/VideoPlayer/VideoPlayer';
import VideoDetail from '../../UI/VideoDetail/VideoDetail';

const primary = ({video}) => {
    console.log(video);
    return (
        <div className="primary">
            <VideoPlayer video={video}></VideoPlayer>
            <VideoDetail video={video}></VideoDetail>
        </div>
    )
}

export default primary;  