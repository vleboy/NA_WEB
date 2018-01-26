<template lang="html">
  <div class="product">
    <div class="product-content">
      <div class="title">
        <p>PRODUCTS</p>
        <h1>我们的产品</h1>
      </div>
      <ul>
        <li v-for="(item, index) in Products" :key="index" @click="clickShow(item.videoUrl)">
          <i :style="`background:url(${item.tag}) no-repeat;background-size: 100%`"></i>
          <!-- :href='`/about.html?type=${item.type}&title=${item.title}`' -->
          <!-- <div class="playIcon">
            <img src="/static/playIcon.png" />
          </div> -->
          <a>
            <img :src="item.imgUrl" alt="">
          </a>
          <h2>{{item.title}}</h2>
            <p>{{item.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Products: [
        {title: '真人视讯', type: 'people', content: '稳定流畅真人直播，全民咪牌，语音聊天，刺激体验尽在NA视讯。',imgUrl: '/static/g1.png', tag: '/static/hotgame.png', videoUrl: 'http://app.risheng3d.com/video/na77/zr.mp4'},
        {title: '电子游戏', type: 'tiger', content: '传统的电子游戏融汇了更多元化的表现题材，及交互玩法。',imgUrl: '/static/g5.png', videoUrl: 'http://app.risheng3d.com/video/na77/lhj.mp4'},
        {title: '街机游戏', type: 'chess', content: '结合当下热门街机游戏，3D创新体验，激情奉献。',imgUrl: '/static/g4.png',tag: '/static/newgame.png', videoUrl: 'http://app.risheng3d.com/video/na77/slxy.mp4'},
        {title: '包房棋牌', type: 'electron', content: '包房棋牌，带动平台推广。NA将持续推出更多地方棋牌游戏。',imgUrl: '/static/g2.png', videoUrl: 'http://app.risheng3d.com/video/na77/qp.mp4'}
      ]
    }
  },
  methods: {
    clickShow:  function (videoUrl) {
      this.$store.dispatch("showView",{ videoUrl })
    }
  }
}
</script>

<style lang="less" scoped>
.product {
  position: relative;
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
    p {
      font-size: 14px;
      margin-bottom: 23px;
    }
    h1 {
      font-size: 43px;
    }
  }
  ul {
    width:100%;
    padding: 0 10.73%;
    margin-top: 80px;
    text-align: center;
    color: #fff;
    &:after {
      content: '';
      display: block;
      clear: both;
      height: 0;
      visibility: hidden;
      zoom: 1;
    }
    li {
      width: 25%;
      float: left;
      position: relative;
      cursor: pointer;
      i {
        position: absolute;
        top: 0;
        width: 50%;
        height: 50%;
      }
      .playIcon {
        position: absolute;
        top: 25%;
        width: 100%;
        img {
          width: 30%;
        }
      }
      a {
        display: inline-block;
        width: 90%;
        height: 90%;
        border-radius: 100%;
        margin-bottom: 20px;
        border: 4px solid transparent;
        -webkit-transition: border .5s;
        transition: border .5s;
        // &:hover {
        //   border: 4px solid red;
        //   -webkit-transition: border .5s;
        //   transition: border .5s;
        // }
        img {
          width: 100%;
          height: 100%;
        }
      }
      h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 24px
      }
      p {
        width: 192px;
        margin: 0 auto;
        font-size: 12px;
        line-height: 3em;
      }
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
</style>
