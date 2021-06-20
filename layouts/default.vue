<template>
  <v-app dark>
    <v-navigation-drawer
      app
      color="lighten-3"
    >
      <div class="brand">Pierre Paul Lefebvre</div>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            class="nav-links"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div class="language-switcher">
      <nuxt-link :to="switchLocalePath('en')" v-if="$i18n.locale !== 'en'">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')" v-if="$i18n.locale !== 'fr'">Français</nuxt-link>
    </div>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Introduction',
          to: '/'
        },
        {
          icon: 'mdi-xml',
          title: 'Expertise',
          to: '/#expertise'
        },
        {
          icon: 'mdi-folder-star',
          title: 'Projects',
          to: '/#projects'
        },
        {
          icon: 'mdi-human-handsup',
          title: 'Me',
          to: '/#me'
        },
        {
          icon: 'mdi-at',
          title: 'Contact me',
          to: '/#contact'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'PierrePaul'
    }
  }
}
</script>

<style>
.theme--light.v-list-item.nav-links, .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled), .theme--light.v-icon {
  color: whitesmoke !important;
}
.language-switcher {
  position: absolute;
  z-index: 999;
  background-color: rgba(34,39,41,0.75);
  border-radius: 5px;
  padding: 0.5em;
  top: 50px;
  right: 50px;
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
.container {
  background-image: url('/images/texture.png')
}
nav {
  background: #222729 url('/images/overlay.png') !important;
  box-shadow: inset -0.25em 0 0.25em 0 rgba(0,0,0,0.125);
  text-align: right;
}
nav .v-list-item {
  padding: 0.5em;
}
nav .v-list-item__title {
  font-size: 1.2em !important;
}
body {
  font-family: 'Ubuntu';
  font-size: 1.1em;
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
</style>
