import React from 'react';

export interface ImageProps {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface ImageViewProps {
  width?: number;
  height?: number;
  className: string;
  image: ImageProps;
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
