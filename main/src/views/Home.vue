<template>
  <div class="home">
    <div>
      <router-link to="/app1/page2">App1 Page2</router-link> |
      <router-link to="/app2/page3">App2 Page3</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>
