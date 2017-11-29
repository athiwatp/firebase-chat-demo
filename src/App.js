import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import ChatContainer from './containers/chat';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChatContainer />
      </Provider>
    );
  }
}

export default App;
