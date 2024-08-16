// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    labels:[
      {
        id:1,
        name:'temperature'
      },
      {
        id:2,
        name:'clothes'
      },
      {
        id:3,
        name:'food'
      },
      {
        id:4,
        name:'tv'
      },
      {
        id:5,
        name:'music'
      }
    ],
    selected:false,
    edit:false,
    editText:'进入编辑',
    formal:[
      {
        id:1,
        name:'foraml'
      },
      {
        id:2,
        name:'foraml'
      },
      {
        id:3,
        name:'foraml'
      },
      {
        id:4,
        name:'foraml'
      },
      {
        id:5,
        name:'foraml'
      }
    ]
  },

  handleSelect(){
    const selected = this.data.selected
    this.setData({
      selected : !selected,
    })
    
  },
  handleEdit(){
    const edit = this.data.edit
    const editText = this.data.editText
    this.setData({
      edit : !edit,
      editText: edit?'进入编辑':'完成编辑'
    })
    
  },
  handleLabel(label){
    
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
    wx.setNavigationBarTitle({
      title: '社区',
    })
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