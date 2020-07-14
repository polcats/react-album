import { model, Model, prop } from 'mobx-keystone';

@model('albumApp/ImageModel')
export class ImageModel extends Model({
  id: prop(String),
  author: prop(String),
  width: prop(Number),
  height: prop(Number),
  url: prop(String),
  download_url: prop(String),
}) {}
