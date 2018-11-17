import React, { Component } from 'react';
//import YTSearch from 'youtube-api-search';
//import _ from 'lodash';

//import './App.css';
import './App.scss'; 
import Layout from './containers/Layout/Layout/Layout';
import Primary from './components/Layout/Primary/Primary';
import Secondary from './components/Layout/Secondary/Secondary';
import Tertiary from './components/Layout/Tertiary/Tertiary';

class App extends Component {
  render() {
  
    return (
      <Layout>
        <Primary />
        <Secondary />
        <Tertiary />
      </Layout>
    );
  }
}

export default App;
