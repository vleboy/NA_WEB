<template lang="html">
  <div class="product">
    <div class="product-content">
      <div class="c-text">游戏推荐</div>
      <el-row class="c-wrap product-pc" >
        <el-row class="c-cell" v-for="(data,index) in allGameList" :key="index">
          <el-col :span='8' v-for="item1 in data[0]">
            <div class="c-cell-div"
                 :style="{'background-image': 'url(' + item1.recommendImg + ')'}"
                 @click="getDetail(item1)">
              <span class="c-cell-text">{{item1.text}}</span>
            </div>
          </el-col>

          <el-col :span="4" v-for="item2 in data[1]">
            <div class="c-cell-div"  :style="{'background-image': 'url(' + item2.recommendImg + ')'}" @click="getDetail(item2)">
              <span class="c-cell-text">{{item2.text}}</span>
            </div>
          </el-col>
        </el-row>

        <el-row class="c-cell" v-for="data in otherGameList">
          <el-col :span="4" v-for="item1 in data[0]">
            <div class="c-cell-div"  :style="{'background-image': 'url(' + item1.recommendImg + ')'}" @click="getDetail(item1)">
              <span class="c-cell-text">{{item1.text}}</span>
            </div>
          </el-col>

          <el-col :span='8' v-for="item2 in data[1]">
            <div class="c-cell-div"
                 :style="{'background-image': 'url(' + item2.recommendImg + ')'}"
                 @click="getDetail(item2)">
              <span class="c-cell-text">{{item2.text}}</span>
            </div>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="product-mobile">
        <el-row class="c-cell" v-for="(data,index) in allGameList" :key="index">
          <el-col :span='24' v-for="item1 in data[0]">
            <div class="c-cell-div"
                 :style="{'background-image': 'url(' + item1.recommendImg + ')'}"
                 @click="getDetail(item1)">
              <span class="c-cell-text">{{item1.text}}</span>
            </div>
          </el-col>

          <el-col :span="12" v-for="item2 in data[1]">
            <div class="c-cell-div"  :style="{'background-image': 'url(' + item2.recommendImg + ')'}" @click="getDetail(item2)">
              <span class="c-cell-text">{{item2.text}}</span>
            </div>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recommendInfo'],
  data () {
    return {
    }
  },
  computed: {
    recommendList () {
      return this.recommendInfo
    },
    allGameList () {
      let array
      if(this.recommendList.length) {
        array = [
          [[this.recommendList[0],this.recommendList[1]],[this.recommendList[2],this.recommendList[3]]],
          [[this.recommendList[4],this.recommendList[5]],[this.recommendList[6],this.recommendList[7]]]
        ]
      } else {
        array = [
          [
            [
              {
                text:'敬请期待',
                recommendImg:''
              },
              {
                text:'敬请期待',
                recommendImg:''
              }
            ],
            [
              {
                text:'敬请期待',
                recommendImg:''
              },
              {
                text:'敬请期待',
                recommendImg:''
              }
            ]
          ],
          [
            [
              {
                text:'敬请期待',
                recommendImg:''
              },
              {
                text:'敬请期待',
                recommendImg:''
              }
            ],
            [
              {
                text:'敬请期待',
                recommendImg:''
              },
              {
                text:'敬请期待',
                recommendImg:''
              }
            ]
          ]
        ]
      }
      return array
    },
    otherGameList () {
      let array2 = []
      if(this.recommendList.length) {
        array2 = [
          [[this.recommendList[8],this.recommendList[9]],[this.recommendList[10],this.recommendList[11]]]
        ]
      } else {
        array2 = [
          [
            [
              {
                text:'敬请期待',
                recommendImg:''
              },
              {
                text:'敬请期待',
                recommendImg:''
              }
            ],
            [
              {
                text:'敬请期待',
                recommendImg:''
              },
              {
                text:'敬请期待',
                recommendImg:''
              }
            ]
          ]
        ]
      }
      return array2
    }
  },
  methods: {
    getDetail (item) {
      if(item.isJump) {
        this.$emit('changeStatus',item)
      } else {
        alert('敬请期待')
      }
    }
  }
}
</script>

<style lang="less" scoped>
 .product{
   /*background-color: red;*/
   position: absolute;
   top:0;
   left: 0;
   right: 0;
   bottom: 0;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   .product-mobile{
    display: none;
   }
   .product-content {
       width: 900px;

      .c-text{
        font-size: 2em;
        font-weight: bold;
        color: #fff;
        font-family: serif;
        margin-bottom: 10px;
      }

      .c-cell{
        height: 146px;
        overflow: hidden;

        img {
          width: 100%;
        }

        .c-cell-div {
          background-repeat: no-repeat!important;
          background-size: cover;
          overflow: hidden;
          margin: 10px 10px 10px 0;
          height: 140px;
          cursor: pointer;
          position: relative;
          background-color: rgba(0,0,0,0.3);
        }
        .c-cell-text{
          color: #fff;
          font-size: 18px;
          position: absolute;
          top: 72%;
          left: 16px;
        }
      }
   }
 }

 @media (max-width: 768px) {
   .product {

   .product-content {
     overflow-y: scroll;
     height: 530px;

   .product-pc {
     display: none;
   }

   .product-mobile {
     display: block;
   }

   .c-cell {
     overflow: inherit !important;
     padding-left: 10px;
     height:0!important;
   }
 }

 }
 }
</style>

