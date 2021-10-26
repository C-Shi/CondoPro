<template>
  <v-card class="mx-auto" flat>
    <v-card-title class="section-header">Summary</v-card-title>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Total of {{ users.length }} members
    </v-card-title>

    <v-card-subtitle>
      in our condominum corporation
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="text-emphasis lighten-2"
        text
        @click="showActivity = !showActivity"
      >
        Recent Activities <v-icon>{{ showActivity ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showActivity">
        <v-divider></v-divider>

        <v-card-text>
          <v-list subheader>
            <v-subheader>Recent Activities</v-subheader>

            <v-list-item
              v-for="activity in activities"
              :key="activity.id"
            >
              <v-list-item-avatar>
                <v-img
                  :alt="activity.user.name"
                  :src="activity.user.avatar"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="`${activity.user.name} ${activity.description}`"></v-list-item-title>
                <v-list-item-subtitle v-text="activity.created_at"></v-list-item-subtitle>
              </v-list-item-content>

              
            </v-list-item>
          </v-list>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'UserSummary',
  props: {
    users: {
      type: Array,
      required: true
    },
    activities: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showActivity: false
    }
  }
}
</script>
