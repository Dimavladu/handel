<template>
  <div class="slider_item">
    <img
      width="1920"
      :src="require(`../assets/slider/${itemData}.jpg`)"
      alt=""
    />
    <div class="item_content"></div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.slider_item {
  // width: 100%;
  position: relative;
  transition: 0.6s all ease;
  img {
    object-position: center 0;
  }
  .item_content {
    position: absolute;
    text-align: center;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 500px;
    &_title {
      z-index: 5;
      font-weight: 400;
      font-size: 72px;
      line-height: 88%;
      letter-spacing: -0.02em;
      color: #ffffff;
    }
    &_text {
      font-weight: 500;
      font-size: 16px;
      line-height: 130%;
      text-align: center;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
  }
}
</style>