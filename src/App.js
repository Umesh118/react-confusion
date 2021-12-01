import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main></Main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
