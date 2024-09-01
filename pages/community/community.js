// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    labels:['推荐','吐槽','精选','便民服务','美食','景点'],
    selected:false,
    edit:false,
    editText:'进入编辑',
    posts:[
      {
        id:1,
        title:'1111',
        image:'../../assests/add.png',
        userName:'haha',
        avatar:'../../assests/picture.png',
        formal:true,
        likeNum:1
      },
      {
        id:2,
        title:'222222222',
        image:'../../assests/新建画布1 1.png',
        userName:'haha',
        avatar:'../../assests/picture.png',
        formal:false,
        likeNum:1
      },
      {
        id:3,
        title:'333333333',
        image:'../../assests/新建画布1 1.png',
        userNme:'haha',
        avatar:'../../assests/picture.png',
        formal:true,
        likeNum:1
      },
      {
        id:4,
        title:'title1',
        image:'../../assests/picture.png',
        userName:'haha',
        avatar:'../../assests/picture.png',
        formal:true,
        likeNum:1
      },
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
  handleLabel(e){
    const label = console.log(e.target.dataSet.id)
    //更改posts为点中的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //默认获取推荐post
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
  handleDelete(){
    console.log('delete')
    
  }
})