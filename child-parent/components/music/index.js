// components/music/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    type: String
  },
  methods: {
    onMusic () {
      /*
       *第一步：通过自定义事件的方式通知父组件
       triggerEvent 指定事件名、detail对象和事件选项 - 通知父组件
        parentReceive自定义事件名、name: '雪落下的声音'要传递过去的数据、事件选项有三个（见官网）
      */
      this.triggerEvent('parentReceive', {
        name: '雪落下的声音'
      }, {})
    }
  }
})
