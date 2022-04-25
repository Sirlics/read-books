<template>
<div class="body">
 <div class="loader">
   <input type="file" @change="getFiles" name="file" id="fil" accept=".JPG,.jpeg,.png,.gif,.txt,.doc" multiple="true">
   <div class="title"><h2 class="title__text">
      Загрузите ваши файлы
     </h2>
     </div>
     <div @click="clickInput" class="save">
       <p class="save__text">Загрузить<span class="vopr">?</span></p>
     </div>
 </div>
 </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'saveForm',
  data(){
    return{
      zip:[],
    }
  }, 
  methods:{
    ...mapActions(['saveZip',]),
   clickInput(){
     document.querySelector('#fil').click()
   },
   getFiles(e){
   let re = Array.from(e.target.files)
   this.zip = re
   this.saveZip(this.zip)
   }
  },
  computed:{

  },

}
</script>

<style lang="scss">
*{ padding:0;margin: 0;border: 0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}:focus,:active{outline: none};a:focus,a:active{outline:none};nav,footer,header,aside{display:block};html,body{  height: 100%;  width: 100%;   line-height:1;   font-size: 100%;  font-size:14px;  -ms-text-size-adjust: 100%;   -webkit-text-size-adjust:100%;}input,button,textarea{font-family:inherit;}input::-ms-clear{display:none;}button{cursor: pointer;}button::-moz-focus-inner{padding:0;border:0}a, a:visited{text-decoration:none;}a:hover{text-decoration:none;}ul li{list-style:none;}img{vertical-align:top;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:400;};
.loader {
  width:100%;
  background:rgb(196, 196, 196);
  border-radius: 30px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  border:5px solid green;
  box-shadow: 0 0 5px black;
}
.title {
 
		&__text {
      font-size:40px;
      
      color:green;
       font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		}
    margin:30px 0 60px 0;
}
.save {
  transition:all 0.1s ease-in 0s;
 &:hover{
  .vopr{
    display:inline;
  }
  box-shadow: 0 0 5px rgb(31, 44, 30);
 }
 width:150px;
 height: 50px;
 border-radius:30px;
 border:5px solid green;
 display:flex;
 justify-content:center;
 align-items:center;
 cursor:pointer;
		&__text {
      color:green;
      font-size: 20px;
      font-weight:900;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		}

}
#fil{
  display:none;
}
.body{
  width:100%;
  height:100%;
  padding-top: 100px;
}
.vopr{
  display:none;
  color:green;
}
  

</style>
