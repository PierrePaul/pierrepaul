<template>
  <div class="article">
    <v-row>
      <v-col cols="12" style="padding: 0">
        <v-img :src="article.cover" v-if="article.cover">
          <a :href="article.pictureCopyrights" class="cover-copyright" v-if="article.pictureCopyrights" target="_blank">{{ article.pictureCopyrightsText }}</a>
        </v-img>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>{{ article.title }}</h1>
          <nuxt-content :document="article" />
        </v-col>
      </v-row>

    </v-container>
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
<style>
.cover-copyright {
  position: absolute;
  color: whitesmoke;
  bottom: 10px;
  right: 10px;
}
a.cover-copyright {
  color: whitesmoke !important;
}
.v-application .article {
  font-size: 1.3em;
  font-family: 'Cardo';
}
.v-application .article a {
  border-bottom: 1px solid #ff3a00;
  text-decoration: none;
  color: black;
  transition: all ease-out 0.2s;
}
.v-application .article a:hover {
  color: #ff3a00;
}
.article img {
  max-width: 100%;
}
</style>
