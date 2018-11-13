import React from 'react';

const videoPanel = ({video, selected}) => {
    if(video === null || selected === null) {
        return ( 
            <div>
                <div className="video-panel">
                    <div className="video-panel__left">
                    <div className="video-panel__left__img__loading"></div>
                    </div>
                    <div className="video-panel__right">
                        <div className="video-panel__title__loading"></div>
                        <div className="video-panel__channel__loading"></div>
                        <div className="video-panel__views__loading"></div>
                    </div>
                </div>
            </div>
        )
    }
    const imageUrl = video.snippet.thumbnails.medium.url;
    const viewscount = viewsCountHandler(video.statistics.viewCount);
    const videoDuration = videoDuractionHandler(video.contentDetails.duration);

    return (
        <div className="video-panel" onClick={() => selected(video)}>            
            <div className="video-panel__left">
                <img src={imageUrl} alt={video.snippet.title} />  
                <div className="video-panel__duration">
                    {videoDuration}
                </div>
            </div>
            <div className="video-panel__right">
                <div className="video-panel__title">
                    {video.snippet.title}
                </div>
                <div className="video-panel__channel">
                    {video.snippet.channelTitle}
                </div>
                <div className="video-panel__views">
                    {viewscount} views
                </div>
            </div>
        </div>
    );
}

const viewsCountHandler = (vc) => {
    if(vc > 1000000) {
        return Math.round(vc / 1000000) + 'M';
    } else if(vc > 1000) {
        return Math.round(vc / 1000) + 'K';
    }else {
        return vc;
    }
}

const videoDuractionHandler = (du) => {
    const startM = du.indexOf('T') + 1;
    const endM = du.indexOf('M');
    const startS = du.indexOf('M') + 1;
    const endS = du.length-1;
    const mins = du.slice(startM, endM);
    const secs = du.slice(startS, endS).padEnd(2,'0');

    return secs === '' ?  `${mins}:00` : `${mins}:${secs}` ;
}

export default videoPanel;