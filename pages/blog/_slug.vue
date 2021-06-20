<template>
  <div>
    <v-row>
      <v-col cols="12">
        <nuxt-content :document="article" />
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', {deep: true}).where({'slug': params.slug}).fetch()
    const article = articles[0]
    console.log(article)
    return {
      article
    }
  }
}
</script>
