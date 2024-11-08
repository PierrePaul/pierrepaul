<template>
  <div class="blog">
    <v-row v-if="pages.length">
      <v-col cols="12" md="6" lg="6" xl="4" v-for="(page, idx) in pages" :key="idx">
        <v-card>
          <nuxt-link :to="{name: 'blog-slug___' + $i18n.locale, params: {slug: page.slug}}" class="blog-link">
          <v-img :src="page.cover" v-if="page.cover" height="200px">
            <v-card-title class="title">{{ page.title }}</v-card-title>
          </v-img>
          </nuxt-link>
          <v-card-subtitle>
            {{ page.date|formatDate }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <p>{{ page.summary }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center">
        {{$t('errors.no_results')}}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, app }) {
    const pages = await $content('blog', {deep: true}).where({ 'status': 'published', 'language': app.i18n.locale }).sortBy('date', 'desc').limit(9).fetch()
    return {
      pages
    }
  },
  filters: {
    formatDate: function(date) {
      const dateFormatted = date.slice(0, 10)
      return dateFormatted
    }
  }
}
</script>
<style scoped>
.title {
 background-color: rgba(0, 0, 0, 0.70);
}
.warning {
  padding: 1.2rem;
  background-color: #ffe589 !important;
}
@media (width < 1265px) {
  .warning {
    padding: 1.2rem 6rem;
  }
}
</style>
