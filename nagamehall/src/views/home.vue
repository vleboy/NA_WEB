<template>
  <div class="p-gameHall">
    <div class="-hall-left">
      <div class="-left-div -img">
        <img src="../../static/new/logo.png">
      </div>
      <div class="-left-div">
        <div v-for="data of sidebarList" class="-left-side" @mouseover="showChild(0,data)" @mouseout="showChild(1,data)">
          <a class="-left-icon" >
            <img :src="data.typeImg">
            <span class="-icon-no" v-if="!data.childList.length">敬请期待</span>
          </a>
          <div class="-left-child" :id="data.id">
            <div class="mid">
              <ul class="child-ul" id="menu">
                <li class="child-menu" v-for="(item, index) of data.childList" :key="index" >
                  <div class="child-menu-img"
                       @click="showDetail"
                       :style="{'background-image': 'url(' + item.img + ')','background-position':'50%','background-size': 'cover'}" >
                  </div>
                  <div class="child-menu-text" @click="showDetail">{{item.text}}</div>
                  <div class="child-menu-state" v-if="item.state!=0">
                    <img v-if="item.state==1" src="../../static/new/new.png">
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
          <Product @changeStatus="showDetail"></Product>
        </div>
        <div class="detail-bg" v-show="isShowDetail">
          <ProductDetail></ProductDetail>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
            childList: [
              {
                img: '../../static/new/dz/cmcq.png',
                text: '熊猫传奇',
                state: '1'
              },
              {
                img: '../../static/new/dz/xcl.png',
                text: '小厨娘',
                state: '0'
              },
              {
                img: '../../static/new/dz/tlzm.png',
                text: '塔罗之谜',
                state: '1'
              },
              {
                img: '../../static/new/dz/csjb.png',
                text: '财神进宝',
                state: '1'
              },
              {
                img: '../../static/new/dz/xlxr.png',
                text: '祥龙献瑞',
                state: '2'
              },
              {
                img: '../../static/new/dz/sfss.png',
                text: '四方神兽',
                state: '1'
              },
              {
                img: '../../static/new/dz/fyht.png',
                text: '福运亨通',
                state: '1'
              }
            ]
          },
          {
            id: 2,
            typeImg: '../../static/new/jj/jj.png',
            childList: [
              {
                img: '../../static/new/jj/jj-bs.png',
                text: '宝石魔法',
                state: '1'
              },
              {
                img: '../../static/new/jj/jj-sg.png',
                text: '疯狂水果',
                state: '0'
              },
              {
                img: '../../static/new/jj/jj-js.png',
                text: '极速时刻',
                state: '1'
              },
              {
                img: '../../static/new/jj/jj-sl.png',
                text: '森林小妖',
                state: '1'
              }
            ]
          },
          {
            id: 3,
            typeImg: '../../static/new/qp/qp.png',
            childList: [
              {
                img: '../../static/new/qp/qp-p9.png',
                text: '牌9',
                state: '1'
              },
              {
                img: '../../static/new/qp/qp-scmj.png',
                text: '四川麻将',
                state: '0'
              },
              {
                img: '../../static/new/qp/qp-sxmj.png',
                text: '山西麻将',
                state: '1'
              },
              {
                img: '../../static/new/qp/qp-tg.png',
                text: '推锅',
                state: '1'
              },
              {
                img: '../../static/new/qp/qp-toz.png',
                text: '推筒子',
                state: '2'
              }
            ]
          },
          {
            id: 4,
            typeImg: '../../static/new/zr/zr.png',
            childList: [
              {
                img: '../../static/new/zr/zr-dt.png',
                text: '多台百家乐',
                state: '1'
              },
              {
                img: '../../static/new/zr/zr-gb.png',
                text: '贵宾百家乐',
                state: '0'
              },
              {
                img: '../../static/new/zr/zr-jd.png',
                text: '经典百家乐',
                state: '1'
              },
              {
                img: '../../static/new/zr/zr-js.png',
                text: '极速百家乐',
                state: '1'
              },
              {
                img: '../../static/new/zr/zr-lp.png',
                text: '超级轮盘',
                state: '2'
              }
            ]
          },
          {
            id: 5,
            typeImg: '../../static/new/ty/ty.png',
            childList: []
          }
        ]
      }
    },
    mounted () {
      $('.section').css('height',`${$(document).height()}`)
      $('.detail-bg').css('height',`${$(document).height()}`)
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
      showDetail () {
        this.isShowDetail = !this.isShowDetail
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
        background: url('../assets/xm-bg.jpg') no-repeat;
        background-size: cover;
        /*background-position: 100%;*/
      }
    }
  }
</style>
