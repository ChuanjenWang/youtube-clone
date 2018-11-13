import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Comments from '../Comments/comments';

class VideoDetail extends Component {
    state = {
        extended: false
    }

    extendDetailHandler = () => {
        this.setState(preState => { 
           return { 
               extended: !preState.extended,
               stringlength: 200
            };
        });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScrollHandler, false);
        window.addEventListener("click", this.closeBoxHandler, false);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScrollHandler, false);
        window.removeEventListener("click", this.closeBoxHandler, false);
    }

    onScrollHandler = () =>  {
        const nearComments = window.scrollY >= 140;
        const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

        if (nearComments && !this.props.fetchingComments && this.props.comments.length === 0) {
            //console.log('fetching comments first!');
            if(this.props.selectedVideo && !this.props.nextPage) {
                this.props.onFetchComments(this.props.selectedVideo.id, this.props.nextPage, this.props.sort);
            }
        }
        
        if (nearBottom && !this.props.fetchingComments && this.props.nextPage) {
            //console.log('fetching comments next page!');
            if(this.props.selectedVideo && this.props.nextPage) {
                this.props.onFetchComments(this.props.selectedVideo.id, this.props.nextPage, this.props.sort);
            }
        }
    }

    showSortPanelHandler = () => {
        console.log('showSortPanelHandler');
        this.props.onShowSort();
    }
    switchSortHandler = (sort) => {
        //console.log('switchSortHandler:+sort' + sort);
        //console.log('switchSortHandler:+nextPage' + this.props.nextPage);
        this.props.onSwitchSort(this.props.selectedVideo.id, sort);
    }
    closeBoxHandler = () => {
        if(this.props.showSort && !this.props.inSortBox) {
            this.props.onCloseSortBox();
        }
    }
    inSortBoxHandler = () => {
        this.props.onInSortBox();
    }
    outSortBoxHandler = () => {
        this.props.onOutSortBox();
    }
    
    render() {
        console.log("video detail render");
        
        const loader = <div></div>;
        
        if(!this.props.selectedVideo || !this.props.selectedChannel) return loader;

        let detail = this.props.selectedVideo.snippet.description.substring(0, this.state.extended ? this.props.selectedVideo.snippet.description.length : 287);
        let publishDate =  new Date(this.props.selectedVideo.snippet.publishedAt);
        
        return (
            <div className="video-detail" onScroll={() => this.onScrollHandler}>
                <div className="video-detail__left">
                    <div className="video-detail__channel-icon">
                         <img src={this.props.selectedChannel.items[0].snippet.thumbnails.default.url} alt="icon" /> 
                    </div>
                </div>
                <div className="video-detail__right">
                    <div>
                        <div className="video-detail__channel-bref">
                            <div className="video-detail__channel-title">{this.props.selectedVideo.snippet.channelTitle}</div>
                            <div className="video-detail__channel-time">Published on {publishDate.toDateString().substring(4, publishDate.toDateString().length)}</div>
                        </div>
                    </div>
                </div>
                <div className="video-detail__content">
                    {detail}
                    <p className="video-detail__show" onClick={this.extendDetailHandler}>
                        {this.state.extended ? <span>SHOW LESS</span>: <span>SHOW MORE</span>}
                    </p>
                </div>
                <Comments items={this.props.comments} 
                            total={this.props.selectedVideo.statistics.commentCount} 
                            showSort = {this.props.showSort}
                            showSortHandler={this.showSortPanelHandler}
                            switchSortHandler={(sort) => this.switchSortHandler(sort)}
                            fetching={this.props.fetchingComments}
                            reloading={this.props.reloading}
                            inSortBoxHandler ={ this.inSortBoxHandler}
                            outSortBoxHandler={this.outSortBoxHandler}
                            />
            </div>
        )
    }
}   

const mapStateToProps = state => {
    return {
        selectedVideo: state.videos.selectedVideo,
        selectedChannel: state.channels.selectedChannel,
        comments: state.comments.list,
        fetchingComments: state.comments.fetching,
        nextPage: state.comments.nextPage,
        showSort: state.comments.showSort,
        sort: state.comments.sort,
        reloading: state.comments.reloading,
        inSortBox: state.comments.inSortBox
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchChannel: (id) => dispatch(actions.fetchChannel(id)),  
        onFetchComments: (id, nextPage, sort) => dispatch(actions.fetchComments(id, nextPage, sort)),
        onShowSort: () => dispatch(actions.switchSortBox()),  
        onSwitchSort: (id, sort, nextPage) => dispatch(actions.switchOrder(id, sort, nextPage)),
        onCloseSortBox: () => dispatch(actions.closeSortBox()),
        onInSortBox: () => dispatch(actions.inSortBox()),
        onOutSortBox: () => dispatch(actions.outSortBox())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoDetail);