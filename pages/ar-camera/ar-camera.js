// pages/ar-camera/ar-camera.js


import { InterGuiController } from "../../utils/interface";
const inter_gui = new InterGuiController();
function TTS() {
  const a = inter_gui.TTS("测试一下语音系统");
}
const gostright = {turns: '../../assests/gostright.png', width: 60, height: 94};
const turnaround = {turns: '../../assests/turnaround.png', width: 80, height: 95};
const turnleft = {turns: '../../assests/turnleft.png', width: 114, height: 60};
const turnright = {turns: '../../assests/turnright.png', width: 114, height: 60};
/**
 * 
 * @param {Array} data - [{gui: '直行'、'左转'、'右转'、'掉头', time: 15}]秒
 */
function gui_mo_ni(that, data) {
  let times = 0;
  data.forEach(element => {
    console.log(times,element);
    setTimeout(() => {
      console.log(element);
      switch (element.gui) {
        case '直行':
          that.setData({guiTurns: gostright});
          break;
        case '左转':
          that.setData({guiTurns: turnleft});
          break;
        case '右转':
          that.setData({guiTurns: turnright});
          break;
        case '掉头':
          that.setData({guiTurns: turnaround});
          break;
        default:
          that.setData({guiTurns: {turns: '', width: 'suto', height: 'auto'}});
          break;
      }
    }, times * 1000);
    times = times + element.time;
  });
  console.log(times);
  const time = setTimeout(() => {
    that.setData({onGuiStart: true, guiText: '导航结束'})
  }, times * 1000);
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 300,
    height: 300,
    renderWidth: 300,
    renderHeight: 300,
    inputValue: '',
    guiText: '开启室内导航',
    guiTurns: {turns: '', width: 'suto', height: 'auto'},
    speakerchanging: [
      {data: "(", left: '40%', opacity: 0},
      {data: "(", left: '30%', opacity: 0},
      {data: "(", left: '20%', opacity: 0},
      {data: ")", left: '60%', opacity: 0},
      {data: ")", left: '70%', opacity: 0},
      {data: ")", left: '80%', opacity: 0},
    ],
    getsrc: 'https://img.js.design/assets/img/66e6dc22d94a0ff0f7fb8417.png',
    srcArray: [],
    animationDataPNG: {},
    animationChatWeb: {},
    animationCommitButton: {},
    animationSpeakerSign: {},
    animationWriterSign: {},
    chatWebShow: false,
    writerStatusShow: true,
    sendStatusShow: false,
    inputShow: true,
    writerIconShow: false,
    isPNGDisabed: true,
    isHide: false,
    onGuiStart: true
  },
  onGuiReady() {
    this.setData({
      onGuiStart: false
    });
    /** 这里手动调整导航需求*/
    gui_mo_ni(this, [
      {gui: '直行', time: 2},
      {gui: '左转', time: 2},
      {gui: '右转', time: 2},
      {gui: '掉头', time: 2}
    ]);
  },
  onSpeakerEnd() {
    this.speakerGet = false;
  },
  onSpeakerStart() {
    let status = 0;
    this.speakerGet = true;
    const times = setInterval(() => {
      let data;
      switch (status) {
        case 1:
          data = this.data.speakerchanging;
          status = 2;
          data = data.map((item, index) => {
            if(index === 0 || index === 3) {
              return {...item, opacity: 1};
            } else {
              return {...item, opacity: 0};
            }
          })
          this.setData({speakerchanging: data});
          break;
        case 2:
          data = this.data.speakerchanging;
          status = 3;
          data = data.map((item, index) => {
            if(index === 1 || index === 4) {
              return {...item, opacity: 1};
            } else {
              return {...item, opacity: 0};
            }
          })
          this.setData({speakerchanging: data});
          break;
        case 3:
          data = this.data.speakerchanging;
          status = 0;
          data = data.map((item, index) => {
            if(index === 2 || index === 5) {
              return {...item, opacity: 1};
            } else {
              return {...item, opacity: 0};
            }
          })
          this.setData({speakerchanging: data});
          break;
        case 0:
          data = this.data.speakerchanging;
          status = 1;
          data = data.map((item) => {
              return {...item, opacity: 0};
          })
          this.setData({speakerchanging: data});
          break;
        default:
          data = this.data.speakerchanging;
          status = 1;
          data = data.map((item) => {
              return {...item, opacity: 0};
          })
          this.setData({speakerchanging: data});
          break;
      }
      if (!this.speakerGet) {
        clearInterval(times);
        data = data.map((item) => {
          return {...item, opacity: 0};
        })
        this.setData({speakerchanging: data});
      }
    },300)
  },
  onSendMail() {

  },
  onHideViewStop() {
  },
  onHideView() {
    if (this.data.isHide) {
      const animation0 = wx.createAnimation({
        duration: 800,
        timingFunction: 'ease-in-out',
      })
      const animation1 = wx.createAnimation({
        duration: 800,
        timingFunction: 'ease-in-out',
      })
      animation0.translateX(41).step();
      animation1.opacity(0).step();
      this.setData({
        animationChatWeb: animation1.export(),
        animationDataPNG: animation0.export(),
        isHide: false
      }, () => {
        const delayTime = setTimeout(() => {
          this.setData({
            animationDataPNG: {},
            animationChatWeb: {},
            animationCommitButton: {},
            animationSpeakerSign: {},
            animationWriterSign: {},
            chatWebShow: false,
            writerStatusShow: true,
            sendStatusShow: false,
            inputShow: true,
            writerIconShow: false,
            isPNGDisabed: false
            
          })
        }, 800);
      })
      
    }
  },
  onInputReady() {
    const animation0 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-in-out',
    })
    const animation1 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-in-out',
    })
    animation1.opacity(0).step();
    animation0.width(20).translateX(0).backgroundColor('transparent').step();
    this.setData({
      animationWriterSign: animation1.export()
      
    }, () => {
      const delayTime = setTimeout(() => {
        this.setData({
          animationSpeakerSign: animation0.export()
        })   
      }, 200);
      const delayTime1 = setTimeout(() => {
        this.setData({
          writerIconShow: false,
          inputShow: true
        })
      }, 800);
    });
    
  },
  onSpeakerReady() {
    this.animation_now.opacity(0).step();
    this.setData({
      inputShow: false,
      writerIconShow: true,
      animationWriterSign: this.animation_now.export()
    },() => {
      const animation0 = wx.createAnimation({
        duration: 800,
        timingFunction: 'ease-in-out',
      })
      const animation1 = wx.createAnimation({
        duration: 800,
        timingFunction: 'ease-in-out',
      })
      animation0.width(216).translateX(-20).backgroundColor('#C6EE94').step();
      animation1.opacity(1).step();
        this.setData({
          animationSpeakerSign: animation0.export()
        });
        const delayTime = setTimeout(() => {
          this.setData({
            animationWriterSign: animation1.export()
          })
        }, 400);
      })
  },
  onInputChange(e) {
    const value = e.detail.value;
    if(value.trim() === '') {
      this.setData({
        writerStatusShow:true,
        sendStatusShow: false
      })
    } else if (this.data.writerStatusShow) {
      const animation0 = wx.createAnimation({
        duration: 800,
        timingFunction: 'ease-in-out',
      })
      this.animation_now.translateX(0).step();
      this.setData({
        animationCommitButton: {}
      }, () => {
        this.setData({
          writerStatusShow: false,
          sendStatusShow: true,
          animationCommitButton: this.animation_now.export()
        }, () => {
          animation0.opacity(1).step(); 
          this.setData({
            animationCommitButton: animation0.export()
          })
        })
      })
      
    }
    this.setData({inputValue: value});
  },

  onShowChatWeb() {
    const animation0 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-in-out',
    })
    const animation1 = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-in-out',
    })
    animation0.translateX(-40).step();
    animation1.opacity(0).step();
    this.setData({
      animationChatWeb: {},
      animationDataPNG: {}
    }, () => {
      this.setData({animationChatWeb: animation1.export(), animationDataPNG: animation0.export(), chatWebShow: true}, () => {
        animation1.opacity(1).step();
        this.setData({animationChatWeb: animation1.export(),isHide: true});
      });
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const info = wx.getWindowInfo();
    const width = info.windowWidth;
    const height = info.windowHeight;
    const dpi = info.pixelRatio;
    const hui_png_array = [
      "https://img.js.design/assets/img/66e6dc22d94a0ff0f7fb8417.png",
      "https://img.js.design/assets/img/66e6dc22cf90ad6de22aab21.png",
      "https://img.js.design/assets/img/66e6dc225b793229c0d2058e.png",
      "https://img.js.design/assets/img/66e6dc22d94a0ff0f7fb8411.png",
      "https://img.js.design/assets/img/66e6dc225b793229c0d20590.png"
    ]
    this.setData({
      width, height,
      renderWidth: width * dpi,
      renderHeight: height * dpi,
      srcArray: hui_png_array
    });
    this.animation_now = wx.createAnimation({
      duration: 0,
      timingFunction: 'ease-in-out',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let count = 0;
    let back = false;
    let around = 0;
    const array_time0 = setInterval(() => {
      if (!back) {
        count += 1;
        this.setData({getsrc: this.data.srcArray[count]});
        if (count >= 4) {
          back = true;
          around += 1;
        }
      } else if (back) {
        count -= 1;
        this.setData({getsrc: this.data.srcArray[count]});
        if(count <= 0) {
          back = false;
          around += 1;
        }
      } 
      if (count <= 0 && around >= 4) {
        clearInterval(array_time0);
        const animation0 = wx.createAnimation({
          delay: 0,
          duration: 500,
          timingFunction: "ease-in-out",
        })
        animation0.translateX(41).step();
        this.setData({
          animationDataPNG: {}
        }, () => {
          this.setData({ animationDataPNG: animation0.export(), isPNGDisabed: false});
        })
        
      }
    }, 100);

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

  }
})