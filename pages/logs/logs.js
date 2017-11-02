//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    logs: [],
    text: "",
    boardText: ["Medborgarplatsen", "1 Min", "Farsta Strand 5 Min; Farsta Strand 5 Min; Farsta Strand 5 Min;", 
    "Medborgarplatsen", "1 Min", "Farsta Strand 5 Min; Farsta Strand 5 Min; Farsta Strand 5 Min;", 
    "Medborgarplatsen", "1 Min", "Farsta Strand 5 Min; Farsta Strand 5 Min; Farsta Strand 5 Min;", 
    "Medborgarplatsen", "1 Min", "Farsta Strand 5 Min; Farsta Strand 5 Min; Farsta Strand 5 Min;", 
    "Medborgarplatsen", "1 Min", "Farsta Strand 5 Min; Farsta Strand 5 Min; Farsta Strand 5 Min;", 
    "Medborgarplatsen", "1 Min", "Farsta Strand 5 Min; Farsta Strand 5 Min; Farsta Strand 5 Min;"],
    animationData: null
  },
  onLoad: function () {
    var i;
    this.setData({
      boardText: app.globalData.metroInfo
    })

    var animation = wx.createAnimation({
      duration: this.data.boardText[2].length * 130,
      timingFunction: "linear"
    }) 
    var that = this
    setInterval(function(){
      animation.translateX(- that.data.boardText[2].length * 9.6 - 375).step()
      that.setData({
        animationData: animation.export()
      })
      setTimeout(function() {
        var Reanimation = wx.createAnimation({
          duration: 10,
          timingFunction: "start-end"
        })
        Reanimation.translateX(that.data.boardText[2].length * 9.6 + 375).step()
        that.setData({
          animationData: Reanimation.export()
        })
      }, that.data.boardText[2].length * 130 + 100)
    }, this.data.boardText[2].length * 130 + 200)
    

    this.setData({
      text: app.globalData.metroInfo
    })
  }
})
