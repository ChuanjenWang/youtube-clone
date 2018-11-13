import React from 'react';

const backdrop = (props) => {
    const backdropClass = ['backdrop-dark', props.show ? 'backDropOpen' : 'backDropClose'];
    
    return (
        <div className={backdropClass.join(' ')} onClick={props.clicked}>

        </div>
    )
}

export default backdrop;