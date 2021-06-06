// pages/home/home.js.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
     // 模态对话框样式 
     modalShowStyle: "",

     // 待新建的日记标题
     diaryTitle: "",
  },


  
  bindblur: function(e) {
    let that = this;
    wx.request({
      url: 'http://127.0.0.1:5000/ecs/getServerInfo',
      method: 'GET',
      data: {
        instanceId: e.detail.value
      },
      success(res) {
        if(res.statusCode == 200){
          that.setData({
            queryResult: res.data,
            showView: !that.data.showView,
          });
        }else{
          that.setData({
            showView: 'false',
          });
          wx.showToast({
            title: '请输入正确的实例ID',
            duration: 1500,
            icon: 'none',
            mask: true
          })
        }
      }

    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad:function(){

  },
  // 点击新建日记按钮
  touchAdd: function (event) {
    this.setData({
        modalShowStyle: "opacity:1;pointer-events:auto;"
    })
},

// 新建日记
touchAddNew: function(event) {
    this.hideModal();

    wx.navigateTo({
        url: "../new/new?title=" + this.data.diaryTitle,
    });
},
// 隐藏模态框
hideModal() {
  this.setData({modalShowStyle: ""});
},

// 清除日记标题
clearTitle() {
  this.setData({diaryTitle: ""});
},


// 取消标题输入
touchCancel: function(event) {
    this.hideModal();
    this.clearTitle();
}, 

// 标题输入事件
titleInput: function(event) {
    this.setData({
        diaryTitle: event.detail.value,
    })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
        this.hideModal();
        this.clearTitle();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },



})

