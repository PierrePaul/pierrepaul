<template>
  <div class="blog article">
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
          <p style="font-size: 0.9rem;">{{ article.date|formatDate }}</p>
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
    return {
      article
    }
  },
  filters: {
    formatDate: function(date) {
      const dateFormatted = date.slice(0, 10)
      return dateFormatted
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.summary
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.article.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.summary
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.article.cover
        }
      ]
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
.v-application .article ul {
  padding: 0 0 1em 1em;
}
.v-application .article a:hover {
  color: #ff3a00;
}
.article img {
  max-width: 100%;
}
</style>
