import React from 'react';

import styles from './Tertiary.module.scss';
import VideoDetail from '../../../containers/UI/VideoDetail/VideoDetail';

const tertiary = ({video}) => {
    return (
        <div className={styles.tertiary}>
            <div className="container_mobile">
                 <VideoDetail video={video}></VideoDetail>
            </div>
        </div>
    )
}

export default tertiary;  