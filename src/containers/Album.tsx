import React from 'react';
import { observer } from 'mobx-react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  MasonryCellProps,
} from 'react-virtualized';

import { ImageModel } from '../models/ImageModel';
import { ImageLinkView } from '../components/ImageLink';
import { AlbumModel } from '../models/AlbumModel';

const columnWidth: number = 400;
const defaultHeight: number = 400;
const defaultWidth: number = columnWidth;

const cache = new CellMeasurerCache({
  defaultHeight,
  defaultWidth,
  fixedWidth: true,
});

const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: 4,
  columnWidth,
  spacer: 10,
});

const masonryRef: React.RefObject<Masonry> = React.createRef();
export const resetAlbum = () => {
  cache.clearAll();
  cellPositioner.reset({
    columnCount: 5,
    columnWidth,
    spacer: 10,
  });
  masonryRef.current?.clearCellPositions();
};

export const Album = observer(({ store }: { store: AlbumModel }) => {
  const ImageRenderer = (props: MasonryCellProps) => {
    const image: ImageModel = store.images[props.index];
    const adjustedHeight: number =
      columnWidth * (image.height / image.width) || defaultHeight;
    return (
      <CellMeasurer
        data={store}
        cache={cache}
        index={props.index}
        key={props.index}
        parent={props.parent}
      >
        <div style={props.style}>
          <ImageLinkView
            index={props.index}
            image={image}
            width={columnWidth}
            height={adjustedHeight}
            className="preview"
          />
        </div>
      </CellMeasurer>
    );
  };

  return (
    <div id="mason-wrap">
      <Masonry
        ref={masonryRef}
        autoHeight={true}
        cellCount={store.images.length}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={ImageRenderer}
        height={store.images.length * defaultHeight}
        width={1650}
      />
      <div id="loader-wrap">
        {store.loading ? (
          <span className="loader">Loading images..</span>
        ) : (
          <input
            type="button"
            value="Load More"
            onClick={() => {
              store.loadItems();
            }}
          />
        )}
      </div>
    </div>
  );
});
