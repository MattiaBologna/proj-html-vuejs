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
@use './components/style/general'
</style>