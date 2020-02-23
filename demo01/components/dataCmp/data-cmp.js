// components/dataCmp/data-cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: "dataComponent",
    title: {
      type: String,
      value: "this is default value",
      observer: function (oldValue, newValue) {
        console.log(oldValue, newValue)
      }
    }
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
