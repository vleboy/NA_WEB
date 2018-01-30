<template>
  <div class="admiral-backWall">
     <img :src="url">
  </div>
</template>

<script>
export default {
  name: "backWall",
  data () {
    return {
      url: ''
    }
  },
  created () {
    let flag = this.GetQueryString('flag')
    switch (flag) {
      case 'pro':
        this.url = '/static/a1.jpg'
        break;
      case 'base':
        this.url = '/static/a2.jpg'
        break;
      case 'desc':
        this.url = '/static/a3.jpg'
        break;
      default:
        break;
    }
  },
  methods: {
    GetQueryString: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
          return decodeURI(r[2]);
      }
      return null;
    }
  }
}
</script>


<style lang="less" scoped>
.admiral-backWall {
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto
  }
}
</style>

