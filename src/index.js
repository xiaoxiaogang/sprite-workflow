import { getType, guid } from './utils'
import { install } from 'sprite-extend-shapes'
import { BaseNode } from './BaseNode'
//import * as spritejs from 'spritejs'
spritejs.use(install);

class SpriteWorkflow extends BaseNode {
  /** 
   * selector:css选择器
   * size:canvas大小
   * steps:步骤
   * lines:连接线
   * **/
  public attrs = {
    'selector': '',
    'size': [ 600, 400 ],
    'steps': [],
    'lines': []
  }
  constructor(attrs) {
    this.attr(attrs);
  }

  renderStep() {

  }
}