<template>
  <div class="-swiper-banner">
    <swiper :options="swiperOption" ref="topSwiper" class="-swiper-top">
      <swiper-slide v-for="(item,index) in banners" :key="index">
        <img class="-img-top" :src="item.url" alt="" >
        <img class="-img-play" v-if="index==0" src="/static/play-btn.png" @click="videoPlay">
      </swiper-slide>
      <!--<div class="swiper-pagination" slot="pagination"></div>-->
    </swiper>
    <swiper :options="swiperOption2" class="-swiper-down" ref="downSwiper">
      <swiper-slide v-for="(item,index) in banners" :key="index">
        <img class="-img-down" :src="item.url" alt="" @click="changeTopSwiper(item,index)">
        <img class="-img-play" v-if="index==0" src="/static/play-btn.png">
        <div class="-img-back" v-if="index==nowIndex"></div>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </swiper>

    <div class="-video" v-if="showVideo">
      <img class="-v-close" src="/static/del.png" @click="videoPlay">
      <video  class="-v-play" :src="videoUrl" autoplay controls ></video>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'home-banner',
    props: ['detailInfo'],
    data () {
      return {
        nowIndex: 0,
        showVideo: false
      }
    },
    computed: {
      swiperOption () {
        let optionTop = ''
        let _self = this
        optionTop = {
          notNextTick: true,
          speed:500, // 滑动速度
          autoplay: {
            delay: 3000  // 切换图片间隔
          },
//          pagination: {
//            el: '.swiper-pagination',
//            clickable: true
//          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          initialSlide: 0, // 轮播图默认第几张开始
          observer:true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents:true, //修改swiper的父元素时，自动初始化swiper
          on: {
            slideChangeTransitionEnd: function (swiper) {
              _self.nowIndex = this.activeIndex
            }
          }
        }

        return optionTop
      },
      swiperOption2 () {
        let _self = this
        let optionDown = ''
        let swiper =  setTimeout(()=>{
          return _self.$refs.topSwiper.swiper
        },0)

        optionDown = {
          notNextTick: true,
          grabCursor : true, // 手势
          speed:500, // 滑动速度
          slidesPerView : 4,
          autoplay: {
            delay: 3000  // 切换图片间隔
          },
          spaceBetween: 10,
          observer:true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents:true, //修改swiper的父元素时，自动初始化swiper
          slideToClickedSlide: true
        }
        return optionDown
      },
      banners () {
        this.showVideo = false
        return this.detailInfo.carouselImg
      },
      videoUrl () {
        return this.detailInfo.url
      }
    },
    mounted () {
      this.$refs.topSwiper.swiper.slideTo(0, 1000, false)
//      this.$refs.topSwiper.swiper.autoplay.start();
    },
    methods: {
      changeTopSwiper (item,index) {
        this.nowIndex = index
        this.$refs.topSwiper.swiper.slideTo(index, 1000, false)
      },
      videoPlay () {
        this.showVideo =!this.showVideo
        if (this.showVideo) {
          this.$refs.topSwiper.swiper.autoplay.stop();
        } else {
          this.$refs.topSwiper.swiper.autoplay.start();
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="less" scoped>
  .-swiper-banner {
    position: relative;
    width:900px;
    top:60px;

      .swiper-container {
        width: 100%;
        height: 100%;
      }

      .swiper-pagination {
        position: absolute;
        bottom: 30px;
      }

      .swiper-slide {
        display: flex;
        justify-content: center;
      }

      .-swiper-top {
        height: 506px;
      }
      .-img-top {
        width: 100%;
        height: 100%
      }

      .-img-play{
        position: absolute;
        width: 10%;
        top:42%;
      }

      .-img-back {
        background: rgba(0, 0, 0, 0.7);
        width: 198px;
        height: 83px;
        position: absolute;
      }

      .-swiper-down {
        width: 100%;
        padding: 10px 40px;

        .swiper-button-prev{
          position: absolute;
          left: -40px;
          top: 22px;
          width: 32px;
          height: 83px;
          background-color: rgba(0,0,0,0.7);
        }

        .swiper-button-next{
          position: absolute;
          right: -40px;
          top: 22px;
          width: 32px;
          height: 83px;
          background-color: rgba(0,0,0,0.7);
        }
      }

      .-img-down {
        width: 100%;
        height: 83px
      }

      .-active {
        /*border: 2px solid #00BCD4;*/
      }

      .-video{
        position: absolute;
        top:0;
        left: 0;
        z-index: 1;

        .-v-close{
          position: absolute;
          top: -22px;
          right: -22px;
          width: 3%;
          cursor: pointer;
        }

        .-v-play{
          width: 900px;
          height: 506px ;
        }
      }
  }

  @media (max-width: 1366px) {
    .-swiper-banner{
      width:700px;

      .-swiper-top {
        height: 394px;
      }
      .swiper-button-prev{
        width: 32px!important;
        height: 82px!important;
      }

      .-img-back {
        width: 148px;
        height: 83px;
      }

      .swiper-button-next{
        width: 32px!important;
        height: 82px!important;
      }

      .-video{
        position: absolute;
        top:0;
        left: 0;
        z-index: 1;

        .-v-close{
          width: 4%;
        }
        .-v-play{
          width: 700px;
          height: 394px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .-swiper-banner {
      top:-20px;
      width: 260px;

      .-swiper-top {
        height: 150px;
      }
      .-video{
        .-v-play{
          width: 265px;
          height: 150px;
        }
        .-v-close{
          right: -12px;
          top: -17px;
          width: 8%;
        }
      }
      .-img-down {
        width: 100%;
        height: 34px
      }

      .-img-back {
        background: rgba(0, 0, 0, 0.7);
        width: 38px;
        height: 36px;
        position: absolute;
      }

      .-swiper-down {
        width: 100%;
        padding: 10px 40px;

      .swiper-button-prev{
          top: 20px;
          width: 24px!important;
          height: 38px!important;
          background-size: 44%
        }

        .swiper-button-next{
          top: 20px;
          width: 24px!important;
          height: 38px!important;
          background-size: 44%;
        }
      }
    }
  }
</style>

