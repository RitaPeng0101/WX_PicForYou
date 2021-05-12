// pages/home/home.js.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

