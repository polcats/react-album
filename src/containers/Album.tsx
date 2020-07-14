import React from 'react';
import { observer } from 'mobx-react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  MasonryCellProps,
} from 'react-virtualized';
import { AppModel } from '../models/AppModel';
import { ImageProps } from '../components/Image';
import { ImageLinkView } from '../components/ImageLink';

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
    columnCount: 4,
    columnWidth,
    spacer: 10,
  });
  masonryRef.current?.clearCellPositions();
};

export const Album = observer(({ store }: { store: AppModel }) => {
  const ImageRenderer = (props: MasonryCellProps) => {
    const { index, parent, style } = props;
    const image: ImageProps = store.album.images[props.index];
    const adjustedHeight: number =
      columnWidth * (image.height / image.width) || defaultHeight;
    return (
      <CellMeasurer cache={cache} index={index} key={index} parent={parent}>
        <div style={style}>
          <ImageLinkView
            index={index}
            src={image.download_url}
            author={image.author}
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
        cellCount={store.album.count}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={ImageRenderer}
        height={store.album.count * defaultHeight}
        width={1650}
      />
      <div id="loader-wrap">
        {store.album.loading ? (
          <span className="loader">Loading images..</span>
        ) : (
          <>
            {store.album.failedLoading ? (
              <span className="failed-loader">Failed to load new images..</span>
            ) : (
              ''
            )}
            <input
              type="button"
              value="Load More"
              onClick={() => {
                store.album.loadItems();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
});
