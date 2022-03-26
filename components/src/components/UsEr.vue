<template>
  <p>The User is {{age}} years old</p>
  <button @click="incrementAge">inc</button>
  <button @click="decrementAge">dec</button>
  <p>{{ageDoubles}}</p>
</template>

<script>
export default {
    name:"UsEr",
    props:{
      age:{
          type: [Number,String],
          required:true
      }  
    },
    emits:[
        'age-inc',
        'age-dec'
    ],
    methods:{
        incrementAge(){
            this.$emit('age-inc',3)
        },
        decrementAge(){
            this.$emit('age-dec')
        }
    },
    computed:{
        ageDoubles(){
            return  this.age *2
        }
    }
}
</script>

<style>

</style>