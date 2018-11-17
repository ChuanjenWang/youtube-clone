import gapi from 'gapi-client';

import * as API_KEY from './apiKeys'; 

function start(p, callback) {
    
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': API_KEY.YOUTUBE_API,
      // Your API key will be automatically added to the Discovery Document URLs.
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    }).then(function() {
      // 3. Initialize and make the API request.

      switch(p.type) {
        case 'search':
            return gapi.client.youtube.search.list(p.params);
        case 'videos':
            return gapi.client.youtube.videos.list(p.params);
        case 'channels':
            return gapi.client.youtube.channels.list(p.params);
        case 'comments':
            return gapi.client.youtube.commentThreads.list(p.params);
        default:
          return null;
      }
      
    }).then(function(response) {
      callback(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
};

const youtube = (params, callback) =>{
    gapi.load('client', () => start(params, callback));   
}

export default youtube;

