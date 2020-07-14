import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { ImageProps } from '../components/Image';
import { ImageView } from '../components/Image';
import { AppModel } from '../models/AppModel';

export const PhotoViewer = observer(({ store }: { store: AppModel }) => {
  const image: ImageProps = store.album.images[store.viewer.index];

  return (
    <div className="image-detail">
      {image === undefined ? (
        <>
          <h1>This image does not exist.</h1>
          You should go <Link to="/">Back</Link>
        </>
      ) : (
        <div>
          <Link to="/">Back</Link>
          <h1>Picture by {image.author}</h1>
          <ImageView
            src={image.download_url}
            author={image.author}
            className="view"
          />
        </div>
      )}
    </div>
  );
});
