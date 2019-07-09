import React, { Component } from 'react';
import './App.scss';


import DocumentTitle  from 'react-document-title';  // 动态修改Title

import LayOut from './components/LayOut'

class App extends Component {
  render() {
    return (
      <DocumentTitle title="省钱网">
        <div className="App">
          <LayOut></LayOut>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
