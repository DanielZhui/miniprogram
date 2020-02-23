// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: [],
    currentTime: '',
    count: 0,
    items: ["衣服", "裤子", "鞋子"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        currentTime: new Date().toLocaleString()
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleChooseImage() {
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleIncrement() {
    this.setData({
      count: this.data.count += 1
    })
  },
  handleItemClick(event) {
    console.log(">>>>", event)
  },
  // 修改组件内数据(不提倡这样使用不符合规范)
  // handleIncrementCmp() {
  //   let sele_cmp = this.selectComponent("#sele-cmp")
  //   let counter = sele_cmp.data.counter
  //   sele_cmp.setData({
  //     counter: counter += 1
  //   })
  // }
  handleIncrementCmp() {
    const sele_cmp_obj = this.selectComponent("#sele-cmp")
    sele_cmp_obj.handleCounterIncrement(5)
  }
})