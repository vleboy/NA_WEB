<template lang="html">
  <div class="product">
    <div class="product-content">
      <!-- <div class="title">
        <p>PRODUCTS</p>
        <h1>我们的产品</h1>
      </div> -->
      <div class="slide li"  v-for="(item, index) in Products" :key="index">
        <div class="title">
          <p>PRODUCTS</p>
          <h1>我们的产品</h1>
        </div>
        <a class="a">
          <div class="playIcon">
            <img  @click="clickShow(item.videoUrl, item.videoUrl2)" style="width: 30%" :src="item.imgIcon" />
          </div>
        <img :src="item.imgUrl" alt="">
        </a>
        <h2>{{item.title}}</h2>
        <p>{{item.content}}</p>
      </div>
      <!-- <ul>
        <li v-for="(item, index) in Products" :key="index">
          <a :href='`/about.html?type=${item.type}&title=${item.title}`'>
            <img :src="item.imgUrl" alt="">
          </a>
          <h2>{{item.title}}</h2>
            <p>{{item.content}}</p>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      Products: [
        {title: '真人视讯', type: 'people', content: '稳定流畅真人直播，全民咪牌，语音聊天，刺激体验尽在NA视讯。',imgIcon:'/static/playIcon.png',imgUrl: '/static/g1.png', tag: '/static/hotgame.png', videoUrl: 'http://app.risheng3d.com/video/na77/zr.mp4', videoUrl2: 'http://d38xgux2jezyfx.cloudfront.net/zhenren.mp4'},
        {title: '电子游戏', type: 'tiger', content: '传统的电子游戏融汇了更多元化的表现题材，及交互玩法。',imgIcon:'/static/playIcon.png',imgUrl: '/static/g3.png', videoUrl: 'http://app.risheng3d.com/video/na77/lhj.mp4', videoUrl2: 'http://d38xgux2jezyfx.cloudfront.net/laohuji.mp4'},
        {title: '街机游戏', type: 'chess', content: '结合当下热门街机游戏，3D创新体验，激情奉献。',imgIcon:'/static/playIcon.png',imgUrl: '/static/g4.png',tag: '/static/newgame.png', videoUrl: 'http://app.risheng3d.com/video/na77/jj.mp4', videoUrl2: 'http://d38xgux2jezyfx.cloudfront.net/jieji.mp4'},
        {title: '包房棋牌', type: 'electron', content: '包房棋牌，带动平台推广。NA将持续推出更多地方棋牌游戏。',imgIcon:'/static/playIcon.png',imgUrl: '/static/g2.png', videoUrl: 'http://app.risheng3d.com/video/na77/qp.mp4', videoUrl2: 'http://d38xgux2jezyfx.cloudfront.net/qipai.mp4'}
      ]
    }
  },
  methods: {
    async clickShow (videoUrl, videoUrl2) {
      this.$store.dispatch("showView",{ videoUrl })
      try {
        const { data } = await axios.get('https://844sz7nr7l.execute-api.ap-southeast-1.amazonaws.com/dev/ipquery')
        if (data.payload.data.country === '中国') {
          this.$store.dispatch("showView",{ videoUrl })
        } else {
          this.$store.dispatch("showView",{ videoUrl2 })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.fp-controlArrow .fp-prev{
    border-width: 8.5px 0 8.5px 4px;
}
.product {
  width: 100%;
  height: 100%;
  background-color: #000;
  display: table;
  .product-content {
    display: table-cell;
    vertical-align: middle;
  }
  .title {
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    p {
      font-size: 14px;
      margin-bottom: 23px;
    }
    h1 {
      font-size: 23px;
    }
  }
      .li {
      width: 25%;
      text-align: center;
      .playIcon {
        position: relative;
        top: 29%;
        left: 0;
        opacity: .9;
        img {
          width: 30%;
        }
      }
      .a {
        display: inline-block;
        width: 60%;
        height: 60%;
        border-radius: 100%;
        margin-bottom: 20px;
        border: 4px solid transparent;
        -webkit-transition: border .5s;
        transition: border .5s;
        /*&:hover {*/
          /*border: 4px solid red;*/
          /*-webkit-transition: border .5s;*/
          /*transition: border .5s;*/
        /*}*/
        img {
          width: 100%;
          // height: 100%;
        }
      }
      h2 {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 24px
      }
      p {
        color: #fff;
        width: 192px;
        margin: 0 auto;
        font-size: 12px;
        line-height: 2em;
      }
    }
}
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .product {
    .title {
      p {
        font-size: 9.33px;
        margin-bottom: 14px;
      }
      h1 {
        font-size: 28.67px;
      }
    }
    ul {
      padding: 0 10.7%;
      margin-top: 54px;
      li {
        a {
          width: 90%;
          height: 90%;
          margin-bottom: 13px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        h2 {
          font-size: 12px;
          margin-bottom: 15px
        }
        p {
          width: 129px;
          font-size: 8px;
          line-height: 2em;
        }
      }
    }
  }
}
@media screen and (orientation: landscape) {
  .product {
    .li {
      .a {
        width: 25%;
        height: 25%;
      }
      h2 {
        margin-bottom: 10px;
      }
      p {
        width: 70%;
      }
    }
  }
}
</style>
