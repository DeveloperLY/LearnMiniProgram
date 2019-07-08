// pages/home/home.js

// getApp() 获取App()产生的实例对象
const app = getApp()

const name = app.globalData.name

Page({
  /**
   * 页面的初始数据
   */
  data: {
    message: '小程序',
    list: []
  },

  handleGetUserInfo: function(event) {
    console.log(event)
  },

  handleViewClick: function() {
    console.log("小程序被点击了..." + name)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")

    // 网络请求
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (resut) => {
        console.log(resut)
        const list = resut.data.data.list;
        this.setData({
          list: list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  }
})