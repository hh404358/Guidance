Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendNotes:false,
    uploadedImages: [
      '../../assests/add.png','../../assests/add.png','../../assests/add.png'
    ], // 用于存储本地图片路径数组
    isPublic:false,//是否公开
    save:false,//是否保存
    selectPublic:false,//打开公开选择框
    selectPublic:false,
    isTagsVisible:false,
    avatar:wx.getStorageInfoSync('avatar')||'',
    name:wx.getStorageInfoSync('name')||'',
    title:'',
    body:'',
    time:'',//发布时间
    position:'',
    commentNum:1111,
    likeNum:3333,
    collectNum:2222,
    commentList:[
      {
        avatar:'../../assests/新建画布1 1.png',
        userName:'haha',
        comment:'aaaaaaaaaaaaaaaaaaaa',
        time:'4分钟前',
        position:'shandong',
        likeNum:111,
        children:[
          {
            avatar:'../../assests/picture.png',
            userName:'haha',
            comment:'aaaaaaaaaaaaaaaaaaaa',
            time:'4分钟前',
            position:'shandong'
          },
          {
            avatar:'../../assests/新建画布1 1.png',
            userName:'haha',
            comment:'aaaaaaaaaaaaaaaaaaaa',
            time:'4分钟前',
            position:'shandong'
          }
        ]
      },
      {
        avatar:'../../assests/新建画布1 1.png',
        userName:'haha',
        comment:'aaaaaaaaaaaaaaaaaaaa',
        time:'4分钟前',
        position:'shandong'
      },
      {
        avatar:'../../assests/picture.png',
        userName:'haha',
        comment:'aaaaaaaaaaaaaaaaaaaa',
        time:'4分钟前',
        position:'shandong'
      }
    ],
    labels:[
      '动车','美食'
    ]

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
    this.setData({
      uploadedImages: []
    });
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
  //公开可见框展示
  handlePublic(){
    const isPublic = this.data.isPublic;
    if(isPublic){
      wx.showModal({
        title: '',
        content: '确认修改为尽自己可见？',
        complete: (res) => {
          if (res.cancel) {}
          if (res.confirm) {
            this.ToSecret();
          }
        }
      })
    }else{
      wx.showModal({
        title: '',
        content: '确认修改为公开可见？',
        complete: (res) => {
          if (res.cancel) {}
          if (res.confirm) {
            this.ToPublic();
          }
        }
      })
    }
  },
  //设置笔记公开
  ToPublic(){
    const isPublic = this.data.isPublic;
    const selectPublic = this.data.selectPublic;
      this.setData({
        isPublic:true,
        selectPublic:!selectPublic
      })
      //TODO:传入这篇笔记的xx给后端，便于后续访问笔记的时候筛选
  },
  //设置笔记私密
  ToSecret(){
    const isPublic = this.data.isPublic;
    const selectPublic = this.data.selectPublic;
      this.setData({
        isPublic:false,
        selectPublic:!selectPublic
      })
      //TODO:传入这篇笔记的xx给后端
  },
  disappear(){  
    const save = this.data.save;
    this.setData({
      save:!save
    })
  console.log(this.data.save)
},
 
  handleFocus(){

  },
  handleShare(){

  },
  handleShowTags(){
    const isTagsVisible = this.data.isTagsVisible;
    this.setData({
      isTagsVisible:!isTagsVisible
    })
  }
})