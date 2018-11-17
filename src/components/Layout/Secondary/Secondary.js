import React from 'react';

import styles from './Secondary.module.scss';
import VideoPanels from '../../../containers/UI/VideoPanels/VideoPanels';

const secondary = (props) => {
    return (
        <div className={styles.secondary}>
            <div className="container_mobile">
                <VideoPanels videos={props.videos} selected={props.selected}></VideoPanels>
            </div>
        </div>
    )
}

export default secondary;  