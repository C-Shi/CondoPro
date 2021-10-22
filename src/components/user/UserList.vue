<template>
    <v-card class="mx-auto" flat>
      <v-card-title class="section-header">
        User List
        <v-spacer></v-spacer>
        <v-text-field
          color="#FFFAFA"
          dark
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="10"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:[`item.avatar`]="{ item }">
          <v-avatar>
            <img :src="item.avatar" :alt="item.name">
          </v-avatar>
        </template>
      </v-data-table>
    </v-card>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    headers() {
      return [
        {
          text: 'Avatar',
          value: 'avatar',
          sortable: false,
          filterable: false,
        },
        {
          text: 'Full Name',
          value: 'name'
        },
        {
          text: 'Email',
          value: 'email',
          sortable: false,
        },
        {
          text: 'Phone Number',
          value: 'phone'
        },
        {
          text: 'Address/Unit',
          value: 'unit'
        }
      ]
    }
  }
}
</script>
