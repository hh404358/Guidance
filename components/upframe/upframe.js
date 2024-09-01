// components/upframe/upframe.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    attached: function() {
      this.startAutoPlay();
      //获取精品教程视频返回给posts

    },
    detached: function() {
      this.stopAutoPlay();
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
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
    ],
    images: [
      '../../assests/picture.png',
      '../../assests/add.png',
      '../../assests/picture.png',
      '../../assests/add.png',
      '../../assests/picture.png',
      // 更多图片路径
    ],
    currentSlide: 0,
    startY:511,
    offsetY:511,
    formals:[
      '../../assests/add.png',
      '../../assests/add.png',
      '../../assests/add.png',
    ],
    selected:false,
    interval: null, // 用于存储定时器
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSelect(){
      const selected = this.data.selected
      this.setData({
        selected : !selected
      })
    },
    handleLabel(label){
      
    },
    onTouchStart: function(e) {
      // 记录触摸开始时的位置
      this.data.startY = e.touches[0].clientY;
    },
    onTouchMove: function(e) {
      const that = this;
      const deltaY = e.touches[0].clientY;
      const startY = that.data.startY;
      // 限制拉动区域只能在特定范围内移动
      const maxOffsetY = 400; // 定义最大偏移量
      //向上
      if(deltaY<startY){
        if(startY-maxOffsetY>30){
          const newOffsetY = startY-maxOffsetY;
          const offsetY = this.data.offsetY;
          // 更新偏移量
          that.setData({
            offsetY: newOffsetY
          });
        }else{
          that.setData({
            offsetY: 30
          });
        }
      }else{
        //向下
        if(startY+maxOffsetY<500){
          const newOffsetY = startY+maxOffsetY;
          const offsetY = this.data.offsetY;
          // 更新偏移量
          that.setData({
            offsetY: newOffsetY
          });
        }else{
          that.setData({
            offsetY: 500
          });
        }  
      }
      
      
      // console.log(this.startY,newOffsetY,this.data.offsetY)
    },
    onTouchEnd: function() {
      const that = this;
      // 弹性回弹效果
      const resetOffsetY = this.data.offsetY; // 定义回弹到的位置
      const offsetY = this.data.offsetY;
      that.setData({
        offsetY:resetOffsetY
      });
      console.log(this.data.startY,this.data.offsetY)
    },
   // 自动播放函数
  autoPlay: function() {
    let currentSlide = this.data.currentSlide;
    let images = this.data.images;
    let nextSlide = (currentSlide + 1) % images.length;
    this.setData({
      currentSlide: nextSlide
    });
  },

  // 启动自动播放
  startAutoPlay: function() {
    this.stopAutoPlay(); // 停止当前的自动播放
    this.setData({
      interval: setInterval(() => {
        this.autoPlay();
      }, 3000) // 每3秒自动播放下一张图片
    });
  },

  // 停止自动播放
  stopAutoPlay: function() {
    if (this.data.interval) {
      clearInterval(this.data.interval);
      this.setData({
        interval: null
      });
    }
  },

  dotTap: function(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentSlide: index
    });
    this.handleInteraction();
  },

  prevSlide: function() {
    let current = this.data.currentSlide;
    this.setData({
      currentSlide: (current - 1 + this.data.images.length) % this.data.images.length
    });
    this.handleInteraction();
  },

  nextSlide: function() {
    let current = this.data.currentSlide;
    this.setData({
      currentSlide: (current + 1) % this.data.images.length
    });
    this.handleInteraction();
  },

  handleInteraction: function() {
    this.stopAutoPlay();
    setTimeout(() => {
      this.startAutoPlay();
    }, 3000); // 3秒后恢复自动轮播
  }
  }
})