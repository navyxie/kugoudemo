 /** 
 * Copyright 2014, Kugou.com 
 * LastChange: Tuesday, May 27, 2014, 10:34:49
 * Compressed By Grunt with uglify 
 */
var KgMobileCall = {callCmd: function(a, b) {
        try {
            return b ? external.superCall(a, b) : external.superCall(a)
        } catch (c) {
            return null
        }
    },getUserInfo: function() {
        try {
            return external.superCall(101)
        } catch (a) {
            return null
        }
    },getUserInfoByKey: function() {
        try {
            return external.superCall(105)
        } catch (a) {
            return null
        }
    },getTempUserInfo: function() {
        try {
            return external.superCall(106)
        } catch (a) {
            return null
        }
    },callSoftUserLogin: function(a) {
        return a ? this.callCmd(102, Kg.JSON.stringify(a)) : this.callCmd(102)
    },showRegisterBox: function() {
        return this.callCmd(103)
    },logout: function() {
        return this.callCmd(104)
    },downNoPlay: function(a) {
        return this.callCmd(107, a)
    },listen: function(a) {
        return this.callCmd(108, a)
    },createList: function(a) {
        return this.callCmd(109, a)
    },addNoDown: function(a) {
        return this.callCmd(110, a)
    },spots: function(a) {
        return this.callCmd(111, a)
    },createListDownAndPlaySong: function(a) {
        return this.callCmd(112, a)
    },createListDownNoPlaySong: function(a) {
        return this.callCmd(113, a)
    },createCollectListAddSong: function(a) {
        return this.callCmd(114, a)
    },share: function(jsonStr) {
        var ver = this.getVersion(), share_json = {};
        try {
            ver = eval("(" + ver + ")")
        } catch (e) {
            ver = null
        }
        if (ver && "android" == ver.platform && Number(ver.version) < 6340 && "" !== jsonStr) {
            try {
                jsonStr = eval("(" + jsonStr + ")")
            } catch (e) {
                jsonStr = {}
            }
            var option = {popupWidth: 615,popupHeight: 505,title: encodeURIComponent(jsonStr.shareData.title) || "",url: jsonStr.shareData.linkUrl || "",content: encodeURIComponent(jsonStr.shareData.content) || "",imgSrc: encodeURI(jsonStr.shareData.picUrl) || "",swf: "",appkey: "340086183",ralateUid: ""}, winSrc = "", queryStr = "";
            option.popupWidth = 615, option.popupHeight = 505, winSrc = "http://service.t.sina.com.cn/share/share.php", queryStr = ["url=" + option.url, "appkey=" + option.appkey, "title=" + option.content, "pic=" + option.imgSrc, "ralateUid=" + option.ralateUid].join("&");
            var l = (screen.width - option.popupWidth) / 2, t = (screen.height - option.popupHeight) / 2, resultUrl = winSrc + "?" + queryStr;
            return location.href = resultUrl, ""
        }
        return this.callCmd(115, jsonStr)
    },openSearch: function(a) {
        return "" !== a.trim() ? this.callCmd(116, a) : this.callCmd(116)
    },playMV: function(a) {
        return this.callCmd(117, a)
    },cacheMV: function(a) {
        return this.callCmd(118, a)
    },playRadio: function(a) {
        return this.callCmd(119, a)
    },getRadioList: function() {
        return this.callCmd(120)
    },getRadioStatus: function() {
        return this.callCmd(121)
    },getVersion: function() {
        return this.callCmd(122)
    },openURL: function(a) {
        return this.callCmd(123, a)
    },getMobileInfo: function() {
        return this.callCmd(124)
    },playOrPause: function(a) {
        return this.callCmd(125, a)
    },openTab: function(a) {
        return this.callCmd(126, a)
    },clearListAndAddSongs: function(a) {
        return a ? this.callCmd(127, a) : this.callCmd(127)
    },isInClient: function() {
        try {
            return external.superCall ? !0 : !1
        } catch (a) {
            return !1
        }
    }}, KgWebMobileCall = {userStatus: function() {
    },pageStatus: function() {
    },shareStatus: function() {
    },songDown: function() {
    },createStatus: function() {
    },netStatus: function() {
    }};
//# sourceMappingURL=mobilecall-min.map