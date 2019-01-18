import { Base } from './base'
import { Sprite, Polyline, Rect } from 'spritejs';
class Step extends Base {

  constructor(attrs, type) {
    super();
    this.attrs = Object.assign({}, attrs);
    /*内置的Step 类型，有 ['rect','circle','triangle','star','diamond'] */
    this.type = type || 'rect';
  }
  render() {
    let $rect = new Rect();
    $rect.attr({ size: [ 20, 20 ], bgcolor: '#f00' });
    this.append($rect);
    return this.container
  }
}

class Link extends Base {
  constructor(attrs, type) {
    super();
    /*属性，相关绘制属性等 */
    this.attrs = Object.assign({}, attrs);
    /*内置的Link 类型，有 ['solid','dash'] */
    this.type = type;
  }
  render() {
    let $link = new Polyline();
    $link.attr({ size: [ 20, 20 ], bgcolor: '#f00' });
    this.append($link);
    return this.container;
  }
}
export { Step, Link }
