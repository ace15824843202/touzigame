//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageArr:[
      {
         "src":"1-point.png",
         "score":1
      },
      {
        "src": "2-point.png",
        "score": 2
      },
      {
        "src": "3-point.png",
        "score": 3
      },
      {
        "src": "4-point.png",
        "score": 4
      }
      , {
        "src": "5-point.png",
        "score": 5
      }, 
      {
        "src": "6-point.png",
        "score": 6
      }
    ],
    score:0,  //点数和
    btnTxt:"开始",  //按钮说明
    onePic:"1-point.png",
    twoPic: "2-point.png",
    threePic: "3-point.png",
    flag:true, //开关
    timer:null, //定时器
    activeClass:'active'
  },

  getImage(){
    var len=this.data.imageArr.length;
    if(this.data.flag){
      this.data.timer = setInterval(() => {
        var one = Math.round(Math.random() * (len - 1));
        var two = Math.round(Math.random() * (len - 1));
        var three = Math.round(Math.random() * (len - 1));
        var score = this.data.imageArr[one].score + this.data.imageArr[two].score + this.data.imageArr[three].score;
        this.setData({
          onePic: this.data.imageArr[one].src,
          twoPic: this.data.imageArr[two].src,
          threePic: this.data.imageArr[three].src,
          score,
          btnTxt: '停止',
          flag:false,
          activeClass:''

        })

      }, 30)
    }else{
      clearInterval(this.data.timer)
      this.setData({
        flag:true,
        btnTxt:'开始',
        activeClass:'active'
      })
    }
    
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  }
})