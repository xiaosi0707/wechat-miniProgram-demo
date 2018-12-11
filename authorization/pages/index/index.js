// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnVal: '点击授权'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用此方法判断是否授权，然后做相应的逻辑处理
    this.userAuthoriza()
  },
  // 点击button后获取授权信息
  getUserInfo(event) {
    console.log(event)
  },
  // 是否授过权？
  userAuthoriza () {
    let _this = this
    wx.getSetting({
      success (data) {
        // console.log(data)
        // 已授权
        if (data.authSetting['scope.userInfo']) {
          _this.setData({
            btnVal: '已授权'
          })
          wx.getUserInfo({
            success (data) {
              console.log(data)
            }
          })
        } else { // 未授权
          console.log('未授权')
        }
      }
    })
  }
})