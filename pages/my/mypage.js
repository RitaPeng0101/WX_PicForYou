
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    
  },
  //进入登录界面
  toLogin: function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  //退出登录
  exit: function(){
    var that = this;
    wx.showModal({
      title: '',
      content: '请确认是否退出登录',
      confirmColor: "#3bac1f",
      success(res) {
        if(res.confirm){
          that.setData({
            isLogin: false
          });
          wx.removeStorageSync("userinfo");
        }
      }
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */

 
  bindGetUserInfo: function(e) {
        var that = this;
        _getUserInfo();
        function _getUserInfo() {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo,
                  isLogin: true
              })
            }
          })
        }
    },

    bindGetUserProfile: function(e) {
      var that = this;
      _getUserProfile();
      console.log("一键授权");
      function _getUserProfile() {
        wx.getUserProfile({
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
              isLogin: true
            })
          
          }
        })
      }
  }
})