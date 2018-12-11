// components/music/index.js
Component({
  // 启用插槽
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    type: String
  }
})
