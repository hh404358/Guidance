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
        image:'../../assests/community.png',
        userName:'haha',
        avatar:'../../assests/community.png',
        formal:true
      },
      {
        id:2,
        title:'haha',
        image:'../../assests/image.png',
        userName:'haha',
        avatar:'../../assests/community.png',
        formal:false
      },
      {
        id:3,
        title:'haha',
        image:'../../assests/my.png',
        userNme:'haha',
        avatar:'../../assests/community.png',
        formal:true
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }

})