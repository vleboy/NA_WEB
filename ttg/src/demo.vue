<template>
  <div id="app">

    <div class="lists" :class="{animations: show}">
      <ul v-for="items in gameLists">
        <li v-for="item in items">
          <a href="javascript:;" @click="toLink((+item.kindId) - (+item.gameType), item.gameName)">
            <img v-lazy="getHtmlDocName(item.gameImg)" alt="">
          </a>
        </li>
      </ul>
    </div>

    <div class="loading" v-show="loading">
      <div class="loading-img">
        <img src="/static/loading.gif">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      gameLists: null,
      show: false,
      loading: false
    };
  },
  mounted() {
    this.queryGame();
    window.alert = function(name) {
      var iframe = document.createElement("IFRAME");
      iframe.style.display = "none";
      iframe.setAttribute("src", "data:text/plain,");
      document.documentElement.appendChild(iframe);
      window.frames[0].window.alert(name);
      iframe.parentNode.removeChild(iframe);
    };
  },
  methods: {
    async queryGame() {
      try {
        const { data } = await axios({
          method: "post",
          url: "https://dgjmusja39cm2.cloudfront.net/gameList",
          data: {
            gameType: "1010000",
            query: {
              gameStatus: 1
            }
          },
          headers: {
            "Content-type": "application/json"
          }
        });
        const result = Array.apply(null, {
          length: Math.ceil(data.payload.length / 2)
        }).map((x, i) => {
          return data.payload.slice(i * 2, (i + 1) * 2);
        });
        this.gameLists = result;
        this.show = true;
      } catch (err) {
        console.log(err);
      }
    },
    getHtmlDocName(a) {
      let str = a;
      str = str.substring(str.lastIndexOf("/") + 1);
      return "http://app.risheng3d.com/game/ttggame/" + str;
    },
    toLink(a, b) {
      window.location.href = `http://freegame.risheng3d.com/ttgfree.html?gameId=${a}&gameName=${b}`;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
width: 0px;
height: 1px;
}
body {
  padding-top: constant(safe-area-inset-top);
  padding-left: constant(safe-area-inset-left);
  padding-right: constant(safe-area-inset-right);
  padding-bottom: constant(safe-area-inset-bottom);
}
html, body {
  background-color: rgb(29, 0, 0);
  position:fixed;
  overflow-y:hidden;
  width: 100%;
  height: 100vh;
}

@media screen and (orientation: landscape) {
  body {
    /* IOS 11支持*/
    padding-right: constant(safe-area-inset-right);
    padding-left: constant(safe-area-inset-left);
    /*IOS 11.2版本版本支持*/
    padding-right: env(safe-area-inset-right);
    padding-left: env(safe-area-inset-left);
  }
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("http://app.risheng3d.com/game/ttggame/lobby_bg.jpg")
    no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.lists {
  box-sizing: border-box;
  width: 100%;
  padding-left: 0.20834rem;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
ul {
  list-style: none;
  display: table-cell;
}
ul li {
  width: 1.875rem;
  height: 0;
  padding-bottom: 100%;
}
a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  display: block;
}

img {
  width: 100%;
  /* height: 100%; */
}

.top {
  position: absolute;
  top: 0;
  width: 100%;
  height: 0.568rem;
  background: url("http://app.risheng3d.com/game/ttggame/lobby_top.png")
    no-repeat;
  background-size: cover;
}

.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.678rem;
  background: url("http://app.risheng3d.com/game/ttggame/lobby_buttom.png")
    no-repeat;
  background-size: cover;
}

/* .lists ul li {
  width: 360px;
  height: 360px;
} */
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.loading-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}
.animations {
  animation: bounceRight 1s ease both;
}

@keyframes bounceRight {
  0% {
    opacity: 0;
    transform: translateX(50%) translateY(-50%);
    -webkit-transform: translateX(50%) translateY(-50%);
  }
  20% {
    opacity: 0;
    transform: translateX(40%) translateY(-50%);
    -webkit-transform: translateX(40%) translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(-50%);
    -webkit-transform: translateX(0) translateY(-50%);
  }
}
</style>
