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
    counter: 0,
    isActive: false,
    price: "23.6666"
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
  },
  // 绑定事件时 会默认传递一个参数 event
  getUserInfo(event){
    console.log(event)
  },
  handleSwitchColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  }
})