<template>
  <div class="blog">
    <v-row class="warning" v-if="locale === 'fr'">
      Salut! J'écris plus souvent en anglais qu'en français (pour l'instant en tout cas)! N'hésite pas à changer la langue de la page, en haut à droite.
    </v-row>
    <v-row v-if="pages?.length">
      <v-col cols="12" md="6" lg="6" xl="4" v-for="(page, idx) in pages" :key="idx">
        <v-card>
          <NuxtLink :to="localePath({ name: 'blog-slug', params: { slug: page.slug } })" class="blog-link">
            <v-img :src="page.cover" v-if="page.cover" height="200px">
              <v-card-title class="title text-white">{{ page.title }}</v-card-title>
            </v-img>
          </NuxtLink>
          <v-card-subtitle class="subtitle">
            {{ formatDate(page.date) }}
          </v-card-subtitle>
          <v-card-text class="text-subtitle">
            <p>{{ page.summary }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center">
        {{ $t('errors.no_results') }}
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const { data: pages } = await useAsyncData(`blog-pages-${locale.value}`, async () => {
  const result = await queryContent('blog')
    .where({ status: 'published', language: locale.value })
    .sort({ date: -1 })
    .limit(9)
    .find()
  return result
})

const formatDate = (date) => {
  if (!date) return ''
  return date.slice(0, 10)
}
</script>
<style scoped>
.title {
 background-color: rgba(0, 0, 0, 0.70);
 white-space: normal;
 word-break: break-word;
}
.subtitle {
  padding: 0.5rem 1rem 0;
}
.subtitle, .text-subtitle {
  color: rgba(0,0,0,.6) !important;
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
