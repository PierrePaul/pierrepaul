<template>
  <div class="blog article">
    <v-row v-if="article">
      <v-col cols="12" style="padding: 0">
        <v-img :src="article.cover" v-if="article.cover" alt="">
          <template v-if="article.pictureCopyrights">
            <a :href="article.pictureCopyrights" class="cover-copyright" v-if="article.pictureCopyrights" target="_blank">{{ article.pictureCopyrightsText }}</a>
          </template>
          <template v-else>
           <span class="cover-copyright">{{ article.pictureCopyrightsText }}</span>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <v-container v-if="article" class="pa-4" fluid>
      <v-row>
        <v-col cols="12">
          <div class="pa-4">
            <h1>{{ article.title }}</h1>
            <p style="font-size: 0.9rem;">{{ formatDate(article.date) }}</p>
            <ContentRenderer :value="article" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: article } = await useAsyncData(`blog-${route.params.slug}`, async () => {
  return await queryContent('blog')
    .where({ slug: route.params.slug })
    .findOne()
})

useHead({
  title: article.value?.title,
  meta: [
    {
      name: 'description',
      content: article.value?.summary
    },
    {
      property: 'og:title',
      content: article.value?.title
    },
    {
      property: 'og:description',
      content: article.value?.summary
    },
    {
      property: 'og:image',
      content: article.value?.cover
    }
  ]
})

const formatDate = (date) => {
  if (!date) return ''
  return date.slice(0, 10)
}
</script>
<style>
.cover-copyright {
  background-color: rgba(0, 0, 0, 0.70);
  bottom: 0px;
  color: whitesmoke;
  padding-right: 1rem;
  position: absolute;
  text-shadow: 1px 1px 1px #222729;
  text-align: right;
  width: 100%;
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
</style>
