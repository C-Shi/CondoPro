<template>
  <div>
    <v-breadcrumbs :items="breadCrumbs" v-if="$route.name != 'NotFound'" large>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          {{ item.text.toCapitalize() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: 'bread-crumb',
  computed: {
    breadCrumbs: function() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          href: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, [])

      breadcrumbs.unshift({
        path: '/',
        text: 'Application',
        href: "/"
      })
      return breadcrumbs;
    }
  }
}
</script>
