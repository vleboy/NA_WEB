<template>
  <div id="app">
    <div v-show="show" style="height: 100%">
      <div class="content">
        <div class="button">
          <a href="javascript:;" v-if="!ios"><img src="/static/mobile-1.png" alt=""></a>
          <a href="javascript:;" v-else><img src="/static/mobile-2.png" alt=""></a>
          <p v-if="ios">IOS安装教程 (请下滑!)</p>
        </div>
      </div>
      <div class="section" v-if="ios">
        <img src="/static/mobile-guide1.png" alt="">
      </div>
      <div class="section" v-if="ios">
        <img src="/static/mobile-guide2.png" alt="">
      </div>
      <div class="section" v-if="ios">
        <img src="/static/mobile-guide3.jpg" alt="">
      </div>
      <div class="section" v-if="ios">
        <img src="/static/mobile-guide4.jpg" alt="">
      </div>
      <div class="section" v-if="ios">
        <img src="/static/mobile-guide5.jpg" alt="">
      </div>
      <div class="section" v-if="ios">
        <img src="/static/mobile-guide6.png" alt="">
      </div>
    </div>
    <div v-show="!show" class="m-text">
       <div v-if="!noticeShow">
        <span class="btn gray">正在跳转，下载中...</span>
       </div>
       <div v-if="noticeShow">
       <a id="note" :class="{'btn':btn,'gray':gray,'green':green}">{{noteText}}</a>
       </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: false,
      ios: false,
      noticeShow:false,
      noteText:'',
      gray:true,
      btn:true,
      green:false,
    };
  },
  created() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    isiOS === true ? (this.ios = true) : (this.ios = false);
    console.log(isAndroid, isiOS);
    function is_weixin() {
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    }
    function is_QQInnerBro() {
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/QQ/i) == "qq") {
        return true;
      } else {
        return false;
      }
    }
    if (!is_weixin() && !is_QQInnerBro()) {
      this.show = false;
      if (isAndroid) {
        let xhr = new XMLHttpRequest();
        xhr.open("get", `${url}/webapi/ipquery`);
        xhr.send();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            if (res.payload.data.country === "中国") {
              window.location.href = `http://app.risheng3d.com/apk/NAGame${res.payload.data.n1version}.apk`; // N1
              // window.location.href = `http://app.risheng3d.com/n2apk/n2apk${res.payload.data.n2version}.apk` // N2
            } else {
              window.location.href = `http://oss.na12345.com/NAGame${res.data.payload.data.n1version}.apk`; // N1
              // window.location.href = `http://oss.na12345.com/n2/n2apk${res.payload.data.n2version}.apk`  // N2
            }
            xhr = null;
            // delete xhr;
          }
        };
      } 
      else if (isiOS) {
        let xhr = new XMLHttpRequest();
        xhr.open("get", `${url}/webapi/ipquery`);
        xhr.send();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            if (res.payload.data.country === "中国") {
              window.location.href = `itms-services://?action=download-manifest&url=https://assetdownload.oss-cn-hangzhou.aliyuncs.com/ios/autoinstall${res.payload.data.n1version}.plist`; // N1
              // window.location.href = `itms-services://?action=download-manifest&url=https://assetdownload.oss-cn-hangzhou.aliyuncs.com/n2ios/n2install${res.payload.data.n2version}.plist` // N2
            } else {
              window.location.href = `itms-services://?action=download-manifest&url=https://oss.na12345.com/autoinstall${res.payload.data.n1version}.plist`; //N1
              // window.location.href = `itms-services://?action=download-manifest&url=https://oss.na12345.com/n2/n2install${res.payload.data.n2version}.plist` //N2
            }
            xhr = null;
            // delete xhr;
          }
        };
        this.noticeShow=true
        this.countDown(20)
      }
    } else {
      this.show = true;
    }
  },
  methods:{
    countDown(num){
      this.noteText='下载中，前往信任(20)';// 你倒计时显示的地方元素
      let name=setInterval(()=>{
          num--;
          this.noteText='下载中，前往信任'+'('+num+')';// 你倒计时显示的地方元素
          if(num==0){
              clearInterval(name);
              let note=document.getElementById('note')
              note.setAttribute('href','/static/app.mobileprovision')
              this.noteText='前往信任'// 你倒计时显示的地方元素
              this.disabled=false;
              this.gray=false
              this.green=true;
          }
      },1000)
    }
  }
};
</script>

<style>
html,
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-size: 0;
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("./assets/mobile-bg.png") no-repeat;
  background-size: cover;
}
.button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2%;
  width: 80%;
  font-size: 0;
  text-align: center;
}
.gray{
  background-color: gray
}
.btn{
  width: 250px;
	height: 50px;
	display: inline-block;
	margin: 10px auto;
	-moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius:5px;
  font-size: 18px;
  line-height: 50px;
  color: #fff;
  text-decoration: none;
}
.green{
  background-color: #36d741;
}
.button a {
  display: inline-block;
  width: 40%;
  margin: 0 5%;
  text-decoration: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
p {
  font-weight: bold;
  font-size: 22px;
  color: #ffffff;
}
p > i {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url("./assets/mobile-down.png") no-repeat;
  background-size: cover;
  vertical-align: middle;
}
img {
  width: 100%;
  height: 100%;
}
.m-text {
  font-size: 20px;
  height: 100vh;
  line-height: 100vh;
  text-align: center;
}
</style>
