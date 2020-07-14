import { registerRootStore } from 'mobx-keystone';
import { AppModel } from '../models/AppModel';
import { AlbumModel } from '../models/AlbumModel';
import { PhotoViewerModel } from '../models/PhotoViewerModel';

export const createAppStore = (): AppModel => {
  const store = new AppModel({
    album: new AlbumModel({
      images: [],
      loading: false,
      failedLoading: false,
      currentPage: 1,
      limit: 25,
    }),
    viewer: new PhotoViewerModel({ index: undefined }),
  });
  registerRootStore(store);
  return store;
};
