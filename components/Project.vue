<template>
  <v-card class="ma-2 pa-2">
    <v-row>
      <v-col :class="[ image ? 'with-image': '']">
        <template v-if="link">
          <a :href="link" target="_blank"><v-img heigth="100" :src="'/images/projects/' +  image" v-if="image" /></a>
        </template>
        <template v-else>
          <v-img heigth="100" :src="'/images/projects/' +  image" v-if="image" />
        </template>
        <v-card-title v-if="link"><a :href="link" target="_blank">{{ name }}</a></v-card-title>
        <v-card-title v-else>{{ name }}</v-card-title>
      </v-col>
    </v-row>
    <v-card-subtitle>{{ description }}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  component: true,
  props: ['name', 'description', 'link', 'image']
}
</script>
<style scoped>
.v-card {
  height: 950px;

  .col.with-image {
    padding: 3px;

    .v-card__title {
      padding-left: 23px;
    }
  }
}

</style>
