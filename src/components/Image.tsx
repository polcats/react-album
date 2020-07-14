import React, { Props } from 'react';
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
      style={{
        width: props.width ? props.width : '',
        height: props.height ? props.height : '',
      }}
      alt={`By ${props.image.author}`}
    />
  );
};
