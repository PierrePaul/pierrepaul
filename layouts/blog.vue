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
        {
          icon: 'mdi-at',
          title: 'Blog',
          to: '/blog/'
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
