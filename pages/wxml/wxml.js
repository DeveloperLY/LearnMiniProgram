// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好，小程序！',
    age: 19,
    nowTime: new Date().toLocaleString(),
    active: true,
    isShow: false,
    score: 55,
    isHidden: false,
    show: false,
    movies: ["盗梦空间", "星际穿越", "木乃伊"],
    nums: [
      [32, 54, 45, 65],
      [11, 22, 33],
      [123, 456, 789, 135]
    ],
    letters: ['a', 'b', 'c']
  },

  handleSwitchColor() {
    this.setData({
      active: !this.data.active
    })
  },

  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleIncrement() {
    this.setData({
      score: this.data.score + 10
    })
  },

  handleShowToggle() {
    this.setData({
      isHidden: !this.data.isHidden
    })
  },

  onToggle() {
    this.setData({
      show: !this.data.show
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
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

  }
})