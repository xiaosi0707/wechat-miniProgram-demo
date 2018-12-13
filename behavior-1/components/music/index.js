// components/music/index.js
import { SmallFourBeh } from '../behavior.js' // 导入behavior.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [SmallFourBeh], //  继承behavior.js里面的properties，data，methods
  properties: {
  },
  methods: {
    onTap(ev) {
      let { name, type } = ev.target.dataset
      this.behaviorTap(name, type) // 通过this可以访问behavior.js里面的内容
    }
  }
})
