import React from 'react';

import VideoPanels from '../../UI/VideoPanels/VideoPanels';

const secondary = (props) => {
    return (
        <div className="secondary">
            <VideoPanels videos={props.videos} selected={props.selected}></VideoPanels>
        </div>
    )
}

export default secondary;  