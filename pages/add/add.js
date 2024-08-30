Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendNotes:false,
    uploadedImages: [
      '../../assests/add.png','../../assests/add.png','../../assests/add.png'
    ], // 用于存储本地图片路径数组
    isPublic:false,//是否公开
    save:false,//是否保存
    selectPublic:false,//打开公开选择框
    addLabel:false,//打开添加标签框
    selectedTag:[],//选中标签
    mainTopics: [
      { name: '必选话题1', subTopics: ['子话题1-1', '子话题1-2'] },
      {name: '必选话题2', subTopics: ['子话题2-1', '子话题2-2']},
      { name: '必选话题1', subTopics: ['子话题1-1', '子话题1-2'] },
      { name: '必选话题1', subTopics: ['子话题1-1', '子话题1-2'] },
      { name: '必选话题1', subTopics: ['子话题1-1', '子话题1-2'] },
      { name: '必选话题1', subTopics: ['子话题1-1', '子话题1-2'] },
    ],
    selectedMainTopic: {},
    selectedTags: [],
    isPopupVisible: false,
    selectPublic:false,
    isTagsVisible:false,
    avatar:wx.getStorageInfoSync('avatar')||'',
    name:wx.getStorageInfoSync('name')||'',
    title:'',
    body:'',
    time:'',//发布时间
    position:'',
    commentNum:'',

  },
  showPopup: function() {
    this.setData({ isPopupVisible: true });
  },
  selectMainTopic: function(e) {
    
    const index = e.currentTarget.dataset.index;
    const selectedTopic = this.data.mainTopics[index];
    console.log(selectedTopic)
    this.setData({
      selectedMainTopic: selectedTopic,
      isPopupVisible: true, // 保持弹出层显示
    });
  },
  selectSubTopic: function(e) {
    const index = e.currentTarget.dataset.index;
    const subTopic = this.data.selectedMainTopic.subTopics[index];
    const selectedTags = this.data.selectedTags;

    if (selectedTags.includes(subTopic)) {
      // 如果已选择，则取消选择
      this.setData({
        selectedTags: selectedTags.filter(t => t !== subTopic)
      });
    } else {
      // 如果未选择，则添加到已选择列表
      this.setData({
        selectedTags: [...selectedTags, subTopic]
      });
    }
  },
  deleteTag: function(e) {
    console.log()
    const index = e.currentTarget.dataset.index;
    const selectedTags = this.data.selectedTags;
    this.setData({
      selectedTags: selectedTags.filter((tag, i) => i !== index)
    });
  },
  hidePopup: function() {
    this.setData({ isPopupVisible: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    this.setData({
      uploadedImages: []
    });
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
  //回到社区页面
  back(){
    wx.switchTab({
      url: '/pages/community/community',
    })
  },
  // 标记地点
  handlePos(){

  },
  //公开可见框展示
  handlePublic(){
    const selectPublic = this.data.selectPublic;
    this.setData({
      selectPublic:true,
    })
    console.log(this.data.selectPublic)
  },
  //设置笔记公开
  ToPublic(){
    const isPublic = this.data.isPublic;
    const selectPublic = this.data.selectPublic;
      this.setData({
        isPublic:true,
        selectPublic:!selectPublic
      })
      //TODO:传入这篇笔记的xx给后端，便于后续访问笔记的时候筛选
  },
  //设置笔记私密
  ToSecret(){
    const isPublic = this.data.isPublic;
    const selectPublic = this.data.selectPublic;
      this.setData({
        isPublic:false,
        selectPublic:!selectPublic
      })
      //TODO:传入这篇笔记的xx给后端
  },
  disappear(){  
    const save = this.data.save;
    this.setData({
      save:!save
    })
  console.log(this.data.save)
},
  //添加标签框显示
  showAddLabel(){
    const addLabel = this.data.addLabel;
    this.setData({
      addLabel:!addLabel
    })
  },
  onUpload: function(e) {
    const that = this;
    wx.chooseMedia({
      count: 9, 
      mediaType: 'mix', // all 表示图片和视频，'image' 表示图片，'video' 表示视频
      sourceType: ['album', 'camera'], // 可以指定来源为相册或相机，默认二者都有
      success: function(res) {
        // 返回选定文件的本地文件路径列表
        const tempFiles = res.tempFiles;
        console.log(res)
        const newMedia = tempFiles.map(file => {
          return {
            url: file.tempFilePath, // 使用本地临时路径
            type: file.fileType === 'image' ? 'image' : 'video', // 判断是图片还是视频
            size: file.size // 文件大小
          };
        });
        // 更新页面数据
        that.setData({
          uploadedImages: [...that.data.uploadedImages, ...newMedia]
        });
        // that.uploadFile(tempFilePaths[0]);
        
      },
      fail: function(err) {
        console.log('选择失败：', err);
      }
    });
  },
  uploadFile: function(filePath) {
    const that = this;
    wx.uploadFile({
      url: '你的上传接口地址', // 这里需要服务器端的支持
      filePath: filePath,
      name: 'upload', // 这里是服务器接受文件的key
      success: function(res) {
        const data = JSON.parse(res.data);
        if (data.code === 0) {
          // 上传成功，处理返回的数据
        } else {
          // 上传失败，提示错误信息
        }
      },
      fail: function(err) {
        console.error('上传失败：', err);
      }
    });
  },
  //保存草稿
  handleSaveDraft(){
    //TODO:接口
    const save = this.data.save;
    this.setData({
      save:!save
    })
    console.log(save)
    setTimeout(()=>{
      this.disappear()
    },500)
    
    
  },
  
  //发布
  handleSend(){
    console.log('send')
    const sendNotes = this.data.sendNotes;
    const now = this.data.now;
    setTimeout(()=>{
      this.setData({
        sendNotes:true,
        now:Date.now(),
       
      })
      wx.navigateTo({
        url: '../../pages/note/note.js',
      })
    },1000)

   
  },
  handleFocus(){

  },
  handleShare(){

  },
  handleShowTags(){
    const isTagsVisible = this.data.isTagsVisible;
    this.setData({
      isTagsVisible:!isTagsVisible
    })
  }
})