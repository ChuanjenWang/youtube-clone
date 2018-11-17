import React from 'react';

import styles from './ToggleMenu.module.scss';
const toggleMenu = (props) => {
    return (
        <div className={styles.toggleMenu} onClick={props.sideDrawerToggle}>
            <svg className="icon menu" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -2 20 20">
                <title>menu</title>
                    <path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"></path>
            </svg>  
        </div>
    )
}

export default toggleMenu;
