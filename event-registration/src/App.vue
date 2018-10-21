<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Signin from "./components/Signin";
export default {
  name: "app",
  components: {
    Signin
  }
};
</script>
<style lang="scss">

</style>
