// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:'',
    userName:'hahaha',
    profile:'hhhhhhhhhhhhhhhhhhh',
    phone:'123****1111',
    birthday:'',
    sex:'',
    isMan:false,//默认选择女性
    selectSex:false,//默认不展开选择性别
    selectBirth:false,//默认不展示日期选择器
  },
  editAvatar(){
    wx.chooseImage()
  },
  editUserName(){

  },
  toMan(){
    const isMan = this.data.isMan
    this.setData({
      isMan:true,
      sex:'男'
    })
  },
  toWoman(){
    const isMan = this.data.isMan
    this.setData({
      isMan:false,
      sex:'女'
    })
  },
  editSex(){
    const selectSex = this.data.selectSex;
    this.setData({
      selectSex:!selectSex
    })
    console.log(selectSex)
  },
  editBirthday(){
    const selectBirth=this.data.selectBirth;
    this.setData({
      selectBirth:!selectBirth
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      birthday: e.detail.value
    })
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