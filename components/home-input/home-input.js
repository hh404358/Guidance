// components/home-input/home-input.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
const avatarUrl = wx.getStorageSync('avatarUrl');
const recorder = wx.getRecorderManager();//全局录音管理器
const options = {
  duration: 1 * 30 * 1000, //30s
  sampleRate: 44100,
  encodeBitRate: 64000,
  format: 'wav'
};
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
    voiceFile:'',
    voiceOpened: false
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
    },
    handleVoice(){
      if(this.data.voiceOpened) {
        this.stopVoice();
      } else {
        const tempFilePath = this.data.voiceFile
        recorder.start(options);
        console.log("ready");
        this.setData({voiceOpened: true});
        recorder.onStop((data) => {
          console.log(data.tempFilePath);
          console.log(data.duration);
          console.log(data.fileSize);
        })
      }
      
    },
    stopVoice(){
      recorder.stop();
      console.log("stop");
      this.setData({voiceOpened: false});
      //发送给后端接收后端信息
  
    },
    handleMy(){
      console.log('tabMy')
      let userInfo = null
      wx.getUserInfo({
        success(res){
          userInfo = res.userInfo;
          wx.setStorageSync('userInfo', userInfo);
        }
      })
      if(userInfo !=null){
        this.setData({
          userInfo:userInfo
        })
      }
      wx.switchTab({
        url: '../../pages/my/my',
      })
    }











  }
 

  
})