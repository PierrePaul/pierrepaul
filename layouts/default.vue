<template>
  <v-app dark>
    <v-navigation-drawer
      app
      class="pt-4"
      color="black lighten-3"
    >
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
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
          to: '/expertise'
        },
        {
          icon: 'mdi-folder-star',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'mdi-human-handsup',
          title: 'Me',
          to: '/me'
        },
        {
          icon: 'mdi-at',
          title: 'Contact me',
          to: '/contact-me'
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
