// pages/focus/focus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus:false,
    focusList:[
      {
        avatar:'../../assests/my.png',
        userName:'hhh',
        focused:false
      },
      {
        avatar:'../../assests/my.png',
        userName:'hhh',
        focused:true
      },
      {
        avatar:'../../assests/my.png',
        userName:'hhh',
        focused:false
      },
    ],
    fansList:[
      {
        avatar:'../../assests/my.png',
        userName:'hhh',
        focused:false
      },
      {
        avatar:'../../assests/my.png',
        userName:'hhh',
        focused:true
      },
      {
        avatar:'../../assests/my.png',
        userName:'hhh',
        focused:false
      },
    ]

  },
  showFocus(){
    const isFocus = this.data.isFocus;
    this.setData({
      isFocus:!isFocus
    })
  },
  showFans(){
    const isFocus = this.data.isFocus;
    this.setData({
      isFocus:!isFocus
    })
  },
  handleFocus(e){
    const index = e.currentTarget.dataset.index;
    const focusList = this.data.focusList;
    if(!focusList[index].focused){
      
    }else{
      focusList[index].focused = !focusList[index].focused;
    
      wx.showModal({
        title: '',
        content: '确认不再关注？',
        complete: (res) => {
          if (res.cancel) {}    
          if (res.confirm) {
            this.setData({
              focusList: focusList
            });
          }
        }
      })
    }
    
  },
  handleFans(e){
    const index = e.currentTarget.dataset.index;
    const fansList = this.data.fansList;
    //只可以关注你的粉丝
    if(!fansList[index].focused){
      fansList[index].focused = !fansList[index].focused;
      this.setData({
        fansList: fansList
      });
    }
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

  }
})