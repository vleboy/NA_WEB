<template lang="html">
  <div>
    <div class="product">
      <div class="product-content">
        <div class="c-text">游戏推荐</div>
        <el-row class="c-wrap">
          <el-row class="c-cell" v-for="data in allGameList">
            <el-col :span='8' v-for="item1 in data[0]">
              <div class="c-cell-div"
                   :style="{'background-image': 'url(' + item1.img + ')'}"
                   @click="getDetail()">
                <span class="c-cell-text">{{item1.text}}</span>
              </div>
            </el-col>

            <el-col :span="4" v-for="item2 in data[1]">
              <div class="c-cell-div"  :style="{'background-image': 'url(' + item2.img + ')'}" @click="getDetail()">
                <span class="c-cell-text">{{item2.text}}</span>
              </div>
            </el-col>
          </el-row>

          <el-row class="c-cell" v-for="data in otherGameList">
            <el-col :span="4" v-for="item1 in data[0]">
              <div class="c-cell-div"  :style="{'background-image': 'url(' + item1.img + ')'}" @click="getDetail()">
                <span class="c-cell-text">{{item1.text}}</span>
              </div>
            </el-col>

            <el-col :span='8' v-for="item2 in data[1]">
              <div class="c-cell-div"
                   :style="{'background-image': 'url(' + item2.img + ')'}"
                   @click="getDetail()">
                <span class="c-cell-text">{{item2.text}}</span>
              </div>
            </el-col>
          </el-row>
        </el-row>
      </div>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      allGameList:[
        [
          [
            {
              text:'小厨娘',
              img:'../../static/new/child_index/index_img_1.jpg'
            },
            {
              text:'塔罗之谜',
              img:'../../static/new/child_index/index_img_2.jpg'
            }
          ],
          [
            {
              text:'福运亨通',
              img:'../../static/new/child_index/index_img_3.jpg'
            },
            {
              text:'祥龙献瑞',
              img:'../../static/new/child_index/index_img_4.jpg'
            }
          ]
        ],
        [
          [
            {
              text:'急速时刻',
              img:'../../static/new/child_index/index_img_5.jpg'
            },
            {
              text:'熊猫传奇',
              img:'../../static/new/child_index/index_img_6.jpg'
            }
          ],
          [
            {
              text:'宝石魔法',
              img:'../../static/new/child_index/index_img_7.jpg'
            },
            {
              text:'疯狂水果',
              img:'../../static/new/child_index/index_img_8.jpg'
            }
          ]
        ]
      ],
      otherGameList: [
        [
          [
            {
              text:'财神进宝',
              img:'../../static/new/child_index/index_img_9.jpg'
            },
            {
              text:'四方神兽',
              img:'../../static/new/child_index/index_img_10.jpg'
            }
          ],
          [
            {
              text:'森林小妖',
              img:'../../static/new/child_index/index_img_11.jpg'
            },
            {
              text:'真人视频',
              img:'../../static/new/child_index/index_img_12.jpg'
            }
          ]
        ]
      ]
    }
  },
  methods: {
    getDetail () {
      this.$emit('changeStatus')
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


   .product-content {
       width: 900px;

      .c-text{
        font-size: 2.3em;
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
          background-size: 100%!important;
          overflow: hidden;
          margin: 10px 10px 10px 0;
          height: 140px;
          cursor: pointer;
          position: relative;
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
</style>

