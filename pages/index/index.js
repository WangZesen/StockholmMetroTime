//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    htmlData: null,
    loadingHidden: true,
    motto: '一键开始！',
    text1: "text1",
    text2: "text2",
    text3: "text3",
    animationData: null,
    fadingAnimation: null,
    appearAnimation: null,
    animation1: null,
    animation2: null,
    animation3: null,
    animation4: null,
    imageAnimation: null,
    userInfo: {},
    timeInfo: "Empty",
    hasUserInfo: false,
    latitude: 0.0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    stationName: [["Hjulsta", "Tensta", "Rinkeby", "Rissne", "Duvbo", "Sundbybergs centrum", "Solna strand", "Huvudsta", "Västra Skogen", "Stadshagen", "Fridhemsplan", "Rådhuset", "T-Centralen", "Kungsträdgården (T-banan)"], 
    ["Akalla", "Husby", "Kista", "Hallonbergen", "Näckrosen", "Solna centrum", "Västra Skogen", "Stadshagen", "Fridhemsplan", "Rådhuset", "T-Centralen", "Kungsträdgården (T-banan)"], 
    ["Mörby centrum", "Danderyds sjukhus", "Bergshamra", "Universitetet", "Tekniska högskolan", "Stadion (t-banan)", "Östermalmstorg", "T-Centralen", "Gamla stan", "Slussen", "Mariatorget (t-banan)", "Zinkensdamm", "Hornstull", "Liljeholmen", "Midsommarkransen", "Telefonplan", "Hägerstensåsen (t-banan)", "Västertorp", "Fruängen"], 
    ["Ropsten", "Gärdet", "Karlaplan", "Östermalmstorg", "T-Centralen", "Gamla stan", "Slussen", "Mariatorget (t-banan)", "Zinkensdamm", "Hornstull", "Liljeholmen", "Aspudden", "Örnsberg", "Axelsberg", "Mälarhöjden", "Bredäng", "Sätra", "Skärholmen", "Vårberg", "Vårby gård", "Masmo", "Fittja", "Alby", "Hallunda", "Norsborg"], 
    ["Hässelby strand", "Hässelby gård", "Johannelund", "Vällingby", "Råcksta", "Blackeberg", "Islandstorget", "Ängbyplan", "Åkeshov", "Brommaplan", "Abrahamsberg", "Stora mossen", "Alvik", "Kristineberg", "Thorildsplan", "Fridhemsplan", "S:t Eriksplan", "Odenplan", "Rådmansgatan (t-banan)", "Hötorget", "T-Centralen", "Gamla stan", "Slussen", "Medborgarplatsen", "Skanstull", "Gullmarsplan", "Globen", "Enskede gård", "Sockenplan", "Svedmyra", 
      "Stureby", "Bandhagen", "Högdalen", "Rågsved", "Hagsätra"], 
    ["Åkeshov", "Brommaplan", "Abrahamsberg", "Stora mossen", "Alvik", "Kristineberg", "Thorildsplan", "Fridhemsplan", "S:t Eriksplan", "Odenplan", "Rådmansgatan (t-banan)", "Hötorget", "T-Centralen", "Gamla stan", "Slussen", "Medborgarplatsen", "Skanstull", "Gullmarsplan", "Skärmarbrink", "Hammarbyhöjden", "Björkhagen", "Kärrtorp", "Bagarmossen", "Skarpnäck (t-banan)"], 
    ["Alvik", "Kristineberg", "Thorildsplan", "Fridhemsplan", "S:t Eriksplan", "Odenplan", "Rådmansgatan (t-banan)", "Hötorget", "T-Centralen", "Gamla stan", "Slussen", "Medborgarplatsen", "Skanstull", "Gullmarsplan", "Skärmarbrink", "Blåsut", "Sandsborg", "Skogskyrkogården", "Tallkrogen", "Gubbängen", "Hökarängen", "Farsta", "Farsta strand"]],
    stationPos: {
      "Hjulsta": [59.39617, 17.88771], "Tensta": [59.39448, 17.90116],
      "Rinkeby": [59.38879, 17.92785], "Rissne": [59.37581, 17.94118],
      "Duvbo": [59.36789, 17.96461], "Sundbybergs centrum": [59.36311, 17.97053],
      "Solna strand": [59.35434, 17.97354], "Huvudsta": [59.34954, 17.98569],
      "Västra Skogen": [59.34747, 18.00398], "Stadshagen": [59.33828, 18.01384],
      "Fridhemsplan": [59.33219, 18.029187], "Rådhuset": [59.33033, 18.04204],
      "T-Centralen": [59.33094, 18.05926], "Kungsträdgården (T-banan)": [59.33078, 18.073293],
      "Akalla": [59.41552, 17.91302], "Husby": [59.41025, 17.92563],
      "Kista": [59.40317, 17.94239], "Hallonbergen": [59.37544, 17.96921],
      "Näckrosen": [59.36673, 17.98327], "Solna centrum": [59.35886, 17.99897],
      "Hässelby strand": [59.36128, 17.83235], "Hässelby gård": [59.36690, 17.84376],
      "Johannelund": [59.36794, 17.85746], "Vällingby": [59.36324, 17.87206],
      "Råcksta": [59.35480, 17.88181], "Blackeberg": [59.34802, 17.88353],
      "Islandstorget": [59.345856, 17.89401], "Ängbyplan": [59.34188, 17.90704],
      "Åkeshov": [59.34203, 17.92489], "Brommaplan": [59.33838, 17.93926],
      "Abrahamsberg": [59.33668, 17.95295], "Stora mossen": [59.33455, 17.96605],
      "Alvik": [59.33350, 17.98066], "Kristineberg": [59.33281, 18.00318],
      "Thorildsplan": [59.33147, 18.01488], "S:t Eriksplan": [59.33965, 18.03698],
      "Odenplan": [59.342947, 18.049899], "Rådmansgatan (t-banan)": [59.340325, 18.059198],
      "Hötorget": [59.33523, 18.062458], "Mörby centrum": [59.39825, 18.036117],
      "Danderyds sjukhus": [59.39190, 18.04137], "Bergshamra": [59.38170, 18.03672],
      "Universitetet": [59.36519, 18.05460], "Tekniska högskolan": [59.345908, 18.071596],
      "Stadion (t-banan)": [59.34286, 18.081961], "Östermalmstorg": [59.335045, 18.07401],
      "Ropsten": [59.35729, 18.102217], "Gärdet": [59.347744, 18.101869],
      "Karlaplan": [59.338488, 18.09026], "Gamla stan": [59.32310, 18.06738],
      "Slussen": [59.319512, 18.072140], "Mariatorget (t-banan)": [59.31698, 18.06324840],
      "Zinkensdamm": [59.317777, 18.050152], "Hornstull": [59.3156099, 18.0342012],
      "Liljeholmen": [59.310163, 18.02225], "Aspudden": [59.305609, 18.0022000],
      "Örnsberg": [59.305532, 17.98919], "Axelsberg": [59.30436, 17.97491869],
      "Mälarhöjden": [59.30091, 17.95728], "Bredäng": [59.2948382, 17.933813],
      "Sätra": [59.284983, 17.921370], "Skärholmen": [59.27714, 17.90700],
      "Vårberg": [59.275933, 17.890157], "Vårby gård": [59.26461, 17.8843973],
      "Masmo": [59.24968, 17.880332], "Fittja": [59.2474656, 17.8609676],
      "Alby": [59.239495, 17.845328], "Hallunda": [59.2432692, 17.82560699999999],
      "Norsborg": [59.2437908, 17.81452509], "Midsommarkransen": [59.301852, 18.012036],
      "Telefonplan": [59.2983213, 17.99723519], "Hägerstensåsen (t-banan)": [59.29557, 17.9791519],
      "Västertorp": [59.291379, 17.9666674], "Fruängen": [59.285929, 17.965005799],
      "Medborgarplatsen": [59.314330, 18.07365970], "Skanstull": [59.3078304, 18.07576910],
      "Gullmarsplan": [59.2990447, 18.080944], "Globen": [59.2942798, 18.077974],
      "Enskede gård": [59.289393, 18.0702939], "Sockenplan": [59.28330, 18.07059],
      "Svedmyra": [59.277637, 18.0672054], "Stureby": [59.2745717, 18.0551898],
      "Bandhagen": [59.270496, 18.04968], "Högdalen": [59.2637969, 18.0430046],
      "Rågsved": [59.256580, 18.0281350], "Hagsätra": [59.262818, 18.012482],
      "Skärmarbrink": [59.295363, 18.0904408], "Blåsut": [59.2902549, 18.0911314],
      "Sandsborg": [59.284995, 18.09228], "Skogskyrkogården": [59.2791918, 18.0954988],
      "Tallkrogen": [59.2714222, 18.0858928], "Gubbängen": [59.263996, 18.08195190],
      "Hökarängen": [59.2577582, 18.0825571], "Farsta": [59.24362, 18.0933055],
      "Farsta strand": [59.2350076, 18.101736], "Hammarbyhöjden": [59.29476529, 18.1045506],
      "Björkhagen": [59.2911139, 18.11552119], "Kärrtorp": [59.284505, 18.1144767],
      "Bagarmossen": [59.27626429, 18.131464899], "Skarpnäck (t-banan)": [59.26641, 18.13303580]
    }
  },


  //事件处理函数
  bindViewTap: function() {
    wx.showLoading({
      title: '获取位置...',
      mask: true,
      duration: 15000,
    })
    var that = this
    var obj = {
      type: 'wgs84',
      success: res => {
        var latitude = res.latitude
        
        var longitude = res.longitude
        var i = 0, j = 0;
        var minDist = 100000.0;
        var minNode = "";
        var lineNum = 7;
        for (i = 0; i < lineNum; i++) {
          for (j = 0; j < that.data.stationName[i].length; j++) {
            var current = that.data.stationName[i][j];
            if (Math.pow(latitude - that.data.stationPos[current][0], 2) + Math.pow(longitude - that.data.stationPos[current][1], 2) < minDist) {
              minDist = Math.pow(latitude - that.data.stationPos[current][0], 2) + Math.pow(longitude - that.data.stationPos[current][1], 2)
              minNode = current;
            }
          }
        }
        wx.hideLoading()
        that.setData({
          motto: "最近的站是:\n" + minNode
        })
        wx.showToast({
          title: '获取时刻表...',
          icon: 'loading',
          duration: 30000,
          mask: "true"
        })
        wx.request({
          url: "https://5a0485c4.ngrok.io",
          method: "POST",
          data: {
            station: minNode
          },
          success: function (res) {
            app.globalData.metroInfo = res.data.split("\n")
            console.log(res.data.split("\n"))
            wx.hideToast()
            wx.navigateTo({
              url: '../logs/logs',
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
            
          }
        })
      },
      fail: function() {
        console.log("!!")
      }
    }
    var t = wx.getLocation(obj)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindInput: function(e) {
    if (e.detail.value.length < 2) {
      var animation = wx.createAnimation({
        duration: 1,
        timingFunction: "ease"
      })
      animation.opacity(0).step()
      this.setData({
        animationData: animation.export()
      })
    } else {
      var i, j;
      var count = 0, lineNum = 7;
      var keys = Object.keys(this.data.stationPos)
      this.setData({
        text1: "",
        text2: "",
        text3: "",
        text4: ""
      })

      for (i = 0; i < 100; i++) {
        if ((keys[i].toLowerCase()).search(e.detail.value.toLowerCase()) != -1) {
          if (count == 0) {
            this.setData({
              text1: keys[i]
            })
            count = 1;
          } else 
          if (count == 1) {
            this.setData({
              text2: keys[i]
            })
            count = 2;
          } else {
            this.setData({
              text3: keys[i]
            })
            this.setData({
              text4: "......"
            })
            count = 3;
            break;
          }
        }
      }
      var animation = wx.createAnimation({
        duration: 1,
        timingFunction: "ease"
      })
      animation.opacity(0).step()
      this.setData({
        animationData: animation.export()
      })
      var that = this
      setTimeout(function() {
        var animation2 = wx.createAnimation({
          duration: 1500,
          timingFunction: "ease"
        })
        animation2.opacity(1).step()
        that.setData({
          animationData: animation2.export()
        })
      }, 100)
    }
  },
  bindButtonTap: function(event) {
    var that = this;
    console.log(event.target.dataset.variable)
    that.setData({
      motto: "最近的站是:\n" + event.target.dataset.variable
    })
    wx.showToast({
      title: '获取时刻表...',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: "https://5a0485c4.ngrok.io",
      method: "POST",
      data: {
        station: event.target.dataset.variable // minNode
      },
      success: function (res) {
        console.log(res.data.split("\n"))
        app.globalData.metroInfo = res.data.split("\n")
        wx.hideToast()
        wx.navigateTo({
          url: '../logs/logs',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })

      }
    })
  },
  audioCtx: null,
  fastEntry: function(e) {
    wx.playBackgroundAudio({
      dataUrl: 'http://qqma.tingge123.com:823/mp3/2017-08-25/1503656214.mp3',
      title: '',
      coverImgUrl: '',
      fail: function(e) {
        console.log("fail")
      }
    })
    
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    animation.opacity(0).rotateX(180).rotateY(180).rotateZ(180).step()
    this.setData({
      fadingAnimation: animation.export()
    })
    var animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease-in-out"
    })
    animation1.opacity(1).step();
    this.setData({
      appearAnimation: animation1.export()
    })
    animation1.opacity(1).step();
    this.setData({
      animation1: animation1.export()
    })
    var that = this;
    setTimeout(function() {
      var tempAnimation = wx.createAnimation({
        duration: 1000,
        timingFunction: "ease"
      })
      tempAnimation.opacity(0).step()
      that.setData({
        animation1: tempAnimation.export()
      })
      tempAnimation.opacity(1).step()
      that.setData({
        animation2: tempAnimation.export()
      })      
      setTimeout(function() {
        tempAnimation.opacity(0).step()
        that.setData({
          animation2: tempAnimation.export()
        })
        tempAnimation.opacity(1).step()
        that.setData({
          animation3: tempAnimation.export()
        })
        setTimeout(function () {
          tempAnimation.opacity(0).step()
          that.setData({
            animation3: tempAnimation.export()
          })
          tempAnimation.opacity(1).step()
          that.setData({
            animation4: tempAnimation.export()
          })
          var imageAnimation = wx.createAnimation({
            duration: 1000,
            timingFunction: "ease"
          })
          imageAnimation.rotate(-170).scale(0.1, 0.1).step()
          that.setData({
            imageAnimation: imageAnimation.export()
          })
          setTimeout(function () {
            imageAnimation.rotate(10).scale(1, 1).opacity(1).step()
            that.setData({
              imageAnimation: imageAnimation.export()
            })
            tempAnimation.opacity(0).step()
            that.setData({
              animation4: tempAnimation.export()
            })
          }, 3000)
        }, 3000)
      }, 3000)
    }, 3000)

  },
  recover: function (e) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    animation.opacity(1).rotateX(0).rotateY(0).rotateZ(0).step()
    this.setData({
      fadingAnimation: animation.export()
    })
    var animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease-in-out"
    })
    animation1.opacity(0).step();
    this.setData({
      appearAnimation: animation1.export()
    })
    animation1.opacity(0).step();
    this.setData({
      imageAnimation: animation1.export()
    })
    wx.pauseBackgroundAudio()
    //this.audioCtx.pause();
  }
})
