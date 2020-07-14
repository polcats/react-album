import { registerRootStore } from 'mobx-keystone';
import { AlbumModel } from '../models/AlbumModel';

export const createAlbumStore = (): AlbumModel => {
  const store = new AlbumModel({
    images: [],
    loading: false,
    failedLoading: false,
    currentPage: 1,
    limit: 25,
  });
  registerRootStore(store);
  return store;
};
