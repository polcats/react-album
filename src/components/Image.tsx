import React from 'react';
import { ImageModel } from '../models/ImageModel';

interface ImageViewProps {
  width?: number;
  height?: number;
  className: string;
  image: ImageModel;
}

export const ImageView = (props: ImageViewProps) => {
  return (
    <img
      className={props.className}
      src={props.image.download_url}
      style={
        props.height && props.width
          ? {
              height: props.height,
              width: props.width,
            }
          : {}
      }
      alt={`By ${props.image.author}`}
    />
  );
};
