<template>
  <v-app>
    
    <v-app-bar
      v-if="$route.name != 'NotFound'"
      app
      color="primary"
      dark
      clipped-left
    >
      <v-spacer></v-spacer>

      <v-btn
        href="#"
        target="_blank"
        text
      >
        <span class="mr-2">User Info</span>
      </v-btn>
    </v-app-bar>
    
    <navigation v-if="$route.name != 'NotFound'" app></navigation>
  
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Navigation from '@/components/shared/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import "@/styles/style.scss";
</style>
