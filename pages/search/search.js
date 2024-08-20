// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history:[
      'hhhhhhhhhhhhhhhh',
      '11','22','33','44',
      '55','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
      'hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
      'hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
    ],
    more:false,
    hot:[
      'hhhhhhhhhhhhhhhh',
      '11','22','33','44',
      '55','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
      'hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
      'hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(!this.data.more){
      console.log(this.data.history)
      this.setData({
        history:[history[1],history[2],history[3],history[4]]
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  back(){
    wx.switchTab({
      url: '/pages/community/community',
    })
  },
  clearAll(){
    history = this.data.history
    this.setData({
      history : []
    })
    console.log(this.data.history)
  }
})