import { model, Model, prop } from 'mobx-keystone';

@model('albumApp/PhotoViewerModel')
export class PhotoViewerModel extends Model({
  index: prop(Number || undefined, { setterAction: true }),
}) {}
