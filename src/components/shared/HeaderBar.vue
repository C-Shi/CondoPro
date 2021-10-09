<template>
  <v-app-bar
      id="app-bar"
      app
      color="primary"
      flat
      clipped-left
      :extension-height="$vuetify.breakpoint.smAndDown ? 48 : 0"
    >
      <div id="logo">
        <h2>CONDO PRO</h2>
      </div>
      <v-spacer></v-spacer>


      <v-menu bottom
      :offset-y="true">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
            id="avatar"
          >
             <v-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-avatar>
          </v-btn>
        </template>
        <v-list color="#1976d2">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>
              <v-btn @click="item.action" text dark>
                <v-icon>{{item.icon}}</v-icon> &nbsp;{{ item.title }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
     
     <template v-slot:extension >
        <v-tabs align-with-title dark>
          <v-tooltip bottom v-for="tab in modules" :key="tab.title">
            <template v-slot:activator="{ on, attrs }">
              <v-tab :to="tab.route" color="#FFF" v-bind="attrs" v-on="on">
                <v-icon>{{ tab.icon }}</v-icon>
              </v-tab>
            </template>
            <span>{{ tab.title }}</span>
          </v-tooltip>
        </v-tabs>
     </template>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'HeaderBar',
    data: function(){
      return {
        items: [
          {
            title: 'Profile',
            icon: 'mdi-account',
            action: () => {
              console.log('profile')
              console.log(this.$vuetify.breakpoint)
            }
          },
          {
            title: 'Logout',
            icon: 'mdi-logout',
            action: () => {
              console.log('logout')
            }
          },
        ],
        modules: [
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