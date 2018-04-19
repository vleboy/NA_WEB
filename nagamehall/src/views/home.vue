<template>
  <div class="p-gameHall">
    <div class="-hall-left">
      <div class="-left-div -img" @click="isShowDetail = false">
        <img src="../../static/new/logo.png">
      </div>
      <div class="-left-div">
        <div v-for="(data, indexItem) of sidebarList" :key="indexItem" class="-left-side"
             @mouseover="showChild(0,data)" @mouseout="showChild(1,data)">
          <a class="-left-icon" >
            <img :src="data.typeImg">
            <span class="-icon-no" v-if="!data.childList.length">敬请期待</span>
          </a>
          <div class="-left-child" :id="data.id">
            <div class="mid">
              <ul class="child-ul" id="menu">
                <li class="child-menu" v-for="(item, index) of data.childList" :key="index" >
                  <div class="child-menu-img"
                       @click="showDetail(item)"
                       :style="{'background-image': 'url(' + item.img + ')','background-position':'50%','background-size': 'cover'}" >
                  </div>
                  <div class="child-menu-text" @click="showDetail(item)">{{item.text}}</div>
                  <div class="child-menu-state" v-if="item.state!=0">
                    <img v-if="item.state == 1" src="../../static/new/new.png">
                    <img v-else src="../../static/new/hot.png">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="-hall-right">
      <div class="right-wrap">
        <div class="section" v-show="!isShowDetail">
          <vue-particles class="section"
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="repulse"
          ></vue-particles>
          <Product :recommendInfo="recommendList" @changeStatus="fromRecommend"></Product>
        </div>
        <div class="detail-bg" v-show="isShowDetail" :style="{'background-image': 'url(' + gameInfo.bgImg + ')','background-size': 'cover'}">
          <ProductDetail :detailInfo="gameInfo"></ProductDetail>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import Product from '../components/product'
  import ProductDetail from '../components/product-detail'
  export default {
    name: 'home',
    data () {
      return {
        show: true,
        isShowChild: false,
        isShowDetail: false,
        sidebarList: [
          {
            id: 1,
            typeImg: '../../static/new/dz/dz.png',
            gameType: '40000',
            childList: []
          },
          {
            id: 2,
            typeImg: '../../static/new/jj/jj.png',
            gameType: '50000',
            childList: []
          },
          {
            id: 3,
            typeImg: '../../static/new/qp/qp.png',
            gameType: '10000',
            childList: []
          },
          {
            id: 4,
            typeImg: '../../static/new/zr/zr.png',
            gameType: '30000',
            childList: []
          },
          {
            id: 5,
            typeImg: '../../static/new/ty/ty.png',
            gameType: '20000',
            childList: []
          }
        ],
        recommendList: [],
        gameInfo: ''
      }
    },
    mounted () {
      $('.section').css('height',`${$(document).height()}`)
      $('.detail-bg').css('height',`${$(document).height()}`)
      this.getGameHall()
    },
    methods: {
      showChild (bool,data) {
        if(!bool) {
          for (let item of this.sidebarList) {
            if (item.id == data.id) {
              $('.-left-child').css('display','flex')
              $(`#${data.id}`).css({'opacity':'0'})
            } else {
              $(`#${data.id}`).css('opacity','1')
            }
          }
        } else {
          for (let item of this.sidebarList) {
            $(`#${item.id}`).css('opacity','0')
            $('.-left-child').css('display','none')
          }
        }
      },
      showDetail (item) {
        this.gameInfo = item
        this.isShowDetail = true
      },
      async getGameHall () {
        try {
          const { data } = await axios({
            method: 'post',
            url: 'https://lo33h259l3.execute-api.ap-southeast-1.amazonaws.com/dev/configMultList',
            data: {
              code: 'lobbyconfig'
            },
            headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNDJiNWRhYy01YjYwLTQ5YmYtYjFmYS1jM2YxYzE2MDA2YWQiLCJyb2xlIjoiMSIsInN1ZmZpeCI6IlBsYXRmb3JtIiwidXNlcm5hbWUiOiJQbGF0Zm9ybV9OQXRlc3QiLCJwYXJlbnQiOiIwMCIsInBhcmVudE5hbWUiOiJTdXBlckFkbWluIiwicGFyZW50Um9sZSI6IjAwIiwiZGlzcGxheU5hbWUiOiLlubPlj7DnrqHnkIblkZgiLCJsZXZlbCI6MCwic3ViUm9sZSI6Iui2hee6p-euoeeQhuWRmCIsInN1YlJvbGVQZXJtaXNzaW9uIjpbIueci-advyIsIuS4quS6uuS4reW_gyIsIuWxgue6p-WFs-ezuyIsIuWFrOWPuOi-k-i1ouaAu-aKpeihqCIsIk5B5ri45oiP5oC75oql6KGoIiwiTkHnlLXlrZDmuLjmiI_miqXooagiLCJOQeihl-acuua4uOaIj-aKpeihqCIsIk5B5qOL54mM5ri45oiP5oql6KGoIiwiTkHnnJ_kurrmuLjmiI8iLCJUVEfnlLXlrZDmuLjmiI_miqXooagiLCJTQeecn-S6uua4uOaIj-aKpeihqCIsIlNB5o2V6bG85ri45oiP5oql6KGoIiwiTUfnlLXlrZDmuLjmiI_miqXooagiLCJBR-ecn-S6uua4uOaIj-aKpeihqCIsIlVH5L2T6IKy5ri45oiP5oql6KGoIiwi57q_6Lev5ZWG5YiX6KGoIiwi5Yib5bu657q_6Lev5ZWGIiwi5ZWG5oi35YiX6KGoIiwi5Yib5bu65ZWG5oi3Iiwi5o6l5YWl5ZWG54K55pWw5ZGK6K2m5YiX6KGoIiwi546p5a625YiX6KGoIiwi5ri45oiP5YiX6KGoIiwi5ri45oiP5YWs5ZGK5YiX6KGoIiwi6LeR6ams54Gv5YiX6KGoIiwi5ri45oiP6YKu5Lu25YiX6KGoIiwi5bGV5L2N5YiX6KGoIiwi5ZWG5oi36L-Q6JCl6K6w5b2VIiwi6YGT5YW35a6a5Lu3Iiwi57q_6Lev5ZWG55m75b2V5pel5b-XIiwi5ZWG5oi355m75b2V5pel5b-XIiwi566h55CG5ZGY5pON5L2c5pel5b-XIiwi566h55CG5ZGY5YiX6KGoIiwi5re75Yqg566h55CG5ZGYIiwi566h55CG5ZGY6KeS6Imy5YiX6KGoIiwi5paw5aKe566h55CG5ZGY6KeS6ImyIiwi57q_6Lev5Y-35YiX6KGoIiwiRGVidWfmk43kvZzml6Xlv5ciLCJTQea4uOaIj-aAu-aKpeihqCJdLCJleHAiOjE1MjQxOTc4NjAsImlhdCI6MTUyMzkzODYzMH0.7mP6yisVHA7zUMhh6T1JpsReU1wcooOWz7w1dNL--Wk'
            }
          })

          for (let item of data.payload) {
            for (let data of this.sidebarList) {
              if(item.gameType == data.gameType) {
                data.childList.push({
                  img: item.gameImg, // 头像
                  bgImg: item.bgImg == null ? '../../static/new/detail_bg.png' : item.bgImg, // 背景图
                  carouselImg: item.carouselImg, // 轮播图
                  text: item.gameName,
                  url: item.url, // 视频链接
                  state: item.state // 状态
                })
              }
            }

            if(item.isRecommend) {
              this.recommendList.push({
                img: item.gameImg, // 头像
                recommendImg: item.recommendImg, // 推荐图
                bgImg: item.bgImg == null ? '../../static/new/detail_bg.png' : item.bgImg, // 背景图
                carouselImg: item.carouselImg, // 轮播图
                text: item.gameName,
                url: item.url, // 视频链接
                state: item.state, // 状态
                isJump: true // 是否能够跳转
              })
            }
          }

          let length = 12- this.recommendList.length

          for (let i = 0; i< length; i++){
            this.recommendList.push({
              text: '敬请期待',
              isJump: false,
              recommendImg: ''
            })
          }
        } catch (err) {
          console.log(err)
        }
      },
      fromRecommend (item) {
        this.showDetail(item)
      }
    },
    components: {Product, ProductDetail}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .p-gameHall{
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: flex-start;

    .-hall-left{
      flex: 0 0 auto;
      height: 100%;

      .-left-side{
        z-index: 3;
        position: relative;
        height: 94px;

        img{
          width: 80%;
        }
      }

      .-left-icon {
        display: block;
        padding: 8px;

        .-icon-no{
          position: absolute;
          width: 76px;
          color: #c7c7c7;
          height: 76px;
          top: 8px;
          background-color: rgba(0,0,0,0.5);
          left: 16px;
          line-height: 76px;
          font-size: 12px;
          border-radius: 38px;
        }
      }

      .-left-div{
        position: relative;
        text-align: center;
      }

      .-img{
        padding-top: 20px;
        cursor: pointer;
      }

      .-left-child {
        display: none;
        align-items: center;
        opacity: 0;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 110px;
        height:94px;
        width: 640px;
        transition: opacity 1.5s;

        .mid {
          float: left;
          border-right: 3px solid #5a83ff;
          background-color: rgba(0,0,0,0.7);
          padding-left: 14px;

          .child-ul {
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
          }
          .child-menu {
            display: flex;
            align-items: center;
            height: 48px;
            width: 155px;
            font-size: 14px;
          }
          .child-menu-img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin-right: 10px;
            cursor: pointer;
          }
          .child-menu-text {
            margin-right: 6px;
            color: #fff;
            cursor: pointer;
          }
          .child-menu-text:hover {
            color: #1d9cdf;
          }
        }
      }
    }
    .-hall-right{
      height: 100%;
      flex: 1 1 auto;
      position: relative;

      .right-wrap{
        height: 100%;
      }

      .section{
        height:100%;
        background-color: #262b33
      }

      .detail-bg{
        display: flex;
        justify-content: center;
        align-items: center;
        /*background-position: 100%;*/
      }
    }
  }
</style>
