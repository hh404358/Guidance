// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    transitionCompleted:false,
    showTransition:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    setTimeout(() => {
      console.log("页面加载完毕")
      this.setData({
        transitionCompleted:true,
        showTransition:false
      })
      //使用这种方式无法实现页面动态更新
      // this.transitionCompleted = true;   
    }, 2000); // 调整动画执行的时间
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
  goIndoor(){
    console.log('indoor')
    wx.navigateTo({
      url: '../indoor-guidance',
      fail(e){
        console.log(e)
      }
    })
  },
  goBack(){
    console.log('back')
    wx.navigateTo({
      url: '../indoor-guidance',
      fail(e){
        console.log(e)
      }
    })
  }
})