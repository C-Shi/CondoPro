<template>
  <v-app>
    <header-bar></header-bar>
    <navigation v-if="$route.name != 'NotFound'" app></navigation>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import HeaderBar from '@/components/shared/HeaderBar.vue';
import Navigation from '@/components/shared/Navigation.vue';
export default {
  name: 'App',
  components: {
    HeaderBar, Navigation
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "@/styles/style.scss";
</style>
