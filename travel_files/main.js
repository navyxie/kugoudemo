var globalParam = {domain: "http://activity.mobile.kugou.com/",enName: "v7",topicName: "酷狗音乐时光旅程",shareUrl: "http://activity.mobile.kugou.com/v7/index.html",shareTitle: "千呼万唤始出来！酷狗7.0全新巨作抢先体验，好听好玩好唱更好看！",shareContent: "2014年度巨献，酷狗音乐7.0完美蜕变，不止音乐，无乐不作！#手机酷狗7.0#",sharesinaContent: "2014年度巨献，酷狗音乐7.0完美蜕变，不止音乐，无乐不作！#手机酷狗7.0#",shareImg: "http://activity.mobile.kugou.com/v7/images/index.jpg",download: 0,weiXinDownload: false,stat: {appDownId: "4709",downId: "4708",shareId: "4710",good: "4707",pageId: "4706"}};
phpLogClick(globalParam.stat.pageId);
Kg.postJSON("http://activity.mobile.kugou.com/down/get&" + Math.random(), "", function(res) {
    globalParam.download = Number(res.download);
}, function(res) {
    return false;
});
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
function isInClient() {
    return KgMobileCall.isInClient();
}
var myurl = GetQueryString("id");
if (myurl != null && myurl.toString().length > 0) {
    phpLogClick(myurl);
}
globalParam.shareContentList = ["千呼万唤始出来！酷狗7.0全新巨作抢先体验，好听好玩好唱更好看！#手机酷狗7.0#", "再不下载就没了，酷狗7.0提前泄露 , 估计链接要被封掉了！#手机酷狗7.0#", "千呼万唤始出来！酷狗7.0全新巨作抢先体验，好听好玩好唱更好看！#手机酷狗7.0#"];
globalParam.shareTitleList = ["千呼万唤始出来！酷狗7.0全新巨作抢先体验，好听好玩好唱更好看！", "再不下载就没了，酷狗7.0提前泄露 , 估计链接要被封掉了！", "千呼万唤始出来！酷狗7.0全新巨作抢先体验，好听好玩好唱更好看！"];
if (navigator.userAgent.match(/MicroMessenger/i) || isInClient()) {
    globalParam.shareContentList = globalParam.shareTitleList = ["【独家大放送】酷狗7.0邀您抢先体验！", "冒着生命危险，小编提前放出酷狗7.0体验包！！", "我的天，据说有人提前泄露了酷狗7.0版本！"];
}
if (iphone) {
    Kg.$(".page3").remove();
    Kg.$("#years").html('<div class="y2010"><h5><em>一</em><strong>201</strong><b>2</b><strong class="l1">年</strong><span>V</span><a>1</a><span class="l1">.0</span></h5><h4><i>逐</i><i>字</i><i>歌</i><i>词</i></h4><p>你的随心哼唱 让我怦然心动</p></div><div class="y2011"><h5><em>一</em><strong>201</strong><b>3</b><strong class="l1">年</strong><span>V</span><a>3</a><span class="l1">.0</span></h5><h4><i>M</i><i>V</i><i>频</i><i>道</i></h4><p>你用黑白眼眸 看到我五彩斑斓的世界</p></div><div class="y2013"><h5><em>一</em><strong>201</strong><b>4</b><strong class="l1">年</strong><span>V</span><a>4</a><span class="l1">.0</span></h5><h4><i>听</i><i>歌</i><i>识</i><i>曲</i></h4><p>享乐在当下 不再错过附近好知音</p></div><div class="y2012"><h5><em>一</em><strong>201</strong><b>4</b><strong class="l1">年</strong><span>V</span><a>4</a><span class="l1">.0</span></h5><h4><i>听</i><i>歌</i><i>识</i><i>曲</i></h4><p>享乐在当下 不再错过附近好知音</p></div>');
}
function RandomBy(under, over) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * under + 1);
        case 2:
            return parseInt(Math.random() * (over - under + 1) + under);
        default:
            return 0;
    }
}
function openUrl(url) {
    var str = KgMobileCall.getVersion();
    if (!str) {
        openWin(url);
    } else {
        var obj = Kg.JSON.parse(str);
        if (obj && obj.status == 1) {
            if (parseInt(obj.version) >= 6310) {
                KgMobileCall.openURL(Kg.JSON.stringify({browser: "1",url: url}));
            } else {
                openWin(url);
            }
        } else {
            location.href = url;
        }
    }
}
function openWin(url) {
    if (!window.open(url, "_blank")) {
        location.href = url;
    }
}
function myDown() {
    if (globalParam.download < 2e5) {
        if (iphone) {
            if (navigator.userAgent.match(/MicroMessenger/i)) {
                Kg.$('#pop_bg').show();
                Kg.$('#iosTips').show();
            }
        } else {
            down_az(true);
        }
    }
}
function down_az(flag) {
    phpLogClick(globalParam.stat.downId);
    Kg.postJSON("http://activity.mobile.kugou.com/down/set&" + Math.random(), "", function(res) {
        return false;
    }, function(res) {
        return false;
    });
    if (navigator.userAgent.match(/MicroMessenger/i)) {
        openUrl("http://mp.weixin.qq.com/mp/redirect?url=" + encodeURIComponent("http://downmobile.kugou.com/upload/android/KugouPlayer_v7047_96_build_227913d_1.apk") + "#weixin.qq.com#wechat_redirect");
    } else {
        openUrl("http://downmobile.kugou.com/upload/android/KugouPlayer_v7047_96_build_227913d_1.apk");
    }
}
function down_ios(flag) {
    phpLogClick(globalParam.stat.appDownId);
    Kg.postJSON("http://activity.mobile.kugou.com/down/set&" + Math.random(), "", function(res) {
        return false;
    }, function(res) {
        return false;
    });
    if (navigator.userAgent.match(/MicroMessenger/i)) {
        openUrl("itms-services://?action=download-manifest&url=https://mo.kugou.com/download/html/kugou_ac.plist");
    } else {
        openUrl("itms-services://?action=download-manifest&url=https://mo.kugou.com/download/html/kugou_ac.plist");
    }
}
globalParam.shareTitle = globalParam.shareTitleList[RandomBy(0, 2)];
globalParam.shareContent = globalParam.shareContentList[RandomBy(0, 2)];
function touchChange(obj) {
    var self = this;
    self.node = document.getElementById(obj.id);
    self.section = Kg.$("#pages");
    self.list = Kg.$("#" + obj.id + " .page");
    self.originalCoord = {x: 0,y: 0};
    self.shiftCoord = {x: 0,y: 0};
    self.finalCoord = {x: 0,y: 0};
    self.o = Kg.getBodySize();
    Kg.$(self.node).css("height", self.o.cH + "px");
    self.list.css("height", self.o.cH + "px");
    self.change = true;
    self.touch = true;
    self.page = self.list.length;
    self.now = 0;
    self.pageList = Kg.$(".pageList");
    self.nowPage = self.pageList[0];
    self.maxTx = -(self.page - 1) * self.o.cH;
    self.yearBox = Kg.$("#years");
}
touchChange.prototype = {init: function() {
        var self = this;
        self.nowPage.style.display = "block";
        self.node.addEventListener("touchstart", function(event) {
            if (self.change) {
                self.originalCoord.x = event.targetTouches[0].pageX;
                self.originalCoord.y = event.targetTouches[0].pageY;
                self.shiftCoord.x = event.targetTouches[0].pageX;
                self.shiftCoord.y = event.targetTouches[0].pageY;
                self.finalCoord.x = self.originalCoord.x;
                self.finalCoord.y = self.originalCoord.y;
                self.touch = true;
                self.y = 0;
            } else {
                self.touch = false;
            }
        }, false);
        self.node.addEventListener("touchmove", function(event) {
            event.preventDefault();
            if (self.touch) {
                self.finalCoord.x = event.targetTouches[0].pageX;
                self.finalCoord.y = event.targetTouches[0].pageY;
                self.y = -self.originalCoord.y + self.finalCoord.y;
                self.tx = -self.now * self.o.cH + self.y;
                self.tx = self.tx > 0 ? 0 : self.tx < self.maxTx ? self.maxTx : self.tx;
                self.section.attr("style", "-webkit-transform:translate(0px," + self.tx + "px) translateZ(0px);");
            }
        }, false);
        self.node.addEventListener("touchend", function(event) {
            if (self.change && self.touch) {
                self.change = false;
                if (self.y < -50) {
                    self.now++;
                    self.year = 2009 + self.now;
                    if (iphone && self.year == 2013) {
                        self.year = 2009;
                    } else if (iphone && self.year == 2012) {
                        self.year = 2013;
                    }
                    self.now = self.now == self.page ? self.page - 1 : self.now;
                    setTimeout(function() {
                        self.yearBox.attr("class", "years" + self.year + "u");
                    }, 300);
                } else if (self.y > 50) {
                    self.now--;
                    self.year = 2009 + self.now;
                    if (iphone && self.year == 2012) {
                        self.year = 2013;
                    }
                    self.now = self.now < 0 ? 0 : self.now;
                    setTimeout(function() {
                        self.yearBox.attr("class", "years" + self.year + "d");
                    }, 300);
                }
                self.section.attr("style", "-webkit-transform:translate(0px," + -self.now * self.o.cH + "px) translateZ(0px);-webkit-transition:all 0.3s;");
                setTimeout(function() {
                    if (self.y < -50 || self.y > 50) {
                        self.nowPage.style.display = "none";
                        self.nowPage = self.pageList[self.now];
                        self.nowPage.style.display = "block";
                    }
                    self.change = true;
                }, 310);
            }
        }, false);
    }};
function trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
var newAnimation = {};
var imgUrl = ["images/cd1.png", "images/cd2.png", "images/cd3.png", "images/cd4.png", "images/cd5.png", "images/cd6.png", "images/cd7.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png", "images/10.png", "images/11.png", "images/12.png", "images/13.png", "images/14.png", "images/15.png", "images/16.png", "images/17.png", "images/18.png", "images/19.png", "images/20.png", "images/21.png", "images/22.png", "images/23.png"], imgLength = 0, newTouchChage;
function loadImage() {
    var img = new Image();
    img.src = imgUrl[imgLength];
    img.onload = function() {
        imgLength++;
        if (imgLength < imgUrl.length) {
            globalParam.loading.attr("style", "margin-left:" + imgLength * 3 + "%");
            globalParam.schedule.attr("style", "width:" + (10 + imgLength * 3) + "%");
            globalParam.loadAct.html(10 + imgLength * 3 + "%");
            loadImage();
        } else {
            Kg.$("#load").hide();
            Kg.$("#main").show();
            newTouchChage = new touchChange({id: "main"});
            newTouchChage.init();
            globalParam.scene = document.getElementById("scene");
            globalParam.parallax = new Parallax(globalParam.scene);
            globalParam.$btn = Kg.$("#audioBtn");
            globalParam.$btn.addEvent("click", function(event) {
                Kg.stopEvent(event);
                if (window.HTMLAudioElement) {
                    if (globalParam.oAudio.paused) {
                        globalParam.oAudio.play();
                        globalParam.$btn.attr("class", "audioBtn audioAct");
                    } else {
                        globalParam.oAudio.pause();
                        globalParam.$btn.attr("class", "audioBtn");
                    }
                }
            });
        }
    };
}
function shareToAll(plat, down) {
    globalParam.shareTitle = globalParam.shareTitleList[RandomBy(0, 2)];
    globalParam.shareContent = globalParam.shareContentList[RandomBy(0, 2)];
    phpLogClick(globalParam.stat.shareId);
    var option = {popupWidth: 615,popupHeight: 505,title: globalParam.shareTitle,url: globalParam.shareUrl,content: globalParam.shareContent,imgSrc: globalParam.shareImg,swf: "",site: "",appkey: "",source: "",ralateUid: ""}, winSrc = "", queryStr = "", showPopup = true;
    var _title = encodeURIComponent(globalParam.shareTitle), _url = encodeURIComponent(globalParam.shareUrl), _content = encodeURIComponent(globalParam.shareContent), _sinaContent = encodeURIComponent(globalParam.sharesinaContent), _imgSrc = encodeURIComponent(globalParam.shareImg);
    _swf = encodeURIComponent(globalParam.shareSwf || "");
    switch (plat) {
        case "qzone":
            winSrc = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey";
            queryStr = ["url=" + _url + encodeURIComponent("?id=4735"), "title=" + _title, "desc=" + _content, "pics=" + encodeURIComponent("http://activity.mobile.kugou.com/v7/images/shwx.jpg?" + Math.random())].join("&");
            break;
        case "rr":
            option.popupHeight = 560;
            winSrc = "http://widget.renren.com/dialog/share";
            queryStr = ["link=" + _url + encodeURIComponent("?id=4735"), "title=" + _title, "image_src=" + _imgSrc, "description=" + _content].join("&");
            break;
        case "sina":
            option.popupWidth = 615;
            option.popupHeight = 505;
            winSrc = "http://service.t.sina.com.cn/share/share.php";
            queryStr = ["url=" + _url + encodeURIComponent("?id=4735"), "appkey=" + option.appkey, "title=" + _content, "pic=" + _imgSrc, "ralateUid=" + option.ralateUid].join("&");
            break;
        case "qq":
            option.popupWidth = 700;
            option.popupHeight = 680;
            var _appkey = encodeURIComponent(option.appkey);
            var _pic = _imgSrc;
            winSrc = "http://v.t.qq.com/share/share.php";
            queryStr = ["title=" + _content, "url=" + _url + encodeURIComponent("?id=4735"), "appkey=" + _appkey, "site=" + option.site, "pic=" + _pic].join("&");
            break;
        default:
            return;
    }
    var resultUrl = winSrc + "?" + queryStr, time = iphone ? 1 : 15000;
    if (isInClient()) {
        var client_share = {shareName: globalParam.shareTitle,hash: "",listID: "",type: 3,shareData: {linkUrl: encodeURIComponent(globalParam.shareUrl + "?id=4735"),picUrl: "http://activity.mobile.kugou.com/v7/images/shwx.jpg",content: globalParam.shareContent,title: globalParam.shareTitle},suid: "",slid: "",imgUrl: "",filename: "",duration: 0};
        if (down) {
            setTimeout(function() {
                myDown();
            }, time);
        }
        KgMobileCall.share(Kg.JSON.stringify(client_share));
    } else {
        window.open(resultUrl);
        if (down) {
            setTimeout(function() {
                myDown();
            }, time);
        }
    }
}
globalParam.schedule = Kg.$("#schedule");
globalParam.loadAct = Kg.$("#loadAct");
globalParam.loading = Kg.$("#loading");
loadImage();
window.onload = function() {
    globalParam.oAudio = document.createElement("audio");
    globalParam.oAudio.setAttribute("src", "images/m.mp3");
    globalParam.oAudio.controls = true;
    globalParam.oAudio.loop = true;
    globalParam.oAudio.load();
    globalParam.oAudio.play();
    globalParam.ipAuto = 0;
    document.addEventListener("touchstart", function() {
        if (globalParam.ipAuto === 0) {
            globalParam.oAudio.play();
            globalParam.ipAuto++;
        }
    });
    Kg.postJSON("http://activity.mobile.kugou.com/zan/get&" + Math.random(), "", function(res) {
        Kg.$(".num").html(res.support);
        if (res.has_support == 1) {
            Kg.$("#goodBtn").attr("src", "images/good_hover.png");
        }
    }, function(res) {
        return false;
    });
    Kg.$("#goodBtn").addEvent("click", function() {
        var _this = Kg.$(this);
        if (_this.attr("src") != "images/good_hover.png") {
            _this.attr("src", "images/good_hover.png");
            Kg.$(".num").html(Number(Kg.$(".num").html()) + 1);
        }
        setTimeout(function() {
            Kg.$("#pop_bg").show();
            Kg.$("#sharePop").show();
        }, 100);
        Kg.postJSON("http://activity.mobile.kugou.com/zan/support&" + Math.random(), "", function(res) {
            phpLogClick(globalParam.stat.good);
        }, function(res) {
            return false;
        });
    });
    Kg.$("#shareWeixin").addEvent("click", function() {
        Kg.$(this).hide();
    });
    Kg.$("#downWeixin").addEvent("click", function() {
        Kg.$(this).hide();
    });
    Kg.$("#downWeibo").addEvent("click", function() {
        Kg.$(this).hide();
    });
    Kg.$("#pop_bg").addEvent("click", function() {
        Kg.$("#sharebtns").hide();
        Kg.$("#sharePop").hide();
        Kg.$(this).hide();
        Kg.$("#shareDown").hide();
        Kg.$("#iosTips").hide();
        Kg.$("#khPop").hide();
        Kg.$("#btn_share img").attr("src", "images/share.png");
        Kg.$("#down").attr("src", "images/btn.png");
    });
    Kg.$("#btn_share").addEvent("click", function(event) {
        Kg.stopEvent(event);
        if (navigator.userAgent.match(/MicroMessenger/i)) {
            Kg.$("#shareWeixin").show();
        } else {
            if (isInClient()) {
                shareToAll("sina");
            } else {
                var _el = Kg.$("#sharebtns"), $share = Kg.$("#btn_share img");
                Kg.$("#btn_share img").attr("src", "images/shareh.png");
                _el.show();
                Kg.$("#pop_bg").show();
            }
        }
    });
    Kg.$("#down").addEvent("click", function(event) {
        Kg.stopEvent(event);
        if (navigator.userAgent.match(/MicroMessenger/i)) {
            if (globalParam.weiXinDownload) {
                if (iphone) {
                    myDown();
                } 
                else {
                    Kg.$("#downWeixin").show();
                }
            } else {
                Kg.$("#shareWeixin").show();
            }
        } else if (iphone) {
            if (navigator.userAgent.match(/weibo/i)) {
                Kg.$("#downWeibo").show();
            } else {
                Kg.$("#pop_bg").show();
                Kg.$("#iosTips").show();
            }
        } else {
            if (isInClient()) {
                Kg.$("#khPop").show();
                Kg.$("#pop_bg").show();
            } else {
                myDown();
            }
        }
    });
    Kg.$("#tod").addEvent("click", function(event) {
        Kg.stopEvent(event);
        if (isInClient()) {
            Kg.$("#khPop").hide();
            Kg.$("#pop_bg").hide();
            shareToAll("sina", true);
        }
    });
    Kg.$("#noDown").addEvent("click", function(event) {
        Kg.stopEvent(event);
        if (iphone && (!navigator.userAgent.match(/MicroMessenger/i))) {
            Kg.$("#iosTips").hide();
            var _el = Kg.$("#sharebtns");
            _el.show();
        } 
        else {
            Kg.$("#iosTips").hide();
            Kg.$("#pop_bg").hide();
        }
    });
    Kg.$("#toDown").addEvent("click", function(event) {
        Kg.stopEvent(event);
        Kg.$("#iosTips").hide();
        Kg.$("#pop_bg").hide();
        down_ios(true);
    });
    Kg.$("#nod").addEvent("click", function(event) {
        Kg.stopEvent(event);
        Kg.$("#khPop").hide();
        Kg.$("#pop_bg").hide();
    });
    Kg.$("#shareDown a").addEvent("click", function(event) {
        Kg.stopEvent(event);
        var me = this, type = me.getAttribute("data-type");
        shareToAll(type, true);
        Kg.$("#shareDown").hide();
        Kg.$("#pop_bg").hide();
        return;
    });
    Kg.$("#tos").addEvent("click", function(event) {
        Kg.stopEvent(event);
        var $this = Kg.$(this);
        $this.attr("src", "images/tosh.png");
        setTimeout(function() {
            $this.attr("src", "images/tos.png");
        }, 500);
        Kg.$("#pop_bg").hide();
        Kg.$("#sharePop").hide();
        if (navigator.userAgent.match(/MicroMessenger/i)) {
            Kg.$("#shareWeixin").show();
        } else {
            if (isInClient()) {
                shareToAll("sina");
            } else {
                var _el = Kg.$("#sharebtns"), $share = Kg.$("#btn_share img");
                $share.attr("src", "images/shareh.png");
                _el.show();
                Kg.$("#pop_bg").show();
            }
        }
    });
    Kg.$("#ntos").addEvent("click", function(event) {
        Kg.stopEvent(event);
        var $this = Kg.$(this);
        $this.attr("src", "images/ntosh.png");
        setTimeout(function() {
            $this.attr("src", "images/ntos.png");
        }, 500);
        newTouchChage.section.attr("style", "-webkit-transform:translate(0px,0px) translateZ(0px);");
        newTouchChage.now = 0;
        setTimeout(function() {
            newTouchChage.nowPage.style.display = "none";
            newTouchChage.nowPage = newTouchChage.pageList[newTouchChage.now];
            newTouchChage.nowPage.style.display = "block";
            newTouchChage.change = true;
        }, 100);
        Kg.$("#pop_bg").hide();
        Kg.$("#sharePop").hide();
    });
    Kg.$("#sharebtns a").addEvent("click", function(event) {
        Kg.stopEvent(event);
        var me = this, type = me.getAttribute("data-type");
        shareToAll(type);
        Kg.$("#sharebtns").hide();
        Kg.$("#pop_bg").hide();
        return;
    });
};
if (navigator.userAgent.match(/MicroMessenger/i)) {
    WeixinApi.ready(function(Api) {
        var wxData = {"appId": "","imgUrl": 'http://activity.mobile.kugou.com/v7/images/shwx.jpg',"link": globalParam.shareUrl + "?id=4737","desc": globalParam.shareContent,"title": globalParam.shareTitle};
        var wxCallbacks = {ready: function() {
            },cancel: function(resp) {
            },fail: function(resp) {
            },confirm: function(resp) {
                Kg.$('#shareWeixin').hide();
                if (iphone) {
                    myDown();
                } 
                else {
                    Kg.$("#downWeixin").show();
                }
                globalParam.weiXinDownload = true;
            },all: function(resp, shareTo) {
            }};
        Api.shareToFriend(wxData, wxCallbacks);
        Api.shareToTimeline(wxData, wxCallbacks);
        Api.shareToWeibo(wxData, wxCallbacks);
        Api.generalShare(wxData, wxCallbacks);
    });
}
