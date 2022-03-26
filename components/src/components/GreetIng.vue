<template>
    <h2 v-if="age>25">{{msg}}</h2>
    <h2 v-else>This message will apear once the age above 25</h2>
</template>

<script>
export default {
  name:'GreetIng',
  data(){
    return{
    msg:'Hello world'
    }
  },
  props:[
    "age"
  ]
} 
</script>
<!-- to scss you have first to install node-sass and sass-loader -->
<style scoped lang="scss">
   h2{
   color: red;
   &:hover{
   color: black;
   }
   }
</style>
