import React, { Component } from 'react';
//import YTSearch from 'youtube-api-search';
//import _ from 'lodash';

import './App.css'; 
import Layout from './components/Layout/Layout/Layout';
import Primary from './components/Layout/Primary/Primary';
import Secondary from './components/Layout/Secondary/Secondary';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     videos: [],
  //     selectedVideo: null
  //   };

  //   this.videoSearchHandler('meal prep')
  // }
  
  // videoSelectedHandler = (selectedVideo) => {
  //   this.setState({selectedVideo: selectedVideo});
  // }

  // videoSearchHandler = (term) => {
  //   YTSearch({key: API_KEY.YOUTUBE_API, term: term}, (data) => {
  //     this.setState({ 
  //       videos: data,
  //       selectedVideo: data[0],
  //     });
  //     //console.log(data);
  //   });        
  // }

  render() {
    // const videoSearch = _.debounce(term => this.videoSearchHandler(term) , 300);
    // return (
    //   <Layout searchTermChange={videoSearch}>
    //     <Primary video={this.state.selectedVideo} />
    //     <Secondary videos={this.state.videos} selected={this.videoSelectedHandler} />
    //   </Layout>
    // );
    return (
      <Layout>
        <Primary />
        <Secondary />
      </Layout>
    );
  }
}

export default App;
