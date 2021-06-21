<template>
  <div>
    <v-row>
      <v-col cols="6" v-for="(page, idx) in pages" :key="idx">
        <v-card>
          <nuxt-link :to="page.slug" class="blog-link">
          <v-img :src="page.cover" v-if="page.cover" height="200px">
            <v-card-title>{{ page.title }}</v-card-title>
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
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const pages = await $content('blog', {deep: true}).where({ 'status': 'published' }).sortBy('date', 'desc').limit(9).fetch()
    return {
      pages
    }
  },
  filters: {
    formatDate: function(date) {
      const jsDate = new Date(date);
      const year = jsDate.getFullYear();
      const month = jsDate.getMonth();
      const day = jsDate.getDay();
      return `${year}-${month.toString().padStart(2, 0)}-${day.toString().padStart(2, 0)}`
    }
  }
}
</script>
