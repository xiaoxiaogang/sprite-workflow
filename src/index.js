import { getType, guid } from './utils'
import { install } from 'sprite-extend-shapes'
import { Base } from './base'
import { Step, Link } from './plugin'
import * as spritejs from 'spritejs'
const { Scene, Layer } = spritejs;
const _render = Symbol('render');
const _uid = Symbol('uid');
spritejs.use(install);

class SpriteWorkflow extends Base {
  constructor(attrs) {
    super(attrs);
    /*****
  * selector:css选择器
  * size:canvas大小
  * steps:步骤数据存储位置
  * links:连接线数据存储位置
  * **/
    this.attr(Object.assign({
      'selector': '',
      'size': [ 600, 400 ],
      'steps': [],
      'links': []
    }, attrs));
    const { selector, size } = this.attr();
    const scene = new Scene(selector, {
      viewport: this.attr('size'),
      displayRatio: 'auto'
    })
    this.layer = scene.layer();
    this.draw()
  }
  draw() {
    const { steps, links } = this.attr();
    steps.forEach(object => {
      addStep(object)
    });
  }
  addStep(object) {
    let steps = this.attr('steps');
    object[ _uid ] = guid();
    steps.push(object);
    let $step = new Step(object)
    $step[ _uid ] = object[ _uid ];
    let render = object.type;
    if (render && getType(render) === 'function') {
      draw($step);
    } else {
      let $dom = $step.draw();
      this.layer.append($dom);
      //this.append($dom);
    }
  }
  addLink(object) {
    let links = this.attr('links');
    links.push(object);
    let draw = object.type;
    if (draw && getType(draw) === 'function') {
      draw(this);
    } else {
      this.append(new Link(object).draw());
    }
  }
}
export { SpriteWorkflow }