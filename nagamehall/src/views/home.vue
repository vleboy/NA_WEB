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
            url: 'https://52qkggfn4d.execute-api.ap-southeast-1.amazonaws.com/dev/configMultList',
            data: {
              code: 'lobbyconfig'
            },
            headers: {
              'Content-type': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMmVjYWY4Ny03YjlmLTRkZDAtODgwMi0xM2E0MjhhZTVlMTQiLCJyb2xlIjoiMSIsInN1ZmZpeCI6IlBsYXRmb3JtIiwidXNlcm5hbWUiOiJQbGF0Zm9ybV9Cb3NzRkYiLCJwYXJlbnQiOiIwMCIsInBhcmVudE5hbWUiOiJTdXBlckFkbWluIiwicGFyZW50Um9sZSI6IjAwIiwiZGlzcGxheU5hbWUiOiLlubPlj7DnrqHnkIblkZgiLCJsZXZlbCI6MCwic3ViUm9sZSI6IuW5s-WPsOeuoeeQhuWRmCIsInN1YlJvbGVQZXJtaXNzaW9uIjpbIueci-advyIsIuS4quS6uuS4reW_gyIsIuWxgue6p-WFs-ezuyIsIk5B55S15a2Q5ri45oiP5oql6KGoIiwiTkHooZfmnLrmuLjmiI_miqXooagiLCJOQeecn-S6uua4uOaIjyIsIlRUR-eUteWtkOa4uOaIj-aKpeihqCIsIlNB55yf5Lq65ri45oiP5oql6KGoIiwiTUfnlLXlrZDmuLjmiI_miqXooagiLCJBR-ecn-S6uua4uOaIj-aKpeihqCIsIue6v-i3r-WVhuWIl-ihqCIsIuWIm-W7uue6v-i3r-WVhiIsIuWVhuaIt-WIl-ihqCIsIuWIm-W7uuWVhuaItyIsIuaOpeWFpeWVhueCueaVsOWRiuitpuWIl-ihqCIsIueOqeWutuWIl-ihqCIsIua4uOaIj-WIl-ihqCIsIua4uOaIj-WFrOWRiuWIl-ihqCIsIui3kemprOeBr-WIl-ihqCIsIua4uOaIj-mCruS7tuWIl-ihqCIsIuWxleS9jeWIl-ihqCIsIuWVhuaIt-i_kOiQpeiusOW9lSIsIumBk-WFt-WumuS7tyIsIue6v-i3r-WVhueZu-W9leaXpeW_lyIsIuWVhuaIt-eZu-W9leaXpeW_lyIsIueuoeeQhuWRmOaTjeS9nOaXpeW_lyIsIueuoeeQhuWRmOWIl-ihqCIsIua3u-WKoOeuoeeQhuWRmCIsIueuoeeQhuWRmOinkuiJsuWIl-ihqCIsIuaWsOWinueuoeeQhuWRmOinkuiJsiIsIue6v-i3r-WPt-WIl-ihqCIsIkRlYnVn5pON5L2c5pel5b-XIiwi5YWs5Y-46L6T6LWi5oC75oql6KGoIiwiTkHmuLjmiI_mgLvmiqXooagiLCJOQeaji-eJjOa4uOaIj-aKpeihqCIsIlNB5ri45oiP5oC75oql6KGoIiwiU0HmjZXpsbzmuLjmiI_miqXooagiLCJVR-S9k-iCsua4uOaIj-aKpeihqCJdLCJleHAiOjE1MjQzNzczMDAsImlhdCI6MTUyNDExODA3MH0.uwCTRVuwn-gbfcX5a-DfIGvWCAcVFFK8wIVEVIjY87w'
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
