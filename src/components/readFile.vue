<template>
<div class="body">
<header class="header"><div class="back"></div></header>
<main class="main">
  <div class="conteiner">
    <img :src="files[count]" alt="" class="nowImg">
  </div>
  <div class="down">
    <div class="down__button">
      <div @click="count > -1 ? count-- : count = files.length" class="down__left"></div>
      <div @click="count <= files.length ? count++ : count = 1 " class="down__right"></div>
    </div>
    <div class="score"><p class="score__title">Страница:{{count + 1}}</p></div>
  </div>
</main>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'readFile',
  data(){
    return{
      count:0,
    }
  }, 
  methods:{

  },
  computed:{
   ...mapGetters(['files']),
   
  },

}
</script>

<style lang="scss">
*{ padding:0;margin: 0;border: 0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}:focus,:active{outline: none};a:focus,a:active{outline:none};nav,footer,header,aside{display:block};html,body{  height: 100%;  width: 100%;   line-height:1;   font-size: 100%;  font-size:14px;  -ms-text-size-adjust: 100%;   -webkit-text-size-adjust:100%;}input,button,textarea{font-family:inherit;}input::-ms-clear{display:none;}button{cursor: pointer;}button::-moz-focus-inner{padding:0;border:0}a, a:visited{text-decoration:none;}a:hover{text-decoration:none;}ul li{list-style:none;}img{vertical-align:top;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:400;};
.header {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  border-bottom:1px solid black;
  height:60px;
  
}
.body{
  width:100%;
  height:100%;
  padding-top: 80px ;
}
.back {
}
.main {
 
  owerflow:auto;
}
.conteiner {
}
.nowImg {
}
.down {

		&__button {
		}

		&__left {
		}

		&__right {
		}
}
.score {

		&__title {
		}
}

</style>
