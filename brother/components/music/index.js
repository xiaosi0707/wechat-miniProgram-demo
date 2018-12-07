// components/music/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },
  methods: {
    onMusic () {
      /*
       第一步：兄弟组件music，通过自定义事件的方式通知父组件
      */
      this.triggerEvent('parentReceive', {}, {})
    }
  }
})
