<template>

<select v-model="componentName" name="" id="">
<option value="AboutComponent">About</option>
<option value="HomeComponent">Home</option>

</select>

<keep-alive>
<component :is="componentName" ></component>
</keep-alive>
</template>

<script>
import AboutComponent from './components/AboutComponent.vue';
import HomeComponent from './components/HomeComponent.vue'
export default {
  name: 'App',
  components:{
    AboutComponent,
    HomeComponent
  },
  data(){
    return {
       componentName:"HomeComponent"
       }
  }

  }
</script>

<style>

</style>
