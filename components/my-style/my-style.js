// components/my-style/my-style.js
Component({

  options: {
    // 隔离属性styleIsolation有三个取值
    // isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（默认取值）
    // apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面
    // shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其它设置了
    styleIsolation: "shared"
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

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
