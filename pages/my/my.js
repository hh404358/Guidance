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
      },
      profile:wx.getStorageSync('profile')?wx.getStorageSync('profile'):'点击这里,填写简介',
      hasUserInfo: false,
      canIUseGetUserProfile: wx.canIUse('getUserProfile'),
      canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    
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
 setBackground(){
  
 },
 addFirned(){
   
 }

})

