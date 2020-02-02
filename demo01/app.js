// app.js生命周期函数
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）小程序默认存活时间2小时
   */
  onLaunch: function () {
    console.log('init miniprogram')
    // 异步过程获用户信息
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('show miniprogram')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('exit miniprogram')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('something error')
  },
  // app.js 中存储的全局数据可以提供所有页面共享
  globalData: {
    name: 'Tom',
    age: 16
  }
})
