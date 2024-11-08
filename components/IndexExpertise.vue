<template>
  <v-card class="ma-2">
    <v-row>
      <v-col cols="12" md-cols="6">
        <v-card-title class="text-h4">{{ title }}</v-card-title>
      </v-col>
      <v-col cols="12" md-cols="6">
        <v-avatar size="125" tile>
          <slot></slot>
        </v-avatar>
      </v-col>
    </v-row>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  component: true,
  props: ['title', 'subtitle']
}
</script>
<style scoped>
.v-card {
  height: 360px;
}
</style>
