import { model, Model, prop } from 'mobx-keystone';

@model('albumApp/ImageModel')
export class ImageModel extends Model({
  id: prop(String, { setterAction: true }),
  author: prop(String, { setterAction: true }),
  width: prop(Number, { setterAction: true }),
  height: prop(Number, { setterAction: true }),
  url: prop(String, { setterAction: true }),
  download_url: prop(String, { setterAction: true }),
}) {}
