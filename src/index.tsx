import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Album, resetAlbum } from './containers/Album';
import { PhotoViewer } from './containers/PhotoViewer';
import { createAlbumStore } from './store/store';
import './App.css';

const App = () => {
  const [albumStore] = useState(() => createAlbumStore());
  albumStore.loadItems();

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (albumStore.count) {
              resetAlbum();
            }

            return <Album store={albumStore} />;
          }}
        />
        <Route
          exact
          path="/image/:index"
          render={(props) => {
            return (
              <PhotoViewer
                store={albumStore}
                index={props.match.params.index}
              />
            );
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
