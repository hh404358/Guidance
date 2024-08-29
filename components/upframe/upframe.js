// components/upframe/upframe.js
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
    startY:511,
    offsetY:511,
    formals:[
      '../../assests/add.png',
      '../../assests/add.png',
      '../../assests/add.png',
    ],
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
  }
})