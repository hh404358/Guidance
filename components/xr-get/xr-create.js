// components/xr-get/xr-create.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleReady() {
      console.log('ready');
    },
    handleAssetsLoaded(assets, error) {
      console.log(assets, error);
    }
  }
})