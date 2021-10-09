<template>
    <v-navigation-drawer app clipped id="side-bar" 
      :permanent="$vuetify.breakpoint.mdAndUp"
      :width="width"
    >
      <v-list nav>
        <v-list-item class="nav-item"
          v-for="item in items"
          :key="item.title"
          :to="item.route"
        >
          <template v-if="$vuetify.breakpoint.lgAndUp">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content v-if="$vuetify.breakpoint.lgAndUp">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-tooltip right v-else>
            <template v-slot:activator="{ on, attrs }">
              <v-tab color="#FFF" v-bind="attrs" v-on="on">
                <v-icon>{{ item.icon }}</v-icon>
              </v-tab>
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script>
export default {
  name: 'Navigation',
  data: () => {
    return {
      items: [
        {
          title: 'Dashboard',
          route: '/',
          icon: 'mdi-view-dashboard'
        },
        {
          title: 'User',
          route: '/user',
          icon: 'mdi-account'
        },
        {
          title: 'Finance',
          route: '/finance',
          icon: 'mdi-currency-usd'
        },
        {
          title: 'Calendar',
          route: '/calendar',
          icon: 'mdi-calendar'
        },
        {
          title: 'Document',
          route: '/document',
          icon: 'mdi-file-document-multiple'
        }
      ]
    }
  },
  computed: {
    // a computed getter
    width: function () {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return 256;
      }
      return 120;
    }
  },
  
}
</script>
