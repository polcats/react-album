import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Album, resetAlbum } from './containers/Album';
import { PhotoViewer } from './containers/PhotoViewer';
import { createAppStore } from './store/store';
import './App.css';

const App = () => {
  const appStore = createAppStore();

  useEffect(() => {
    appStore.album.loadItems();
  }, [appStore]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (appStore.album.count) {
              resetAlbum();
            }
            return <Album store={appStore} />;
          }}
        />
        <Route
          exact
          path="/image/:index"
          render={(props) => {
            appStore.viewer.index = props.match.params.index;
            return <PhotoViewer store={appStore} />;
          }}
        />
        <Route>
          <h1>
            Ooops! You're lost. You should go <Link to="/">back</Link>
          </h1>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
