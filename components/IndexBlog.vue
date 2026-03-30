<template>
  <v-card class="ma-2 blog">
    <NuxtLink :to="localePath({ name: 'blog-slug', params: { slug: article.slug } })" class="blog-link">
      <v-img :src="article.cover" v-if="article.cover" height="200px">
        <v-card-title class="title text-white">{{ article.title }}</v-card-title>
      </v-img>
    </NuxtLink>
    <v-card-subtitle class="subtitle">{{ formatDate(article.date) }}</v-card-subtitle>
    <v-card-text class="subtitle">{{ article.summary }}</v-card-text>
  </v-card>
</template>
<script setup>
const props = defineProps(['article'])
const localePath = useLocalePath()

const formatDate = (date) => {
  if (!date) return ''
  return date.slice(0, 10)
}
</script>
<style scoped>
.v-card {
  min-height: 380px;
  .title {
    background-color: rgba(0, 0, 0, 0.70);
    white-space: normal;
    word-break: break-word;
  }

  .subtitle {
    color: rgba(0,0,0,.6) !important;
    padding: 0.5rem 1rem 0;
  }
}
</style>
