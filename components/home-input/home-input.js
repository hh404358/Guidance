// components/home-input/home-input.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const avatarUrl = wx.getStorageSync('avatarUrl')
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
    value:'',
    avatar: avatarUrl?avatarUrl:defaultAvatarUrl,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSearch(){
      wx.navigateTo({
        url: '/pages/search/search.js',
      })
    },
    handleScan(){
      console.log('scan')
      wx.navigateTo({
        url: '/pages/scan/scan',
      })
    }
  },
  
})