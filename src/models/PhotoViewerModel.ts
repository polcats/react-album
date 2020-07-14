import { model, Model, prop } from 'mobx-keystone';
import { ImageModel } from './ImageModel';

@model('albumApp/PhotoViewerModel')
export class PhotoViewerModel extends Model({
  image: prop<ImageModel>({ setterAction: true }),
}) {}
