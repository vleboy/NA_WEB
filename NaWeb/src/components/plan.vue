<template lang="html">
  <div class="plan">
    <div class="plan-content">
      <div class="title">
        <p>ADVANTAGE</p>
        <h1>我们的产品优势</h1>
      </div>
      <ul>
        <li v-for="(item, index) in Solutions" :key="index">
          <a href="javascript:;" class="img">
            <!-- <div><img :src="item.imgUrl" alt=""></div> -->
            <i>
              <img :src="item.imgUrl"/>
            </i>
          </a>
          <h2>{{item.title}}</h2>
          <div class="-plan-text">
            <p v-for="(data,index) in item.content" :key="index">{{data}}</p>
          </div>
          <div class="-plan-img">
            <img :src="item.imgText">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       Solutions: [
         { title: '增加用户留存率', imgText:'/static/t1.png',content:['1 友好的用户体验增加用户使用时间','2 最大化的合理消化用户的碎片时间','3 运营环境更安全，用户数据更稳定'], imgUrl: '/static/p1.png'},
         { title: '扩大市场消费群体', imgText:'/static/t2.png',content: ['1 未来市场移动端会越来越普及','2 娱乐消费市场用户越来越年轻','3 年轻用户的消费能力越来越强'], imgUrl: '/static/p2.png'},
         { title: '更安全稳定运营环境', imgText:'/static/t3.png',content: ['1 完全自动化运维的云处理支持','2 专业的技术服务为您答疑解惑','3 顶尖的安全顾问为您保驾护航'], imgUrl: '/static/p3.png'},
         { title: '提升商户竞争实力', imgText:'/static/t4.png',content: ['1 多版本支持，多平台运营','2 快速接入，迅速抢占市场','3 游戏题材新颖，制作精良'], imgUrl: '/static/p4.png'}
       ]
    }
  }
}
</script>

<style lang="less" scoped>
.plan {
  width: 100%;
  height: 100%;
  background: url('../assets/planBg.jpg') no-repeat;
  background-size: cover;
  display: table;
  .plan-content {
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
      .img {
        position: relative;
        display: inline-block;
        width: 90%;
        height: 0;
        padding-bottom: 90%;
        background: url('../assets/plansbg.png') no-repeat;
        background-size: cover;
        border-radius: 100%;
        margin-bottom: 20px;
        // &:hover i {
        //   background-position: 3px -150px!important;
        // }
        i {
          position: absolute;
          top: 50%;
          left: 52%;
          transform: translateX(-50%)translateY(-50%);
          display: inline-block;
          width: 150px;
          height: 0;
          padding-bottom: 150px;
          img {
            width: 100%
          }
        }
        img {
          width: 30%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%)translateY(-50%);
        }
      }
      h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 24px;
        margin-left: 3px;
      }
      p {
        /*text-align: left;*/
        width: 192px;
        margin: 0 auto;
        font-size: 12px;
        line-height: 29px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      button {
        width: 137px;
        height: 37px;
        margin-top: 22px;
        background: url('../assets/btn.png') no-repeat;
        background-size: cover;
        color: #fff;
        font-size: 14px;
        outline: none;
        cursor: pointer;
      }
    }
  }
  .-plan-text{
    display: block;
  }
  .-plan-img{
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1280px) {
  .plan {
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
        .img {
          margin-bottom: 13px;
          &:hover i {
            background-position: 3px -100px!important;
          }
          i {
            width: 75px;
            height: 0;
            padding-bottom: 100px;
          }
        }
        h2 {
          font-size: 12px;
          margin-bottom: 15px
        }
        p {
          font-size: 8px;
          line-height: 29px;
        }
        button {
          width: 92px;
          height: 25px;
          margin-top: 14px;
          font-size: 9px;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) and (orientation: portrait){
  .plan {

    .plan-content {
      height: 100%;
      display: block;
    }
    .title {
      position: relative;
      top:4%;

      h1 {
        font-size: 30px;
      }
    }
    .-plan-text{
      display: none;
    }
    .-plan-img{
      margin-left: 25px;
      display: block;
    }
    ul {
      position: relative;
      top:-4%;

      li {
        width: 50%;
        float: left;
        margin-bottom: 10px;
        .img {
          width: 80%;
          padding-bottom: 80%;
          margin-bottom: 7px;
          &:hover i {
            background-position: 3px -100px!important;
          }
          i {
            width: 75px;
            height: 0;
            padding-bottom: 100px;
            img{
              width: 80%;
            }
          }
        }
        h2 {
          font-size: 12px;
          margin-bottom: 10px
        }
        p {
          width: 129px;
          font-size: 8px;
          line-height: 29px;
        }
        button {
          width: 92px;
          height: 25px;
          margin-top: 14px;
          font-size: 9px;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) and (orientation: portrait){
  .plan {
    .-plan-img{
      margin-left: 22px;
      display: block;
    }

    ul {
      padding: 0 4.73%;
      top: -5%;
      li{
        margin-bottom: 6px;
        .img{
          margin-bottom: 6px;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) and (orientation: landscape){
  .plan {
    .title {
      position: relative;
      top:13%;
      p {
        font-size: 12px;
      }
      h1 {
        font-size: 23px;
      }
    }
    .-plan-text{
      display: none;
    }
    .-plan-img{
      margin-left: 25px;
      display: block;
    }
    ul {
      padding: 0 6.73%;
      margin-top: 5%;
      li {
        .img {
          margin-bottom: 10px;
          &:hover i {
            background-position: 3px -75px!important;
          }
          i {
            width: 75px;
            height: 0;
            padding-bottom: 75px;
            img{
              width: 80%;
            }
          }
        }
        h2 {
          font-size: 12px;
          margin-bottom: 12px;
        }
      }
    }
  }
}

@media screen and (max-width: 568px) and (orientation: landscape){
  .plan {
    .-plan-img{
      margin-left: 18px;
      display: block;
    }
    ul {
      padding: 0 0.73%;
      margin-top: 5%;
    }
  }
}
</style>
