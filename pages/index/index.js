//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
   
  handleBtnClick(event) {
    console.log("按钮被点击了", event)
  },

  handleTouchStart() {
    console.log('触摸开始手势')
  },

  handleTouchMove() {
    console.log('触摸移动手势')
  },

  handleTouchEnd() {
    console.log('触摸结束手势')
  },

  handleTap() {
    console.log('轻点手势')
  },

  handleLongpress() {
    console.log('长按手势')
  },

  handleTouchCancel() {
    onsole.log('触摸取消手势')
  },

  handleEventClick(event) {
    console.log('-------', event)
  },

  handleEventEnd(event) {
    console.log('+++++++', event)
  },

  handleInner(event) {
    console.log(event)
  },

  handleOuter(event) {
    console.log(event)
  },

  handleItemClick(event) {
    console.log(event)
    // title - index
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index)
  },

  // ----------  事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },

  handleBindView1() {
    console.log('handleBindView1')
  },

  handleCaptureView2() {
    console.log('handleCaptureView2')
  },

  handleBindView2() {
    console.log('handleBindView2')
  },

  handleCaptureView3() {
    console.log('handleCaptureView3')
  },

  handleBindView3() {
    console.log('handleBindView3')
  }
})
