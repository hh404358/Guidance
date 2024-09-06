// components/post-frame/post-frame.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    posts:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
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
    },
     //点击进入帖子,获取帖子详情
    //TODO：获取帖子详情后，对照片大小进行排序
    postDetail(e){
      const index=e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `../../pages/note/note?postId=${index}`
      })
    }
  }

})