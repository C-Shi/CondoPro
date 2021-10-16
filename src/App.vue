<template>
  <v-app>
    <header-bar />
    <navigation v-if="$route.name != 'NotFound' && $vuetify.breakpoint.mdAndUp" app />
    <v-main>
      <bread-crumb />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import HeaderBar from '@/components/shared/HeaderBar.vue';
import Navigation from '@/components/shared/Navigation.vue';
import BreadCrumb from '@/components/shared/BreadCrumb.vue';
export default {
  name: 'App',
  components: {
    HeaderBar, Navigation, BreadCrumb
  },
  
};
</script>

<style lang="scss">
@import "@/styles/style.scss";
</style>
