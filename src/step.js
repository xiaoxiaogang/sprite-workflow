import { Base } from './base'
import { draggable } from 'sprite-draggable'
import { refreshLink } from './functions'
import { newObj, getType } from './utils'
import { _render } from './symbolNames';
import { linkExtendtion } from './stepExtendtion'
class Step extends Base {
  constructor(attrs, option) {
    super(attrs);
    this.attr(newObj(attrs));
    const { pos } = attrs;
    this.container.attr({ pos, zIndex: 100 });
    this.draggable();
    /* 内置的Step 类型，有 ['rect','circle','triangle','star','diamond'],默认rect */
    this.drawType = attrs.drawType || 'rect';
    this.draw = linkExtendtion[ this.drawType ].draw;
    this.on('dragstart', (e) => {
      this.container.attr({ zIndex: 101 });
    });
    this.on('drag', (e) => {
      this.container.attr({ zIndex: 101 });
      refreshLink(this);
    });
    this.on('dragend', (e) => {
      this.container.attr({ zIndex: 100 });
    });
    // 如果外部重写draw方法，用外部方法覆盖,并将step的类型设置成custom
    if (getType(option.draw) === 'function') {
      this.draw = option.draw;
      this.drawType = 'custom';
    }
  }
  draggable(option) {
    draggable(this.container, option);
  }
  /**
   * step被workflow调用时渲染方法，通过调用自己的draw()来实现渲染，并且返回container
   */
  [ _render ]() {
    this.draw();
    refreshLink(this);
    return this.container
  }
  draw() {
    console.error('you must overwrite this function step.draw()')
  }
}
export { Step }
