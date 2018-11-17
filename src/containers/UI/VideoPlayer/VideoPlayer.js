import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './VideoPlayer.module.scss';

class videoPlayer extends Component {
    render() {
        if (!this.props.selectedVideo) {
            return (
            <div className={styles.videoPlayer}>
                <div className={styles.videoPlayer__loading}>
                    <div className={styles.embedResponsive__loading}></div>
                </div>
                <div className={styles.videoPlayer__title__loading}></div>
                <div className={styles.videoPlayer__info__loading}>
                    <div className={styles.videoPlayer__views__loading}></div>
                    <div className={styles.videoPlayer__social__loading}></div>
                </div>
            </div>);
        }
        
        const videoId = this.props.selectedVideo.id;
        const url = `https://www.youtube.com/embed/${videoId}`;
        const viewsCount = formatNumberHandler(this.props.selectedVideo.statistics.viewCount);
        const likeCount = numnerShortHandler(this.props.selectedVideo.statistics.likeCount);
        const disLikeCount = numnerShortHandler(this.props.selectedVideo.statistics.dislikeCount);
        const channelTitle = this.props.selectedVideo.snippet.channelTitle;
        let stylesSocialWordsShare = [styles.videoPlayer__social__words, styles.videoPlayer__social__words_share];
        let stylesSocialWordsAdd = [styles.videoPlayer__social__words, styles.videoPlayer__social__words_add];
        

        return (
            <div className={styles.videoPlayer}>
                <div className={styles.embedResponsiveContainer}>
                <div className={styles.embedResponsive}>
                    <iframe className={styles.embedResponsive__item} src={url} allowFullScreen></iframe>
                </div>
                </div>
                <div className="container_mobile">
                    <div className={styles.videoPlayer__title}>
                    {this.props.selectedVideo.snippet.title}
                </div>
                    <div className={styles.videoPlayer__info}>
                    <div className={styles.videoPlayer__channelTitle}>
                        {channelTitle}
                    </div>
                    <div className={styles.videoPlayer__views}>
                        {viewsCount} views 
                    </div>
                    <div className={styles.videoPlayer__social}>
                        <ul>
                            <li className={styles.videoPlayer__social_like}>
                                <svg className={styles.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 2 22 22">
                                    <title>thumbs-up</title>
                                    <path d="M23.016 9.984l-0.047 0.094h0.047v1.922c0 0.281-0.047 0.516-0.141 0.75l-3.047 7.031c-0.281 0.703-0.984 1.219-1.828 1.219h-9c-1.078 0-2.016-0.938-2.016-2.016v-9.984c0-0.563 0.234-1.031 0.609-1.406l6.563-6.609 1.078 1.078c0.281 0.281 0.422 0.609 0.422 1.031v0.328l-0.984 4.594h6.328c1.078 0 2.016 0.891 2.016 1.969zM0.984 21v-12h4.031v12h-4.031z"></path>
                                </svg>
                                <span className={styles.videoPlayer__social__words}>{likeCount}</span>
                            </li>
                            <li className={styles.videoPlayer__social_dislike}>
                                <svg className={styles.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="1 2 22 22">
                                    <title>thumbs-down</title>
                                    <path d="M18.984 3h4.031v12h-4.031v-12zM15 3c1.078 0 2.016 0.938 2.016 2.016v9.984c0 0.563-0.234 1.031-0.609 1.406l-6.563 6.609-1.078-1.078c-0.281-0.281-0.422-0.609-0.422-1.031v-0.328l0.984-4.594h-6.328c-1.078 0-2.016-0.891-2.016-1.969l0.047-0.094h-0.047v-1.922c0-0.281 0.047-0.516 0.141-0.75l3.047-7.031c0.281-0.703 0.984-1.219 1.828-1.219h9z"></path>
                                </svg>
                                <span className={styles.videoPlayer__social__words}>{disLikeCount} </span>
                            </li>
                            <li>
                                <svg className={styles.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 2 20 20">
                                    <title>forward</title>
                                    <path d="M12 11.874v4.357l7-6.69-7-6.572v3.983c-8.775 0-11 9.732-11 9.732 2.484-4.388 6.237-4.81 11-4.81z"></path>
                                </svg>
                                <span className={stylesSocialWordsShare.join(' ')}>SHARE</span>
                            </li>
                            <li>
                                <svg className={styles.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 2 20 20">
                                    <title>forward</title>
                                    <path d="M2.016 15.984v-1.969h7.969v1.969h-7.969zM18 14.016h3.984v1.969h-3.984v4.031h-2.016v-4.031h-3.984v-1.969h3.984v-4.031h2.016v4.031zM14.016 6v2.016h-12v-2.016h12zM14.016 9.984v2.016h-12v-2.016h12z"></path>
                                </svg>
                                <span className={stylesSocialWordsAdd.join(' ')}>SAVE</span>
                            </li>
                            <li>
                                <svg className={styles.icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 2 20 20">
                                    <title>dots-three-horizontal</title>
                                    <path d="M10.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2zM3.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.986 2.199-2.2s-0.984-2.2-2.199-2.2zM17.001 7.8c-1.215 0-2.201 0.985-2.201 2.2s0.986 2.2 2.201 2.2c1.215 0 2.199-0.985 2.199-2.2s-0.984-2.2-2.199-2.2z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}


const formatNumberHandler = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const numnerShortHandler = (num) => {
    if(num > 1000000) {
        return Math.round(num / 1000000) + 'M';
    } else if(num > 1000) {
        return Math.round(num / 1000) + 'K';
    }else {
        return num;
    }
}

const mapStateToProps = state => {
    return {
        selectedVideo: state.videos.selectedVideo
    }
}

export default connect(mapStateToProps)(videoPlayer);