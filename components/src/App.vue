<template>
<h3>Hey!</h3>
    <greet-ing :age="age"/>
    <us-er :age="age" @age-dec="age--" @age-inc="updateAge"/>
</template>

<script>
import GreetIng from './components/GreetIng.vue';
import UsEr from './components/UsEr.vue';

export default {
  name:'App',
  components:{
    GreetIng,
    UsEr
  },
  data(){
    return{
      age:20,
    }
  },
  methods:{
    updateAge(num){
      this.age+=num;
    }
  }
}
</script>


