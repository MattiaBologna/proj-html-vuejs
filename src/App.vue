<script>
import HeadApp from './components/HeadApp.vue';
import MainApp from './components/MainApp.vue';
import FootApp from './components/FootApp.vue';

export default {
  components: {
    HeadApp,
    MainApp,
    FootApp
  }
}
</script>

<template>

  <HeadApp />

  <MainApp />

  <FootApp />

</template>


<style lang="scss">
@use './components/style/general';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}
</style>
