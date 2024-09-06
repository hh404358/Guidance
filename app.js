// app.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
function getNavigationBarFromApp(that) {
  const windowsInfo = wx.getWindowInfo();
  const deviceInfo = wx.getDeviceInfo();
  const statusBarHeight = windowsInfo.statusBarHeight;
  const isiOS = deviceInfo.system.indexOf('iOS') > -1;
  const navHeight = isiOS ? 44 : 48;
  const navTop = statusBarHeight + navHeight;
  that.globalData.navHeight = navHeight; // 将导航栏高度保存到全局变量中
  that.globalData.navTop = navTop; // 将导航栏顶部位置保存到全局变量中
  that.globalData.height = windowsInfo.windowHeight;
}
App({
  onLaunch() {
    wx.hideTabBar();
    getNavigationBarFromApp(this);
  },
 
  globalData: {
    // userInfo: null,
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    navHeight: 0,
    navTop: 0,
    height: 0
    
  },
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    

   
  
})
