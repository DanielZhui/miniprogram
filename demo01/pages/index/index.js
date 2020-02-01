Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "Tom",
    city: "Tokyo",
    persons: [
      { name: "Alice", age: 9 },
      { name: "Alex", age: 10 },
      { name: "Jerry", age: 10 }
    ],
    counter: 0
  },
  // Page 中绑定方法
  handleBtnClick(){
    console.log(this.data.counter)
    // 不能够直接改变counter值,需要通过setData方法改变Data 中的值
    this.setData({
      counter: this.data.counter += 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter -= 1
    })
  }
})