<template>
  <!-- <button type="button" @click="flag = !flag">Toggle</button> -->
  <!-- <transition name="fade" mode="in-out">
<h2 v-if="flag" key="main">Hello world!</h2>
<h2 v-else key="secondary">Anohter hello!</h2>
</transition> -->
  <!-- <transition name="zoom">
  </transition> -->
  <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    :css="false"
  >
    <h2 v-if="flag">Hello</h2>
  </transition> -->
  <button @click="addItem">Add</button>
  <ul>
  <transition-group name="fade">
    <li v-for="(number,index) in numbers" :key="number" @click="removeItem(index)">
  {{number}}
  </li>
  </transition-group>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
      numbers:[1,2,3,4,5],
    };
  },
  methods: {
    addItem(){
      const newItem=Math.floor(Math.random()*100 +1);
      const index=Math.floor(Math.random()*this.numbers.length);
      this.numbers.splice(index,0,newItem);
    },
    removeItem(index){
      this.numbers.splice(index,1)
    }
    // beforeEnter(el) {
    //   console.log(" beforeEnter event", el);
    // },
    // enter(el, done) {
    //   console.log(" enter event", el);
    //   const animation=el.animate([{transform:"scale3d(0,0,0)"},{}],{
    //     duration:1000,
    //   })
    //   animation.onfinish=()=>{
    //     done();
    //   }
    // },
    // afterEnter(el) {
    //   console.log(" afterEnter event", el);
    // },
    // beforeLeave(el) {
    //   console.log(" beforeLeave event", el);
    // },
    // leave(el, done) {
    //   console.log(" leave event", el);
    //     const animation=el.animate([{},{transform:"scale3d(0,0,0)"}],{
    //     duration:1000,
    //   })
    //   animation.onfinish=()=>{
    //     done();
    //   }
    // },
  },
};
</script>

<style>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
