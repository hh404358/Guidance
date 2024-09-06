// pages/my/my.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const userInfo = wx.getStorageSync('userInfo');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // userInfo: null,
    userInfo:userInfo?
    {...userInfo,
      profile:'',
      age:''
    }: 
    {
        avatarUrl: defaultAvatarUrl,
        nickName: 'nickName',
        age:''
    },
      profile:wx.getStorageSync('profile')?wx.getStorageSync('profile'):'点击这里,填写简介',
      hasUserInfo: false,
      canIUseGetUserProfile: wx.canIUse('getUserProfile'),
      canIUseNicknameComp: wx.canIUse('input.type.nickname'),
      bg:'../../assests/home.png',//默认背景图片
      focus:11,
      fans:10,
      myPost:10,
      show1:false,//获赞和收藏
      show2:false,
      show3:false,//浏览记录
      //有人@我列表
      mentionList:[
        {
          avatar:'../../assests/image.png',
          userName:'hahaha',
          place:'评论',//这边看一下用1/0还是直接给评论/帖子
          postImg:'../../assests/my.png'
        },
        {
          avatar:'../../assests/image.png',
          userName:'hahaha',
          place:'评论',//这边看一下用1/0还是直接给评论/帖子
          postImg:'../../assests/my.png'
        },
        {
          avatar:'../../assests/image.png',
          userName:'hahaha',
          place:'评论',//这边看一下用1/0还是直接给评论/帖子
          postImg:'../../assests/my.png'
        }
      ],
      historyList:[
        {
          postImg:'../../assests/my.png',
          title:'aaa'
        },
        {
          postImg:'../../assests/my.png',
          title:'aaa'
        },
        {
          postImg:'../../assests/my.png',
          title:'aaa'
        },
      ],
      collectNum:1,
      likeNum:2,
      isNote:true,//默认显示我的笔记
      isSearch:false,//默认不显示搜索框
      //默认显示我的收藏
      isCollect:true,
      isHistory:false,
      isNote:false,
      offsetY:360,
      noteList:[
        {
          id:1,
          title:'title1',
          image:'../../assests/picture.png',
          userName:'haha',
          avatar:'../../assests/picture.png',
          formal:true,
          likeNum:1
        },
        {
          id:2,
          title:'haha',
          image:'../../assests/新建画布1 1.png',
          userName:'haha',
          avatar:'../../assests/picture.png',
          formal:false,
          likeNum:1
        },
        {
          id:3,
          title:'haha',
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
        {
          id:4,
          title:'title1',
          image:'../../assests/picture.png',
          userName:'haha',
          avatar:'../../assests/picture.png',
          formal:true,
          likeNum:1
        },
      ],
      collectList:[
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
    // wx.getUserProfile({
    //   desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //   success: (res) => {
    //     console.log(res)
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   },
    //   fail:(e)=>{
    //     console.log(e)
    //   }
    // })
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
  setBackground: function() {
    const bg = this.data.bg;
    const that = this;
    wx.chooseImage({
      count: 1, // 默认9，设置为1表示只能选择一张图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表
        const tempFilePaths = res.tempFilePaths[0];
        console.log(res)
        that.setData({
          bg: tempFilePaths // 将选择的图片设置为背景
        });
        console.log(bg,tempFilePaths)
      }
    });
  },
 handleShow1(){
   const show1=this.data.show1;
   this.setData({
     show1:!show1
   })
 },
 handleShow2(){
  const show2=this.data.show1;
  this.setData({
    show2:!show2
  })
},
handleShow3(){
  const show3=this.data.show3;
  this.setData({
    show3:!show3
  })
},
toInfo(){
  wx.navigateTo({
    url: '../../pages/info/info',
  })
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
    const newOffsetY = Math.min(deltaY,400);
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
toNote(){
  const isNote = this.data.isNote
  posts
  this.setData({
    isNote:true,
    //从后端获取noteList

  })
},
toMyCollect(){
  const isNote = this.data.isNote
  this.setData({
    isNote:false,
    //从后端获取collectList
  })
},
handleSearch(){
  const isSearch = this.data.isSearch;
  this.setData({
    isSearch:!isSearch
  })
},
handleCancel(){
  const isSearch = this.data.isSearch;
  this.setData({
    isSearch:!isSearch
  })
},
toNote(){
  this.setData({
    isNote:true,
    isCollect:false,
    isHistory:false
  })
},
  toCollect(){
  const isCollect = this.data.isCollect;
  this.setData({
    isNote:false,
    isCollect:true,
    isHistory:false
  })
},
toHistory(){
  const isCollect = this.data.isCollect;
  this.setData({
    isNote:false,
    isCollect:false,
    isHistory:true
  })
}


})

