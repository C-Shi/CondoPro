<template>
  <div class="user">
    <v-container fluid>
      <v-row>
        <v-col lg="8" cols="12">
          <user-list :users="users"></user-list>
        </v-col>
        <v-col lg="4" cols="12">
          <user-summary :users="users" :activities="activities"></user-summary>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import UserService from '@/service/user.service.js';
import UserList from '@/components/user/UserList';
import UserSummary from '@/components/user/UserSummary';


export default {
  name: 'User',
  components: {
    UserList, UserSummary
  },
  data() {
    return {
      show: false,
      users: [],
      activities: [],
    }
  },
  mounted: async function ()  {
    this.users = await UserService.getUsers()
    this.activities = await UserService.getUserActivities()
  },
}
</script>
