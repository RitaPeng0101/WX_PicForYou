// pages/index/index.js
Page({
  data: {
   nickName: "微信账号登录用户",
   avatarUrl:"/icon/favorite.png",
  },
  onLoad: function () {
   var that = this;
   var nickName = that.data.nickName ;
   var avatarUrl = that.data.avatarUrl;
   var db="no";
   wx.getUserProfile({
    success: function (res) {
     that.data.nickName = res.userInfo.nickName,
     that.data.avatarUrl = res.userInfo.avatarUrl,
     that.setData({
      nickName: that.data.nickName,
      avatarUrl: that.data.avatarUrl,
     }),
     that.setData({
      db:"ok"// 设置变量db，只有成功获取用户信息后才写入数据库
     })
     if(db = "ok") {
      var name, url;
      wx.request({
       url: 'https://39.101.143.13/getuserinfo.php',
       header: {
        "Content-Type": "application/x-www-form-urlencoded"
       },
       method: "POST",
       data: {
        name: res.userInfo.nickName,
        url: res.userInfo.avatarUrl,
       },
       success: function () {
        console.log("success")
       },
       fail: function () {
        console.log("fail")
       }
      })
     }
    },
    fail: function (res) {
     that.data.nickName = "未授权无法获取用户信息",
      that.setData({
       nickName: that.data.nickName
      })
    }
   })
  },
 onShow: function () {
  }
 })