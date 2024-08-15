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
      
    }
  }
})