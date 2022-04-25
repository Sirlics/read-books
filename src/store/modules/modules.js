
export default {
   actions:{
   saveZip(ctx , files ){
      console.log()
      files.forEach(file => {
        if(!file.type.match('image')){
          return
        }
        const reader = new FileReader()
        reader.onload= e =>{
            let u = e.target.result
          ctx.commit('newFile',u)
        } 
         reader.readAsDataURL(file)
      });
   
    },
   },
   mutations:{
      newFile(state,files ){
        state.compBul = true 
        state.files.push(files) 
      }
   },
    state:{
      compBul:false,
      files:[],
    },
    getters:{
       compBule(state){
         return state.compBul
       },
       files(state){
         return state.files
       },
    }
}