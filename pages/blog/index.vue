<template>
  <div>
    <v-row>
      <v-col cols="6" v-for="(page, idx) in pages" :key="idx">
        <v-card>
          <v-img :src="page.cover" v-if="page.cover" height="200px">
            <v-card-title>{{ page.title }}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <p>{{ page.summary }}</p>
            <nuxt-link :to="page.slug">Read more</nuxt-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content }) {
    const pages = await $content('blog', {deep: true}).where({ 'status': 'published' }).fetch()
    console.log(pages)
    return {
      pages
    }
  }
}
</script>
