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
      'hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
    ],
    guess:[
      'hhhhhhhhhhhhhhhh',
      '11','22','33','44',
      '55','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
      'hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
      'hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh','hhhhhhhhhhhhhhhh',
    ],
    more:false,
    //只要九个
    hot:[
      'hhhhhhhhhhhhhhhh',
      '11','22','33','44',
      '55','hhhhhhhhhhhhhhhh',
    ],
    see:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchData();
    this.getGuess();
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
  fetchData(){
    wx.request({

    })
  },
  getGuess(){
    wx.request({
      url: 'url',
    })
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
  },
  handleShowMore(){
    const more = this.data.more;
    this.setData({
      more:!more
    })
  },
  handleRefresh(){
    this.getGuess();
  },
  handleSee(){
    const see = this.data.see;
    this.setData({
      see:!see
    })
  }
})