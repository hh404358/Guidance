// components/post-frame/post-frame.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    posts:[
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
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAuthor(){
      console.log('author')
      wx.navigateTo({
        url: '../../pages/author/author',
      })
    }
  }

})