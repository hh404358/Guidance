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
    voiceFile:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSearch(){

      // wx.navigateTo({
      //   url: '/pages/search/search',
      // })
    },
    handleScan(){
      console.log('scan')
      wx.navigateTo({
        url: '/pages/scan/scan',
      })
    }
  },
  handleVoice(){
    const tempFilePath = this.data.voiceFile
    wx.startRecord({
      success (res) {
        tempFilePath = res.tempFilePath
      }
    })
    
  },
  stopVoice(){
    wx.stopRecord() // 结束录音
    const tempFilePath = this.data.voiceFile
    //发送给后端接收后端信息

  },
  handleMy(){
    console.log('tabMy')
    wx.switchTab({
      url: '../../pages/my/my',
    })
  }

  
})