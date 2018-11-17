import React from 'react';

import styles from './comment.module.scss';
import { dateDiffText } from '../../../utilities/date';

const comment = (props) => {
    return (
        <div className={styles.comment}>
            <div className={styles.comment__iconbox}>
                <div className={styles.comment__icon}>
                    <img src={props.iconUrl} alt="icon" />
                </div>
            </div>
            <div className={styles.comment__mainbox}>
                <div className={styles.comment__title}>
                    {props.authorName}
                    <span className={styles.comment__publish}>{ dateDiffText(new Date(props.updateDate), new Date())}</span>
                </div>
                <div className={styles.comment__main}>
                    <div className={styles.comment__inner}>
                        {props.displayText}
                    </div>
                
                </div>
                <div className={styles.comment__social}>
                    <svg className={styles.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 28 28">
                        <title>thumbs-up</title>
                        <path d="M23.016 9.984l-0.047 0.094h0.047v1.922c0 0.281-0.047 0.516-0.141 0.75l-3.047 7.031c-0.281 0.703-0.984 1.219-1.828 1.219h-9c-1.078 0-2.016-0.938-2.016-2.016v-9.984c0-0.563 0.234-1.031 0.609-1.406l6.563-6.609 1.078 1.078c0.281 0.281 0.422 0.609 0.422 1.031v0.328l-0.984 4.594h6.328c1.078 0 2.016 0.891 2.016 1.969zM0.984 21v-12h4.031v12h-4.031z"></path>
                    </svg>
                    <span className={styles.comment__count}>{props.likeCount !== 0 ? props.likeCount : '' }</span>
                    <svg className={styles.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 28 28">
                        <title>thumbs-down</title>
                        <path d="M18.984 3h4.031v12h-4.031v-12zM15 3c1.078 0 2.016 0.938 2.016 2.016v9.984c0 0.563-0.234 1.031-0.609 1.406l-6.563 6.609-1.078-1.078c-0.281-0.281-0.422-0.609-0.422-1.031v-0.328l0.984-4.594h-6.328c-1.078 0-2.016-0.891-2.016-1.969l0.047-0.094h-0.047v-1.922c0-0.281 0.047-0.516 0.141-0.75l3.047-7.031c0.281-0.703 0.984-1.219 1.828-1.219h9z"></path>
                    </svg>
                    <span className={styles.comment__reply}>REPLY</span>
                </div>
            </div>
        </div>
    );
}

export default comment;
