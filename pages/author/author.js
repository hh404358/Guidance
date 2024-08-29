// pages/my/my.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // userInfo: null,
      userInfo: {
        avatarUrl: defaultAvatarUrl,
        nickName: 'nickName',
        age:11,
        sex:'女',
        profile:'hahaha'
      },
      profile:wx.getStorageSync('profile')?wx.getStorageSync('profile'):'点击这里,填写简介',
      hasUserInfo: false,
      canIUseGetUserProfile: wx.canIUse('getUserProfile'),
      canIUseNicknameComp: wx.canIUse('input.type.nickname'),
      bg:'',//默认背景图片
      focusNum:11,
      fans:10,
      myPost:10,
      focus:false,//是否关注对方
      focused:false,//是否被对方关注
      startY:300,
      offsetY:300,
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('loading')
    // 登录

    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId

    //   }
    // })
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail:(e)=>{
        console.log(e)
      }
    })
    console.log(this.data.userInfo)
  },
  onTouchStart: function(e) {
    // 记录触摸开始时的位置
    this.data.startY = e.touches[0].clientY;
  },
  onTouchMove: function(e) {
    const that = this;
    const deltaY = e.touches[0].clientY;
    const startY = that.data.startY;
    //向上
    if(deltaY<startY){
      const newOffsetY = Math.max(deltaY,30);
        const offsetY = this.data.offsetY;
        // 更新偏移量
        that.setData({
          offsetY: newOffsetY
        });
    }else{
      //向下
      const newOffsetY = Math.min(deltaY,300);
      const offsetY = this.data.offsetY;
      // 更新偏移量
      that.setData({
        offsetY: newOffsetY
      });
    }
    
    
    // console.log(this.startY,newOffsetY,this.data.offsetY)
  },
  onTouchEnd: function() {
    const that = this;
    // 弹性回弹效果
    const resetOffsetY = this.data.offsetY; // 定义回弹到的位置
    that.setData({
      offsetY:resetOffsetY
    });
    console.log(this.data.startY,this.data.offsetY)
  },
  handleFocus(){
    const foucs = this.data.focus;
    this.setData({
      focus:!foucs
    })
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
  


})

