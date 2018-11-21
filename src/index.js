import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import * as appOperations from './modules/app/appOperations';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';  
import './index.css';
import Routes from './routes';
// import App from './layouts/Desk';
// import User from './user';
import store from './store/store';


store.subscribe(() => {
  const state = store.getState();
  const json = JSON.stringify(state);

  window.localStorage.setItem('redux', json);
});

class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    store.dispatch(appOperations.init());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
          {/* <App /> */}
          {/* <User /> */}
        </BrowserRouter>
      </Provider>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
