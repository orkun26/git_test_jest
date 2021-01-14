<template>
  <div class="container">
    <Slide />
    <BodyMenu />
  </div>
</template>

<script>
import BodyMenu from "../components/BodyMenu.vue";
import Slide from "../components/Slide.vue";

export default {
  components: {
    Slide,
    BodyMenu,
  },
};
</script>

