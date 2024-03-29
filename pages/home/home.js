// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const types = ['pop', 'new', 'sell'];
const TOP_DISTANCE = 1000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] },
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },

  // ------------------- 页面生命周期函数 -------------------------

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图以及推荐数据
    this._getMultiData()

    // 请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
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
    // 页面显示不意味着所有的图片都加载完成
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
    // 上拉加载更多
    this._getGoodsData(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // ------------------- 网络请求函数 -------------------------
  _getMultiData() {
    getMultiData().then(res => {
      // console.log(res)
      // 取出轮播图和推荐数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },

  _getGoodsData(type) {
    // 获取页码
    const page = this.data.goods[type].page + 1;

    // 发送网络请求
    getGoodsData(type, page).then(res => {
      // console.log(type, res)

      // 取出数据
      const list = res.data.data.list;

      // 将数据保存到对于type的list中
      const oldList = this.data.goods[type].list;
      oldList.push(...list)

      // 将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },

  // ------------------- 事件监听函数 -------------------------
  handleTabClick(event) {
    // 取出index
    const index = event.detail.index;

    // 设置currentType
    this.setData({
      currentType: types[index]
    })
  },

  onPageScroll(options) {
    // 取出scrollTop
    const scrollTop = options.scrollTop;
    // console.log(scrollTop)

    // 修改showBackTop属性
    // 官方: 不要在滚动中的函数回调中频繁的调用this.setData
    const flag1 = scrollTop >= TOP_DISTANCE;
    if (flag1 != this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      })
    }

    // 修改isTabFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if (flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  },

  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  }

})