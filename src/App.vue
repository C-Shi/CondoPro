<template>
  <v-app>
    <header-bar></header-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import HeaderBar from '@/components/shared/HeaderBar.vue'
export default {
  name: 'App',
  components: {
    HeaderBar
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import '@/styles/style.scss'
</style>
