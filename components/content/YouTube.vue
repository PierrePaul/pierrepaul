<template>
  <div class="video-wrapper">
    <iframe
      :src="embedUrl"
      frameborder="0"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String
})

const embedUrl = `https://www.youtube-nocookie.com/embed/${props.id}?rel=0&modestbranding=1`
</script>

<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
