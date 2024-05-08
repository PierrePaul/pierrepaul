<template>
  <v-app dark>
    <v-btn
      dark
      @click.stop="drawer = !drawer"
      class="mobile-drawer d-lg-none"
    >
      <v-icon v-text="'mdi-menu'"></v-icon>
    </v-btn>
    <v-navigation-drawer
      app
      color="lighten-3"
      width="325"
      v-model="drawer"
    >
      <div class="brand">Pierre Paul</div>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="{name: item.to + '___' + $i18n.locale, hash: item.hash}"
            router
            class="nav-links"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="$t(item.title)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div class="language-switcher" v-if="availableLocales.length > 0">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>

    </div>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
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
      ],
      right: true,
      rightDrawer: false,
      title: 'PierrePaul'
    }
  },
  computed: {
    mini() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    availableLocales () {
      if (this.$route.name === 'blog-slug___en' || this.$route.name === 'blog-slug___fr') {
        return [];
      }
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted() {
    this.drawer = !this.mini;
  }
}
</script>

<style>
nav .theme--light.v-list-item.nav-links, nav .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled), nav .theme--light.v-icon {
  color: whitesmoke !important;
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
h2 {
  color: #666;
  font-weight: 200;
  font-size: 2em;
}
.brand {
  font-size: 1.3em;
  font-weight: 700;
  text-align: center;
  width: 100%;
  padding: 1em;
  color: whitesmoke;
}
.blog .v-card__title {
  color: whitesmoke;
  font-weight: bold;
  font-size: 1.7em;
  text-shadow: #c3c3c3 1px 0 10px;
}
a.blog-link {
  text-decoration: none;
}
h1, h2, h3 {
  padding: 0.5em 0 0.5em 0;
}
ol {
  margin-bottom: 1rem;
  border: dotted #666;
  padding: 0.5rem;
  li {
    &::marker {
      color: #666;
      font-size: 1rem;
    }
  }
}
.mobile-drawer {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 999;
}
.theme--light.v-application code {
  background-color: #f5f2f0;
}
</style>
