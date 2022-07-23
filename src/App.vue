<template>
  <HeaderPage />

  <router-view></router-view>
</template>


<script>
import HeaderPage from "./components/HeaderPage.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
  },
};
</script>

<style>
</style>
