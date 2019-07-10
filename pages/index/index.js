//index.js
import request from '../../service/network.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 使用原生方式发送网络请求
    // this.get_data_origin()

    // 使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://httpbin.org/get'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  get_data_origin() {
    // 发送最简单的get请求
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // get请求,并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   data: {
    //     name: 'DeveloperLY',
    //     age: 18
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    // post请求,并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'DeveloperLY',
        age: 18
      },
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  }
})
