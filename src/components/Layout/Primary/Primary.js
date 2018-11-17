import React from 'react';

import styles from './Primary.module.scss';
import VideoPlayer from '../../../containers/UI/VideoPlayer/VideoPlayer';


const primary = ({video}) => {
    //console.log(video);
    return (
        <div className={styles.primary}>
            <VideoPlayer video={video}></VideoPlayer>
          
        </div>
    )
}

export default primary;  