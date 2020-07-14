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
  const { className, width, height } = props;
  const { download_url, author } = props.image;

  return (
    <img
      className={className}
      src={download_url}
      style={{
        width: width ? width : '',
        height: height ? height : '',
      }}
      alt={`By ${author}`}
    />
  );
};
