import { model, Model, prop } from 'mobx-keystone';
import { ImageModel } from '../models/ImageModel';

@model('albumApp/PhotoViewerModel')
export class PhotoViewerModel extends Model({
  image: prop<ImageModel>({ setterAction: true }),
}) {}
