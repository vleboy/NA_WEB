<template lang="html">
  <div class="n2">
    <div class="n2-content">
      <div class="title">
        <p>N² PLAN</p>
        <h1>N² 计划 第一章</h1>
      </div>
      <div class="content">
        <div class="left">
          <i></i>
          <p></p>
          <h2><span>{{lefts.content}}</span></h2>
        </div>
        <div class="right">
          <ul>
            <li v-for="(item, index) in rights" :key="index">
              <div class="img" :style="`background:url(${item.imgUrl}) no-repeat;background-size: cover`">
                <h2>
                  <span>{{item.msg}}</span>
                </h2>
                <div class="title">{{item.title}}</div>
                <div class="bg"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lefts: {
        content: '新亚洲集团基于行业现状正在倾力打造全方位服务方案，官方称之为“N2计划”。目的则是解决业内运营商在移动端的痛点。提供全方位服务，协助运营商在移动端开疆扩土。秉承NA平台运营理念科技创新 服务落地。',
        imgUrl: ''
      },
      rights: [
        {title: '产品竞争能力弱', msg: '产品形态主要为PC网页版以及手机网页版，难以满足移动端市场的需求以及吸引年轻玩家', imgUrl: '/static/n1.jpg'},
        {title: '运营环境不稳定 用户留存率低', msg: '由于网页运营环境不稳定、不安全、容易被浏览器拦截以及屏蔽，造成用户流失', imgUrl: '/static/n2.jpg'},
        {title: '移动端产品开发成本高', msg: '缺乏专业的技术团队与强大的技术储备支持', imgUrl: '/static/n3.jpg'},
        {title: '产品迭代缓慢', msg: '缺乏多元化及高品质的游戏产品', imgUrl: '/static/n4.jpg'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.n2 {
  width: 100%;
  height: 100%;
  background: url('../assets/n2Bg.png') no-repeat;
  background-size: cover;
  display: table;
  .n2-content {
    display: table-cell;
    vertical-align: middle;
  }
  .title {
    text-align: center;
    color: #fff;
    p {
      font-size: 14px;
      margin-bottom: 22px;
    }
    h1 {
      font-size: 43.13px;
    }
  }
  .content {
    margin: 74px 19.53125% 0;
    &:after {
      content: '';
      display: block;
      clear: both;
      height: 0;
      visibility: hidden;
      zoom: 1;
    }
    .left {
      float: left;
      position: relative;
      width: 50%;
      padding-bottom: 50%;
      height: 0;
      color: #ffffff;
      text-align: center;
      border-radius: 15px;
      background: url('../assets/plan1.png') no-repeat;
      background-size: cover;
      overflow: hidden;
      i {
        display: inline-block;
        width: 265px;
        height: 89px;
        background: url('../assets/tag.png') no-repeat;
        background-size: cover;
        position: absolute;
        top: 35px;
        left: -10px;
      }
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%)translateY(-50%);
                transform: translateX(-50%)translateY(-50%);
        width: 408px;
        font-size: 16px;
        line-height: 26.40005px;
      }
      h2 {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 61px;
        line-height: 1rem;
        background-color: rgba(0, 0, 0, .4);
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center
      }
    }
    .right {
      float: left;
      width: 50%;// 600px;
      ul {
        color: #fff;
        text-align: center;
        &:after {
          content: '';
          display: block;
          clear: both;
          height: 0;
          visibility: hidden;
          zoom: 1;
        }
        li {
          float: left;
          width: 50%;
          // height: 296px;
          padding-bottom: 50%;
          height: 0;
          margin-bottom: 15px;
          padding-left: 15px;
          .img {
            position: relative;
            width: 100%;
            // height: 100%;
            padding-bottom: 100%;
            height: 0;
            border-radius: 15px;
            // background: url('../assets/plan1.png') no-repeat;
            background-size: cover;
            overflow: hidden;
            &:hover .bg {
              opacity: 0.2;
              -webkit-transition: opacity .5s;
              transition: opacity .5s;
            }}
            h2 {
              position: absolute;
              bottom: 0px;
              width: 100%;
              height: 61px;
              line-height: 1.1rem;
              background-color: rgba(0, 0, 0, .4);
              font-size: 14px;
              display: flex;
              align-items: center;
              text-align: center;
              justify-content: center
            }
            .bg {
              position: absolute;
              bottom: 0px;
              width: 100%;
              height: 100%;
              background-color: red;
              opacity: 0;
              -webkit-transition: opacity .5s;
              transition: opacity .5s;
            }
            .title {
              font-size: 18px;
              width: 50%;
              margin: 50px auto 0;
              color: #000000
            }
          }
        }
      }
    }
  }
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .n2 {
    .title {
      p {
        font-size: 9.33px;
        margin-bottom: 14px;
      }
      h1 {
        font-size: 28.76px;
      }
    }
    .content {
      margin: 48px 19.140625% 0;
      .left {
        width: 50%;// 379px
        // height: 412px;
        padding-bottom: 50%;
        height: 0;
        i {
          width: 177px;
          height: 60px;
          top: 24px;
          left: -10px;
        }
        p {
          width: 273px;
          font-size: 10.67px;
          line-height: 26.40005px;
        }
        h2 {
          font-size: 10.67px;
          line-height: 1rem;
        }
      }
      .right {
        width: 50%;//407px
        ul {
          li {
            width: 50%;
            // height: 198px;
            padding-bottom: 50%;
            height: 0;
            margin-bottom: 10px;
            padding-left: 10px;
            .img {
              h2 {
                bottom: 0px;
                width: 100%;
                height: 45px;
                line-height: 1rem;
                font-size: 10.67px;
              }
              .title {
                font-size: 16px;
                width: 70%;
                margin: 30px auto 0
              }
            }
          }
        }
      }
    }
  }
}
</style>
