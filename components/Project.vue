<template>
  <v-card class="ma-2 pa-2">
    <v-row>
      <v-col :class="[ image ? 'with-image': '']">
        <template v-if="link">
          <a :href="link" target="_blank"><v-img :src="'/images/projects/' +  image" v-if="image" /></a>
        </template>
        <template v-else>
          <v-img :src="'/images/projects/' +  image" v-if="image" />
        </template>
        <v-card-title v-if="link"><a :href="link" target="_blank">{{ name }}</a></v-card-title>
        <v-card-title v-else>{{ name }}</v-card-title>
      </v-col>
    </v-row>
    <v-card-subtitle>{{ description }}</v-card-subtitle>
  </v-card>
</template>
<script setup>
const props = defineProps(['name', 'description', 'link', 'image'])
</script>
<style scoped>
.v-card {
  height: 950px;
  padding: 0;

  .v-card-subtitle {
    white-space: normal;
    word-break: break-word;
  }

  .v-card-title {
    padding-top: 10px;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 700;
      border-bottom: 2px solid transparent;
      transition: all 0.3s ease;

      &:hover {
        color: #1976D2; /* primary-like color */
        border-bottom: 2px solid #1976D2;
      }
    }
  }

  .col.with-image {
    padding: 3px;

    .v-card__title {
      padding-left: 23px;
    }
  }
}

</style>
