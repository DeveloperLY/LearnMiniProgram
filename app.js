//app.js

const TOKEN = 'token'

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    // 判断token是否存在
    if (token && token.length !== 0) {
      // 存在的话，验证token是否过期
      this.check_token()
    } else {
      // 不存在，执行登录操作
      this.login()
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  // 登录操作
  login() {
    console.log('执行登录操作')
    // 登录
    wx.login({
      // code 的有效期只有5分钟
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const code = res.code;

        // 将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code: code
          },
          success: (res) => {
            // 取出token
            const token = res.data.token;

            // 将token保存在globalData中
            this.globalData.token = token;

            // 保存到缓存中
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },

  // 校验token是否有效
  check_token(token) {
    console.log('执行校验操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token;
        } else {
          this.login()
        }
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  globalData: {
    userInfo: null,
    token: ''
  }
})