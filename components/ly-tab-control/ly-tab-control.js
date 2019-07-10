// components/ly-tab-control/ly-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event) {
      // 取出传入的index
      const index = event.currentTarget.dataset.index;

      // 修改记录的currentIndex
      this.setData({
        currentIndex: index
      })

      // 发出自定义事件
      this.triggerEvent('itemclick', { index, title: this.properties.titles[index] }, {})
    }
  }
})
