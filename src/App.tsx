import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Album, resetAlbum } from './containers/Album';
import { PhotoViewer } from './containers/PhotoViewer';
import { createAppStore } from './store/store';
import './App.css';

export const App = () => {
  const appStore = createAppStore();

  useEffect(() => {
    appStore.album.loadItems();
  }, [appStore]);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
