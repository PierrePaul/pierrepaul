<template>
  <v-card class="ma-2 blog">
    <nuxt-link :to="{name: 'blog-slug___' + $i18n.locale, params: {slug: article.slug}}" class="blog-link">
      <v-img :src="article.cover" v-if="article.cover" height="200px">
        <v-card-title class="title">{{ article.title }}</v-card-title>
      </v-img>
    </nuxt-link>
    <v-card-subtitle>{{ article.date|formatDate }}</v-card-subtitle>
    <v-card-subtitle>{{ article.summary }}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  component: true,
  props: ['article'],
  filters: {
    formatDate: function(date) {
      const dateFormatted = date.slice(0, 10)
      return dateFormatted
    }
  },
}
</script>
<style scoped>
.v-card {
  min-height: 380px;

  .title {
    background-color: rgba(0, 0, 0, 0.70);
    word-break: break-word;
  }
}
</style>
