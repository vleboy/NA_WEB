<template>
  <div class="detail-game">
    <div class="g-content">
      <div class="box">
        <!-- 存放大图的容器-->
        <div class="all">
          <div class="top-img">
            <div class="activeimg">
              <!--<img v-for="item in banners" :src="{{item.imgUrl}}">-->
              <!--<img :src={{banners[0].imgUrl}}>-->
              <div class="-banner">
                <img :src="banners[0]">
                <!--<img class="-play-btn" src="/static/play-btn.png">-->
              </div>
              <div>
                <img :src="banners[1]">
              </div>
              <div>
                <img :src="banners[2]">
              </div>
              <div>
                <img :src="banners[3]">
              </div>
            </div>
          </div>
          <!-- 存放缩略图的容器-->
          <div class="bot-img">
            <div class="left"><img src="../assets/left.png"> </div>
            <div class="right"><img src="../assets/right.png"></div>
            <ul>
              <li class="active"><img :src="banners[0]"> </li>
              <li><img :src="banners[1]"> </li>
              <li><img :src="banners[2]"> </li>
              <li><img :src="banners[3]"> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        banners: ['/static/banner1.jpg', '/static/banner2.jpg', '/static/banner3.jpg', '/static/banner4.jpg']
      }
    },

    mounted () {
      $(function(){
        $('.bot-img ul li').click(function(){
          var _this=$(this);
          _this.addClass('active').siblings('li').removeClass('active');
          var int=_this.index();
          $('.activeimg').animate({left:int*-900},"slow");
        });
        var list=$('.bot-img ul li').length;
        $('.activeimg').css({
          width:list*900,
        });
        $('.right').click(function(){
          next(list)

        })
        $('.left').click(function(){
          prev(list)
        });

        //�Զ����� 2�벥��һ�� ����ѭ��
        var timer='';
        var num=0;
        timer=setInterval(function(){ //�򿪶�ʱ��
          num++;
          if(num>parseFloat(list)-1){
            num=0;
            $('.activeimg').animate({left:num*-900},"slow");
          }else{
            $('.activeimg').animate({left:num*-900},"slow");
          }
        },5000);
      })
      var index=0;
      function next(list){
        if(index<list-1){
          index++;
          $('.activeimg').animate({left:index*-900},"slow");
          $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
        }else{
          index=0;
          $('.activeimg').animate({left:index*-522},"slow");
          $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
        }
      }
      function prev(list){
        index--;
        if(index<0){
          index=list-1;
          $('.activeimg').animate({left:index*-900},"slow");
          $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
        }else{
          $('.activeimg').animate({left:index*-900},"slow");
          $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .detail-game {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .g-content{
      width: 900px;
      height: 600px;
    }

    .all{
      width: 900px;
      height: auto;
      margin: 60px auto;
      overflow: hidden;
    }
    .top-img{
      width: 900px;
      height: 430px;font-size: 0;position: relative;
    }
    .activeimg{
      overflow: hidden;height: 430px;position: relative;
    }
    .-banner {
      position: relative;
    }
    .-banner.-play-btn{
      position: absolute;
    }
    .top-img .activeimg img{
      width: 900px;height: 430px;
    }
    .bot-img .left{
      width: 40px;
      height: 102px;
      background: rgba(0,0,0,0.4);
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      line-height: 108px;
      cursor: pointer;
    }
    .bot-img .right{
      width: 40px;
      height: 102px;
      background: rgba(0,0,0,0.4);
      position: absolute;
      left:860px;
      top: 0;
      text-align: center;
      line-height: 108px;
      cursor: pointer;
    }
    .bot-img .left:hover,.bot-img .right:hover{
      background: rgba(0,0,0,0.5);
    }

    .bot-img{
      height: 104px;
      width: 900px;
      margin-top: 15px;
      position: relative;
    }
    .bot-img ul{
      position: absolute;
      left: 64px;
      height: 100px;
    }
    .bot-img ul li{
      width: 180px;
      margin-right: 18px;
      float: left;
      border: 1px solid #fff;
      cursor: pointer;
      font-size: 0;
    }
    .bot-img ul li.active{
      border: 1px solid #ff6600;
    }
    .bot-img ul li img{
      width: 100%;
    }
    .bot-img ul li:last-child{
      margin-right: 0;
    }
  }

</style>
