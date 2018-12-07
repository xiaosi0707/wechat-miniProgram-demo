// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '成都',
    type: 1
  },
  // 第三步：在回调函数的事件对象中进行数据更新
  parentCallBack (event) {
    let { name } = event.detail
    this.setData({ // 更新数据
      name: '终于等到你',
      type: 2
    })
  }
})