<template>
<form-com>
    <div class="help">
      <p>This is some help text.</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div>
</form-com>
<form-com> 
    <div class="help">
      <p>This is many help text.</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="name" />
      <input type="password" placeholder="message" />
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div>
</form-com>

</template>

<script>
import FormCom from './components/FormCom.vue'
export default {
  name: "App",
  components:{
    FormCom
  }
};
</script>

<style></style>
