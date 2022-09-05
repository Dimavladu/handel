<template>
  <div>
    <nav-bar />
    <my-slider />
    <my-main />
    <my-footer />
  </div>
</template>

<script>
import navBar from "../components/navbar.vue";
import mySlider from "../components/slider.vue";
import myMain from "../components/main.vue";
import myFooter from "../components/my-footer.vue";

export default {
  components: { navBar, mySlider, myMain, myFooter },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>