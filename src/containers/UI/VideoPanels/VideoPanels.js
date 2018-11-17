import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoPanel from '../../../components/UI/VideoPanels/VideoPanel/VideoPanel';
import * as actions from '../../../store/actions';

class VideoPanels extends Component {
    
    componentDidMount () {
        //console.log('VideoPanels componentDidMount');
        this.props.onFetchVideos(this.props.term);
    }

    selectVideoHandler = (video) => {
        this.props.onSelectVideo(video);
    }

    render() {
        let videolist = null;
        let loader = [];
        
        for(let i=0; i<10; i++) {
            loader.push(<VideoPanel video={null} selected={null} key={i} />)
        }
    
        if(this.props.videos) {
            videolist = this.props.videos.map((video, i) => {
                return <VideoPanel video={video} key={video.etag} selected={this.selectVideoHandler} />
            })
        }

        return (
            <div className="video-panels">
                { this.props.videos ? videolist : loader}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        videos: state.videos.videos,
        term: state.videos.term
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchVideos: (term) => dispatch(actions.fetchVideos(term)),
        onSelectVideo: (video) => dispatch(actions.selectVideo(video))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPanels);