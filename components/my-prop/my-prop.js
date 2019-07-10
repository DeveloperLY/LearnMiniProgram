// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这种方式不能设置默认值
    title: String,
    content: {
      type: String,
      value: '我是组件内容'
    },
    counter: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },

  // 样式
  externalClasses: ['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
