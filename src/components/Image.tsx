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
  src: string;
  author: string;
}

export const ImageView = (props: ImageViewProps) => {
  const { className, width, height, src, author } = props;
  return (
    <img
      className={className}
      src={src}
      style={{
        width: width ? width : '',
        height: height ? height : '',
      }}
      alt={`By ${author}`}
    />
  );
};
