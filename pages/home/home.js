// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    transitionCompleted:false,
    showTransition:true,
    current:true,
    // 关键是这里要写与map组件id对应的！select用.或者#都一样
    context : wx.createMapContext('map', wx.createSelectorQuery().select('#map')),
    longitude:119.19245 ,
    latitude:26.056212,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.startTimer();
  },
  startTimer(){
    let lo = null;
    let la= null;
    this.timer = setInterval(()=>{
      const context = this.data.context
      const current = this.data.current
      if(context){
        context.getCenterLocation({
          success(res){
            lo = res.longitude;
            la =  res.latitude;
          }
        })
        context.moveToLocation()
        context.getCenterLocation({
          success(){
            if(res.longitude != lo || res.latitude != la){
              this.setData({
                current:false
              })
              console.log('not before pos')
            }
          }
        })
      }
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 这里页面初始化的时候调用
    const context = this.data.context; 
    //TODO:申请定位，获取定位的地图 接口
    context.moveToLocation({
      success(){
        console.log('s')
      },
      complete(){
        console.log('goback')
      }
    })
    let latitude = this.data.latitude;
    let longitude = this.data.longitude;
    context.getCenterLocation({
      success(res){
        this.setData({
          latitude: res.latitude,
          longitude:res.longitude
        })
      },
      fail(e){
        console.log(e)
      }
    })
    // 必须要真机调试的时候才能看到标记点
    //标记当前位置
    const marker = {
      id:1,
      latitude:latitude,
      longitude:longitude,
      width:30,
      height:30
    }
    context.addMarkers({
      markers:[marker],
      success:function(){
        console.log('s')
      },
      fail(e){
        console.log(e)
      },
      complete(){
        console.log('marker')
      }
    })
    
    // setTimeout(() => {
    //   console.log("页面加载完毕")
    //   this.setData({
    //     transitionCompleted:true,
    //     showTransition:false
    //   })
    //   //使用这种方式无法实现页面动态更新
    //   // this.transitionCompleted = true;   
    // }, 2000); // 调整动画执行的时间
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  goIndoor(){
    console.log('indoor')
    wx.navigateTo({
      url: '../indoor-guidance/indoor-guidance',
      fail(e){
        console.log(e)
      }
    })
  },
  goBack(){ 
    const current = this.data.current;
    this.setData({
      current: !current
    })
    const context = this.data.context;
    //回到原始定位点  
    context.moveToLocation({
      success(){
        console.log('s')
      },
      complete(){
        console.log('goback')
      }
    })
    //TODO:监听页面位置移动
  }
})