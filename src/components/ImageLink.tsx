import React from 'react';
import { Link } from 'react-router-dom';
import { ImageModel } from '../models/ImageModel';
import { ImageView } from './Image';

interface ImageLinkProps {
  index: number;
  width: number;
  height: number;
  className: string;
  image: ImageModel;
}

export const ImageLinkView = (props: ImageLinkProps) => {
  return (
    <Link to={`image/${props.index}`}>
      <ImageView {...props} />
    </Link>
  );
};
