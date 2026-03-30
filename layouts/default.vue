<template>
  <v-app>
    <v-btn
      icon="mdi-menu"
      @click.stop="drawer = !drawer"
      class="mobile-drawer d-lg-none"
    ></v-btn>
    <v-navigation-drawer
      color="lighten-3"
      width="260"
      v-model="drawer"
    >
      <div class="brand">
        <NuxtLink to="/">Pierre Paul</NuxtLink>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath({ name: item.to, hash: item.hash })"
          :prepend-icon="item.icon"
          :title="$t(item.title)"
          class="nav-links"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="language-switcher" v-if="availableLocales.length > 0">
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</NuxtLink>
    </div>
    <v-main>
      <v-container fluid :class="{ 'pa-0': isBlogArticle }">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const route = useRoute()
const display = import.meta.client ? useDisplay() : { mdAndDown: ref(false) }

const isBlogArticle = computed(() => route.name?.toString().startsWith('blog-slug'))

const drawer = ref(false)
const items = [
  {
    icon: 'mdi-home',
    title: 'nav.introduction',
    to: 'index',
    hash: "#top"
  },
  {
    icon: 'mdi-xml',
    title: 'nav.expertise',
    to: 'index',
    hash: '#expertise'
  },
  {
    icon: 'mdi-folder-star',
    title: 'nav.projects',
    to: 'index',
    hash: '#projects',
  },
  {
    icon: 'mdi-human-handsup',
    title: 'nav.me',
    to: 'index',
    hash: '#me'
  },
  {
    icon: 'mdi-at',
    title: 'nav.contact',
    to: 'index',
    hash: '#contact',
  },
  {
    icon: 'mdi-book-outline',
    title: 'nav.blog',
    to: 'blog'
  },
]

const availableLocales = computed(() => {
  if (route.name?.toString().startsWith('blog-slug')) {
    return []
  }
  return locales.value.filter(i => i.code !== locale.value)
})

onMounted(() => {
  if (display && display.mdAndDown) {
    drawer.value = !display.mdAndDown.value
  }
})
</script>

<style lang="scss">
.mobile-drawer {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 999;
}
.v-navigation-drawer,
.v-navigation-drawer .v-list-item,
.v-navigation-drawer .v-list-item .v-icon,
.v-navigation-drawer .brand,
.v-navigation-drawer .brand a {
  color: white !important;
}
.v-navigation-drawer .v-list-item--active .v-list-item__overlay {
  background: transparent;
}
.language-switcher {
  position: fixed;
  z-index: 999;
  background-color: rgba(34,39,41,0.75);
  border-radius: 5px;
  padding: 0.5em;
  top: 10px;
  right: 10px;
}
.language-switcher a {
  font-size: 1.2em;
  text-decoration: none;
  color: white !important;
  border-bottom: dotted 1px rgba(128,128,128,0.5);
}
.language-switcher a:hover {
  text-decoration: underline;
}
html {
  background-color: #f5fafa;
}
nav {
  background: #222729 url('/images/overlay.png') !important;
  box-shadow: inset -0.25em 0 0.25em 0 rgba(0,0,0,0.125);
  text-align: right;
}
nav .v-list-item {
  padding: 0.5em 2em 0.5em 1.5em;
}
nav .v-list-item__title {
  font-size: 1.2em !important;
}
body {
  font-family: 'Ubuntu';
  font-size: 1.0em;
}
.v-application {
  font-family: 'Ubuntu';
}
h1, h2, h3, .text-h1, .text-h2, .text-h3 {
  font-family: 'Roboto', sans-serif !important;
  padding: 0.5em 0 0.5em 0;
}
h2, .text-h2 {
  color: #666;
  font-weight: 200;
  font-size: 2em;
}
a.blog-link {
  text-decoration: none;
}
.blog .title {
  color: whitesmoke;
  font-weight: bold;
  font-size: 1.7em;
  text-shadow: #c3c3c3 1px 0 10px;
}
.brand {
  font-size: 1.3em;
  font-weight: 700;
  text-align: center;
  width: 100%;
  padding: 1em;
}
img {
  max-width: 100%;
  height: auto;
}
ol, ul {
  padding-left: 2rem;
}

ol {
  margin-bottom: 1rem;
  border: dotted #666;
  padding: 0.5rem 2rem;
  li {
    &::marker {
      color: #666;
      font-size: 1rem;
    }
  }
}
.theme--light.v-application code {
  background-color: #f5f2f0;
}
.theme--light.v-application .nuxt-content-highlight pre,
.github-light {
  background-color: rgb(34 39 41 / 0.07);
  padding: 1em;
  border-radius: 5px;
  overflow-x: auto;
  margin-bottom: 1em;
}
.theme--light.v-application .nuxt-content-highlight pre code {
  padding: 0;
  background-color: transparent;
}
</style>
