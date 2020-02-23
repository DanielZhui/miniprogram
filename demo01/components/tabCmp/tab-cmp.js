// components/tabCmp/tab-cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
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
      // 获取 index 值
      let index = event.currentTarget.dataset.index
      // 修改 currentIndex 值
      this.setData({
        currentIndex: index
      })
      // 将组件的值传递给页面
      this.triggerEvent("itemclick", { index, item:this.properties.items[index]}, {})

    }
  }
})
