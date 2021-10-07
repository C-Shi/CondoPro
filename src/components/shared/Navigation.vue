<template>
    <v-navigation-drawer app clipped id="side-bar" mobile-breakpoint="768">
      <v-list nav>
        <v-list-item class="nav-item"
          v-for="item in items"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
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
  }
}
</script>
