// components/common-head/common-head.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    head:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back(){
      wx.navigateBack(-1)
    }
  }
})