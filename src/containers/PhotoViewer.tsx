import React from 'react';
import { Link } from 'react-router-dom';
import { ImageModel } from '../models/ImageModel';
import { AlbumModel } from '../models/AlbumModel';
import { ImageView } from '../components/Image';

interface PhotoViewerProps {
  index: number;
  store: AlbumModel;
}

export const PhotoViewer = (props: PhotoViewerProps) => {
  const image: ImageModel = props.store.images[props.index];

  return (
    <div className="image-detail">
      {image === undefined ? (
        <>
          <h1>This image does not exist.</h1>
          You should go <Link to="/">Back</Link>
        </>
      ) : (
        <>
          <Link to="/">Back</Link>
          <h1>Picture by {image.author}</h1>
          <ImageView image={image} className="view" />
        </>
      )}
    </div>
  );
};
