import { model, Model, prop } from 'mobx-keystone';
import { ImageModel } from './ImageModel';
import { AlbumModel } from './AlbumModel';
import { PhotoViewerModel } from './PhotoViewerModel';

@model('albumApp/AppModel')
export class AppModel extends Model({
  album: prop<AlbumModel>(),
  viewer: prop<PhotoViewerModel>(),
}) {}
