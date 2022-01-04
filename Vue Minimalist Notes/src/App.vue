<template>
  <MainPage @new-note="newNote" :notes="notes" />
</template>

<script>
import MainPage from "./Pages/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },

};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: #333;
}
#app {
  height: 100vh;
  
}
</style>
