<template>
  <v-card class="ma-2 pa-2">
    <v-row>
      <v-col>
        <v-card-title>{{ name }}</v-card-title>
      </v-col>
    </v-row>
    <v-card-subtitle>{{ description }}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  component: true,
  props: ['name', 'description']
}
</script>
