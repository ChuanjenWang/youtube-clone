import React from 'react';

import styles from './NavigationItems.module.scss';
const navigationItems = (props) => {
    return (
        <ul className={styles.navigationItems}>
            <li onClick={ props.clicked }>
                <span className={styles.navigationItems__icon}>
                    <svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20">
                        <title>home</title>
                        <path d="M9.984 20.016h-4.969v-8.016h-3l9.984-9 9.984 9h-3v8.016h-4.969v-6h-4.031v6z"></path>
                    </svg>
                </span>
                <span className={styles.navigationItems__title}>Home</span>
            </li>
        </ul>
    )
}

export default navigationItems;