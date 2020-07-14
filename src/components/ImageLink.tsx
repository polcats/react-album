import React from 'react';
import { Link } from 'react-router-dom';
import { ImageView } from './Image';

interface ImageLinkProps {
  index: number;
  width: number;
  height: number;
  className: string;
  src: string;
  author: string;
}

export const ImageLinkView = (props: ImageLinkProps) => {
  return (
    <Link to={`image/${props.index}`}>
      <ImageView {...props} />
    </Link>
  );
};
