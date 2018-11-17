import React from 'react';

import styles from './Backdrop.module.scss';

const backdrop = (props) => {
    const backdropClass = [styles.backdrop_dark, props.show ? styles.backDropOpen : styles.backDropClose];
    
    return (
        <div className={backdropClass.join(' ')} onClick={props.clicked}>

        </div>
    )
}

export default backdrop;