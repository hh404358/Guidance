/**
 * @file 该文件集成了所有针对后端的接口，任何需要与后端交互的接口都应该将此文件import到对应文件夹中
 * 
 */

// import axios from 'axios';
class axios_rewrite {
  constructor(options) {
    if (options) {
      if (typeof(options.baseURL) == "string" ) {
        this.baseURL = options.baseURL;
      } else {
        this.baseURL = "";
      }
      if (typeof(options.retry) == "number") {
        this.retry = options.retry;
      }
      if (typeof(options.retryDelay) == "number") {
        this.retryDelay = options.retryDelay;
      }
    }
    
  }
  /**
   * 
   * @param {String} url 
   * @param {Object} options
   * @param {Object} options.params
   * @param {Object} options.headers 
   */
  get(url, options) {
    let geturl = this.baseURL + url;
    const options_in = options?options:{};
    if (options_in.params) {
      geturl = geturl + '?' + this.toQueryString(options_in.params);
    }
    console.log(geturl);
    return new Promise((resolve, reject) => {
      wx.request({
        url: geturl,
        dataType: "json",
        header: options_in.headers,
        method: "GET",
        timeout: this.retryDelay?this.retryDelay: 0,
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      })
    })
  }
  post(url, options) {
    let geturl = this.baseURL + url;
    const options_in = options?options:{};
    if (options_in.params) {
      geturl = geturl + this.toQueryString(options_in.params);
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: geturl,
        data: options_in.data,
        dataType: "json",
        header: options_in.headers,
        method: 'POST',
        timeout: this.retryDelay?this.retryDelay: 0,
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      })
    })
  }
  put(url, options) {
    let geturl = this.baseURL + url;
    const options_in = options?options:{};
    if (options_in.params) {
      geturl = geturl + this.toQueryString(options_in.params);
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: geturl,
        data: options_in.data,
        dataType: "json",
        header: options_in.headers,
        method: 'PUT',
        timeout: this.retryDelay?this.retryDelay: 0,
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      })
    })
  }
  delete(url, options) {
    let geturl = this.baseURL + url;
    const options_in = options?options:{};
    if (options_in.params) {
      geturl = geturl + this.toQueryString(options_in.params);
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: geturl,
        data: options_in.data,
        dataType: "json",
        header: options_in.headers,
        method: 'DELETE',
        timeout: this.retryDelay?this.retryDelay: 0,
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        }
      })
    })
  }

  toQueryString(params) {
    return Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  }
}
const axios = new axios_rewrite({
  baseURL: 'http://154.40.44.199:8133',
  retry: 3,  // 最大重试次数
  retryDelay: 1000  // 重试延迟时间（毫秒）
});

class inter_comment_controller {
  constructor(parameters) {
    
  }
  /**
   * 接口名称：更新评论
   * URL：/comments/update/{id}
   * 请求方式：put
   * @param {Object} body 
   * @param {Number} id  
   * @param {Number} body.commentId
   * @param {String} body.userOpenid
   * @param {Number} body.postId
   * @param {String} body.content
   * @param {Number} body.parentCommentId
   * @param {Number} body.isDeleted
   * @param {String} body.createdAt
   * @param {String} body.updatedAt
   * @param {String} body.mentionedUserId
   * @returns {Object} response.data
   */
  async update_comment (id, body) {
    let id_in = 0;
    let body_in = {};
    if (id !== undefined && typeof(id)==='number') {
      id_in = id;
    } else {
      console.error('参数错误', id);
      throw new Error('参数错误');
    }
    if (body !== undefined && typeof(body)==='object') {
      body_in = body;
    } else {
      console.error('参数错误');
      throw new Error('参数错误');
    }

    try {
      axios.put(`/comments/update/${id_in}`, body_in)
      .then(response => {
        console.log(response);
        return response.data;
      })
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：回复评论
   * URL：/comments/reply
   * 请求方式：post
   * @param {String} content 
   * @param {Number} parentCommentId 
   * @param {Array} imageFiles 
   * @param {String} videoFiles
   * @param {String} mentionedUserId 
   * @param {Number} postId 
   * @returns {Object} response.data
   */
  async reply_comment (parentCommentId,postId,content,mentionedUserId,imageFiles,videoFiles) {
    let parentCommentId_in = 0;
    let postId_in = 0;
    let content_in = '';
    let mentionedUserId_in = '';
    let imageFiles_in = [];
    let videoFiles_in = '';
    if (parentCommentId !== undefined && typeof(parentCommentId)==='number') {
      parentCommentId_in = parentCommentId;
    } else {
      console.error('参数错误', parentCommentId);
      throw new Error('参数错误');
    }
    if (postId !== undefined && typeof(postId)==='number') {
      postId_in = postId;
    } else {
      console.error('参数错误', postId);
      throw new Error('参数错误');
    }
    if (content !== undefined && typeof(content)==='string') {
      content_in = content;
    } else {
      console.error('参数错误', content);
      throw new Error('参数错误');
    }
    if (mentionedUserId !== undefined && typeof(mentionedUserId)==='string') {
      mentionedUserId_in = mentionedUserId;
    }
    if (imageFiles !== undefined && typeof(imageFiles)==='object') {
      imageFiles_in = imageFiles;
    }
    if (videoFiles !== undefined && typeof(videoFiles)==='string') {
      videoFiles_in = videoFiles;
    }
    try {
      axios.post('/comments/reply', {} ,{
        params: {
          parentCommentId: parentCommentId_in,
          postId: postId_in,
          content: content_in,
          mentionedUserId: mentionedUserId_in,
          imageFiles: imageFiles_in,
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(error => {
        throw new Error(error);
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取评论列表
   * URL：/comments/post/{postId}
   * 请求方式：post
   * @param {Number} postId
   * @param {Object} body
   * @param {Number} body.pageNum
   * @param {Number} body.pageSize
   * @returns {Object} response.data
   */
  async get_comment_list (postId,body) {
    let postId_in = 0;
    let body_in = {};
    if (postId !== undefined && typeof(postId)==='number') {
      postId_in = postId;
    } else {
      console.error('参数错误', postId);
      throw new Error('参数错误');
    }
    if (body !== undefined && typeof(body)==='object') {
      body_in = body;
    }
    try {
      axios.post(`/comments/post/${postId_in}`, body_in)
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：'@'评论
   * URL：/comments/mention
   * 请求方式：post
   * @param {Object} body
   * @param {Number} body.commentId
   * @param {String} body.userOpenid
   * @param {Number} body.postId
   * @param {String} body.content
   * @param {Number} body.parentCommentId
   * @param {Number} body.isDeleted
   * @param {String} body.createdAt
   * @param {String} body.updatedAt
   * @param {String} body.mentionedUserId
   * @param {String} body.imageUrls
   * @param {String} body.videoUrl
   */
  async mention_comment (body) {
    let body_in = {};
    if (body !== undefined && typeof(body)==='object') {
      body_in = body;
    }
    try {
      axios.post('/comments/mention', body_in)
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：创建评论
   * URL：/comments/create
   * 请求方式：post
   * @param {String} content
   * @param {Number} postId
   * @param {String} mentionedUserId
   * @param {Array} imageFiles
   * @param {String} videoFiles
   */
  async create_comment (content,postId,mentionedUserId,imageFiles,videoFiles) {
    let content_in = '';
    let postId_in = 0;
    let mentionedUserId_in = '';
    let imageFiles_in = [];
    let videoFiles_in = '';
    if (content !== undefined && typeof(content)==='string') {
      content_in = content;
    } else {
      console.error('参数错误', content);
      throw new Error('参数错误');
    }
    if (postId !== undefined && typeof(postId)==='number') {
      postId_in = postId;
    } else {
      console.error('参数错误', postId);
      throw new Error('参数错误');
    }
    if (mentionedUserId !== undefined && typeof(mentionedUserId)==='string') {
      mentionedUserId_in = mentionedUserId;
    }
    if (imageFiles !== undefined && typeof(imageFiles)==='object') {
      imageFiles_in = imageFiles;
    }
    if (videoFiles !== undefined && typeof(videoFiles)==='string') {
      videoFiles_in = videoFiles;
    }
    try {
      axios.post('/comments/create', {}, {
        params: {
          content: content_in,
          postId: postId_in,
          mentionedUserId: mentionedUserId_in,
          imageFiles: imageFiles_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取评论下的所有回复
   * URL：/comments/replies/{commentId}
   * 请求方式：get
   * @param {Number} commentId
   * @param {Object} pages
   * @return {Object} data
   */
  async get_replies (commentId,pages) {
    let commentId_in = 0;
    let pages_in = {};
    if (commentId !== undefined && typeof(commentId)==='number') {
      commentId_in = commentId;
    } else {
      console.error('参数错误', commentId);
      throw new Error('参数错误');
    }
    if (pages !== undefined && typeof(pages)==='object') {
      pages_in = pages;
    } else {
      console.error('参数错误', pages);
      throw new Error('参数错误');
    }
    try {
      axios.get('/comments/replies/' + commentId_in, {
        params: pages_in
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取评论详情
   * URL：/comments/get/{id}
   * 请求方式：get
   * @param {Number} id
   * @return {Object} data
   */
  async get_comment (id) {
    let id_in = 0;
    if (id !== undefined && typeof(id)==='number') {
      id_in = id;
    } else {
      console.error('参数错误', id);
      throw new Error('参数错误');
    }
    try {
      axios.get('/comments/get/' + id_in)
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：删除评论
   * URL：/comments/delete/{id}
   * 请求方式：delete
   * @param {Number} id
   * @return {Object} data
   */
  async delete_comment (id) {
    let id_in = 0;
    if (id !== undefined && typeof(id)==='number') {
      id_in = id;
    } else {
      console.error('参数错误', id);
      throw new Error('参数错误');
    }
    try {
      axios.delete('/comments/delete/' + id_in)
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
}

/**
 * @class inter_interaction_controller
 * @description 互动接口控制器
 */
class inter_interaction_controller {
  /**
   * 接口名称：对帖子点赞
   * URL：/interaction/likePost
   * 请求方式：post
   * @param {Number} postId
   * @return {Object} data
   */
  async like_post (postId) {
    let postId_in = 0;
    if (postId !== undefined && typeof(postId)==='number') {
      postId_in = postId;
    } else {
      console.error('参数错误', postId);
      throw new Error('参数错误');
    }
    try {
      axios.post('/interaction/likePost', {}, {
        params: {
          postId: postId_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：对评论点赞
   * URL：/interaction/likeComment
   * 请求方式：post
   * @param {Number} commentId
   * @return {Object} data
   */
  async like_comment (commentId) {
    let commentId_in = 0;
    if (commentId !== undefined && typeof(commentId)==='number') {
      commentId_in = commentId;
    } else {
      console.error('参数错误', commentId);
      throw new Error('参数错误');
    }
    try {
      axios.post('/interaction/likeComment', {}, {
        params: {
          commentId: commentId_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：对帖子收藏
   * URL：/interaction/favorite
   * 请求方式：post
   * @param {Number} postId
   * @return {Object} data
   */
  async favorite_post (postId) {
    let postId_in = 0;
    if (postId !== undefined && typeof(postId)==='number') {
      postId_in = postId;
    } else {
      console.error('参数错误', postId);
      throw new Error('参数错误');
    }
    try {
      axios.post('/interaction/favorite', {}, {
        params: {
          postId: postId_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：统计用户获赞数量
   * URL：/interaction/getLikeCount
   * 请求方式：get
   * @return {Object} data
   */
  async get_like_count () {
    try {
      axios.get('/interaction/getLikeCount')
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取用户收藏的帖子
   * URL：/interaction/getFavoritePosts
   * 请求方式：get
   * @return {Object} data
   */
  async get_favorite_posts () {
    try {
      axios.get('/interaction/getFavoritePosts')
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：取消对帖子的点赞
   * URL：/interaction/unlikePost
   * 请求方式：delete
   * @param {Number} postId
   * @return {Object} data
   */
  async unlike_post (postId) {
    let postId_in = 0;
    if (postId !== undefined && typeof(postId)==='number') {
      postId_in = postId;
    } else {
      console.error('参数错误', postId);
      throw new Error('参数错误');
    }
    try {
      axios.delete('/interaction/unlikePost', {
        params: {
          postId: postId_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：取消对评论的点赞
   * URL：/interaction/unlikeComment
   * 请求方式：delete
   * @param {Number} commentId
   * @return {Object} data
   */
  async unlike_comment (commentId) {
    let commentId_in = 0;
    if (commentId !== undefined && typeof(commentId)==='number') {
      commentId_in = commentId;
    } else {
      console.error('参数错误', commentId);
      throw new Error('参数错误');
    }
    try {
      axios.delete('/interaction/unlikeComment', {
        params: {
          commentId: commentId_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：取消收藏帖子
   * URL：/interaction/unfavorite
   * 请求方式：delete
   * @param {Number} postId
   * @return {Object} data
   */
  async unfavorite_post (postId) {
    let postId_in = 0;
    if (postId !== undefined && typeof(postId)==='number') {
      postId_in = postId;
    } else {
      console.error('参数错误', postId);
      throw new Error('参数错误');
    }
    try {
      axios.delete('/interaction/unfavorite', {
        params: {
          postId: postId_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
}

/**
 * @class inter_post_controller
 * @description 帖子相关接口
 */
class inter_post_controller {
  /**
   * 接口名称：更新帖子信息
   * URL：/post/update/{id}
   * 请求方式：put
   * @param {Number} id
   * @param {Object} body
   * @param {Number} body.postId
   * @param {String} body.userOpenid
   * @param {Number} body.communityId
   * @param {String} body.title
   * @param {String} body.content
   * @param {String} body.videoUrl
   * @param {String} body.imageUrl
   * @param {Number} body.isDeleted
   * @param {Number} body.isOfficial
   * @param {Number} body.isPublic
   * @param {String} body.location
   * @param {Number} body.isDraft
   * @param {String} body.createdAt
   * @param {String} body.updatedAt
   * @return {Object} data
   */
  async update_post (id, body) {
    let id_in = 0;
    if (id !== undefined && typeof(id)==='number') {
      id_in = id;
    } else {
      console.error('参数错误', id);
      throw new Error('参数错误');
    }
    if (body !== undefined && typeof(body)==='object') {
      try {
        axios.put('/post/update/' + id_in, body)
        .then(response => {
          console.log(response);
          return response.data;
        })
      }
      catch (error) {
        console.error(error);
      }
    } else {
      console.error('参数错误', body);
      throw new Error('参数错误');
    }
  }
  /**
   * 接口名称：修改帖子公开状态
   * URL：/post/changePublic
   * 请求方式：put
   * @param {Number} postId
   * @param {Number} isPublic
   * @return {Object} data
   */
  async change_public (postId, isPublic) {
    let postId_in = 0;
    if (postId !== undefined && typeof(postId)==='number') {
      postId_in = postId;
    } else {
      console.error('参数错误', postId);
      throw new Error('参数错误');
    }
    let isPublic_in = 0;// 默认值
    if (isPublic !== undefined && typeof(isPublic)==='number') {
      isPublic_in = isPublic;
    } else {
      console.error('参数错误', isPublic);
      throw new Error('参数错误');
    }
    try {
      axios.put('/post/changePublic', {
        params: {
          postId: postId_in,
          isPublic: isPublic_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取用户的搜索历史
   * URL：/post/searchHistory
   * 请求方式：get
   * @return {Object} data
   */
  async search_history () {
    try {
      axios.get('/post/searchHistory')
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：保存搜索历史
   * URL：/post/searchHistory
   * 请求方式：post
   * @param {String} keyword
   * @return {Object} data
   */
  async save_search_history (keyword) {
    let keyword_in = '';// 默认值
    if (keyword !== undefined && typeof(keyword)==='string') {
      keyword_in = keyword;
    } else {
      console.error('参数错误', keyword);
      throw new Error('参数错误');
    }
    try {
      axios.post('/post/searchHistory', {
        params: {
          keyword: keyword_in
        }
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：暂存帖子草稿
   * URL：/post/saveDraft
   * 请求方式：post
   * @param {String} title
   * @param {String} content
   * @param {Number} communityId
   * @param {Array} imageFiles
   * @param {String} videoFile
   * @param {String} location
   * @return {Object} data
   */
  async save_draft (title, content, communityId, imageFiles, location, videoFile) {
    let title_in = '';// 默认值
    if (title !== undefined && typeof(title)==='string') {
      title_in = title;
    } else {
      console.error('参数错误', title);
      throw new Error('参数错误');
    }
    let content_in = '';// 默认值
    if (content !== undefined && typeof(content)==='string') {
      content_in = content;
    } else {
      console.error('参数错误', content);
      throw new Error('参数错误');
    }
    let communityId_in = 0;// 默认值
    if (communityId !== undefined && typeof(communityId)==='number') {
      communityId_in = communityId;
    } else {
      console.error('参数错误', communityId);
      throw new Error('参数错误');
    }
    let imageFiles_in = [];// 默认值
    if (imageFiles !== undefined && typeof(imageFiles)==='object') {
      imageFiles_in = imageFiles;
    }
    let videoFile_in = '';// 默认值
    if (videoFile !== undefined && typeof(videoFile)==='string') {
      videoFile_in = videoFile;
    }
    let location_in = '';// 默认值
    if (location !== undefined && typeof(location)==='string') {
      location_in = location;
    }
    try {
      axios.post('/post/saveDraft', {
        params: {
          title: title_in,
          content: content_in,
          communityId: communityId_in,
          imageFiles: imageFiles_in,
          location: location_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：创建帖子
   * URL：/post/create
   * 请求方式：post
   * @param {String} title
   * @param {String} content
   * @param {Number} communityId
   * @param {Array} imageFiles
   * @param {Number} isPublic
   * @param {String} location
   * @param {String} videoFile
   * @return {Object} data
   */
  async create_post (title, content, communityId, imageFiles, location, isPublic, videoFile) {
    let title_in = '';// 默认值
    if (title !== undefined && typeof(title)==='string') {
      title_in = title;
    } else {
      console.error('参数错误', title);
      throw new Error('参数错误');
    }
    let content_in = '';// 默认值
    if (content !== undefined && typeof(content)==='string') {
      content_in = content;
    } else {
      console.error('参数错误', content);
      throw new Error('参数错误');
    }
    let communityId_in = 0;// 默认值
    if (communityId !== undefined && typeof(communityId)==='number') {
      communityId_in = communityId;
    } else {
      console.error('参数错误', communityId);
      throw new Error('参数错误');
    }
    let imageFiles_in = [];// 默认值
    if (imageFiles !== undefined && typeof(imageFiles)==='object') {
      imageFiles_in = imageFiles;
    } else {
      console.error('参数错误', imageFiles);
      throw new Error('参数错误');
    }
    let isPublic_in = 0;// 默认值
    if (isPublic !== undefined && typeof(isPublic)==='number') {
      isPublic_in = isPublic;
    } else {
      console.error('参数错误', isPublic);
      throw new Error('参数错误');
    }
    let location_in = '';// 默认值
    if (location !== undefined && typeof(location)==='string') {
      location_in = location;
    } else {
      console.error('参数错误', location);
      throw new Error('参数错误');
    }
    let videoFile_in = '';// 默认值
    if (videoFile !== undefined && typeof(videoFile)==='string') {
      videoFile_in = videoFile;
    }
    try {
      axios.post('/post/create', {
        params: {
          title: title_in,
          content: content_in,
          communityId: communityId_in,
          imageFiles: imageFiles_in,
          isPublic: isPublic_in,
          location: location_in
        }
      })
      .then(response => {
        console.log(response);
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取用户收藏数量较高的帖子
   * URL：/post/topFavorited
   * 请求方式：get
   * @param {Number} limit
   * @return {Object} data
   */
  async get_top_favorited_post (limit) {
    let limit_in = 1;// 默认值
    if (limit !== undefined && typeof(limit)==='number') {
      limit_in = limit;
    }
    try {
      axios.get('/post/topFavorited', {
        params: {
          limit: limit_in
        }
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：根据关键字搜索帖子
   * URL：/post/search
   * 请求方式：get
   * @param {String} keyword
   * @return {Object} data
   */
  async search_post (keyword) {
    let keyword_in = '';// 默认值
    if (keyword !== undefined && typeof(keyword)==='string') {
      keyword_in = keyword;
    } else {
      console.error('参数错误', keyword);
      throw new Error('参数错误');
    }
    try {
      axios.get('/post/search', {
        params: {
          keyword: keyword_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取热门搜索词
   * URL：/post/popularSearches
   * 请求方式：get
   * @return {Object} data
   */
  async get_popular_searches () {
    try {
      axios.get('/post/popularSearches')
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 有问题，需要修改
   * 接口名称：获取所有官方的帖子
   * URL：/post/official
   * 请求方式：get
   * @param {Object} pages
   * @return {Object} data
   */
  async get_official_post (pages) {
    let pages_in = {};// 默认值
    if (pages !== undefined && typeof(pages)==='object') {
      pages_in = pages;
    } else {
      console.error('参数错误', pages);
      throw new Error('参数错误');
    }
    try {
      axios.get('/post/official', {
        params: {
          pages: pages_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 有问题，需要修改
   * 接口名称：获取所有非官方创建的帖子
   * URL：/post/nonOfficial
   * 请求方式：get
   * @param {Object} pages
   * @return {Object} data
   */
  async get_non_official_post (pages) {
    let pages_in = {};// 默认值
    if (pages !== undefined && typeof(pages)==='object') {
      pages_in = pages;
    } else { 
      console.error('参数错误', pages);
      throw new Error('参数错误');
    }
    try {
      axios.get('/post/nonOfficial', {
        params: {
          pages: pages_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：用户获取自己发布的帖子的列表
   * URL：/post/getPostList
   * 请求方式：get
   * @param {Object} pages
   * @return {Object} data
   */
  async get_post_list (pages) {
    let pages_in = {};// 默认值
    if (pages !== undefined && typeof(pages)==='object') {
      pages_in = pages;
    } else {
      console.error('参数错误', pages);
      throw new Error('参数错误');
    }
    try {
      axios.get('/post/getPostList', {
        params: {
          pages: pages_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取用户的所有草稿
   * URL：/post/getDrafts
   * 请求方式：get
   * @return {Object} data
   */
  async get_drafts () {
    try {
      axios.get('/post/getDrafts')
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取当前社区帖子列表
   * URL：/post/getCommunityPostList/{communityId}
   * 请求方式：get
   * @param {Number} communityId
   * @param {Object} pages
   * @return {Object} data
   */
  async get_community_post_list (communityId, pages) {
    let communityId_in = 0;// 默认值
    let pages_in = {};// 默认值
    if (communityId !== undefined && typeof(communityId)==='number') {
      communityId_in = communityId;
    } else {
      console.error('参数错误', communityId);
      throw new Error('参数错误');
    }
    if (pages !== undefined && typeof(pages)==='object') {
      pages_in = pages;
    } else {
      console.error('参数错误', pages);
    }
    try {
      axios.get(`/post/getCommunityPostList/${communityId_in}`, {
        params: {
          pages: pages_in
        }
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：获取帖子详细信息
   * URL：/post/get/{id}
   * 请求方式：get
   * @param {Number} id
   * @return {Object} data
   */
  async get_post_detail (id) {
    let id_in = 0;// 默认值
    if (id !== undefined && typeof(id)==='number') {
      id_in = id;
    } else {
      console.error('参数错误', id);
      throw new Error('参数错误');
    }
    try {
      axios.get(`/post/get/${id_in}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
  /**
   * 接口名称：删除帖子
   * URL：/comment/delete/{id}
   * 请求方式：delete
   * @param {Number} id
   * @return {Object} data
   */
  async delete_post (id) {
    let id_in = 0;// 默认值
    if (id !== undefined && typeof(id)==='number') {
      id_in = id;
    } else {
      console.error('参数错误', id);
      throw new Error('参数错误');
    }
    try {
      axios.delete(`/comment/delete/${id_in}`)
      .then(response => {
        console.log(response);
        return response.data;
      })
    }
    catch (error) {
      console.error(error);
    }
  }
}
function test() {
  try {
    axios.get('/user/test/login1')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
      
    })
  } catch (error) {
    console.error(error);
  }
}

export class InterGuiController {
  constructor() {

  }
  TTS(input, options) {
    if (!input) {
      return -1;
    }
    try {
      axios.get("/navigete/assistant/tts", {
        params: {
          input: input
        }
      }).then((data) => {
        console.log(data);
      })
    } catch (error) {
      console.error(error);
    }
  }
}

// const inter_comment_controller_in = new inter_comment_controller();
// inter_comment_controller_in.update_comment(0,{})// 测试

export default {
  inter_comment_controller,
  inter_interaction_controller,
  inter_post_controller,
  test
}