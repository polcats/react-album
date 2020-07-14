import React from 'react';
import { Link } from 'react-router-dom';
import { ImageProps } from '../components/Image';
import { ImageView } from './Image';

interface ImageLinkProps {
  index: number;
  width: number;
  height: number;
  className: string;
  image: ImageProps;
}

export const ImageLinkView = (props: ImageLinkProps) => {
  return (
    <Link to={`image/${props.index}`}>
      <ImageView {...props} />
    </Link>
  );
};
