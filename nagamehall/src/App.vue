<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "../src/css/normalize.css";
  @import 'swiper/dist/css/swiper.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  box-sizing: border-box;
  font-family: "Microsoft Yahei",sans-serif;
  -webkit-tap-highlight-color:transparent;
  -webkit-font-smoothing: antialiased;
&:focus {
   outline: none;
 }
}
body {
  height:100%;
  background-color: #070a14;
}
a:hover {
  text-decoration: none;
}
</style>
