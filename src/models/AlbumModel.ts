import { computed } from 'mobx';
import { model, Model, modelAction, prop } from 'mobx-keystone';
import { ImageModel } from './ImageModel';

@model('albumApp/Album')
export class AlbumModel extends Model({
  images: prop<ImageModel[]>(() => [], { setterAction: true }),
  loading: prop(Boolean, { setterAction: true }),
  failedLoading: prop(Boolean, { setterAction: true }),
  currentPage: prop(Number, { setterAction: true }),
  limit: prop(Number, { setterAction: true }),
}) {
  private src: String = 'https://picsum.photos/v2/list';

  @computed
  get count() {
    return this.images.length;
  }

  @modelAction
  loadItems = () => {
    this.loading = true;
    fetch(`${this.src}?page=${this.currentPage}&limit=${this.limit}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.updateImages(result);
          this.currentPage++;
          this.failedLoading = false;
          this.loading = false;
        },
        (error) => {
          this.failedLoading = true;
          this.loading = false;
        },
      );
  };

  @modelAction
  updateImages = (newImages: Array<ImageModel>) => {
    newImages = newImages.filter((img) => this.images.indexOf(img) < 0);
    this.images = this.images.concat(newImages);
  };
}
