<template>
  <div class="wrapper">
    <div
      class="carousel"
      :style="{
        'margin-left': `${-1920 * sliderIndex}px`,
      }"
    >
      <slider-item v-for="item in sliderList" :key="item" :itemData="item" />
    </div>
    <div class="main">
      <div class="main_wrapper">
        <div class="main__title">Технологии</div>
        <div class="main__btn">Посмотреть каталог</div>
      </div>
    </div>
    <div class="info_wrapper">
      <div class="pagination">
        <dot-svg
          v-for="dot in sliderList"
          :key="dot"
          class="dot"
          :class="{ pagination_opacity: sliderIndex !== dot - 1 }"
          @click="sliderIndex = dot - 1"
        />
      </div>
      <button class="btn btn_prev" @click="prevIndex">
        <arrow-svg />
      </button>
      <button class="btn btn_next" @click="nextIndex">
        <arrow-svg :rotate="180" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import sliderItem from "./sliderItem.vue";
import arrowSvg from "./svg/slider/arrow.vue";
import dotSvg from "./svg/slider/fullDot.vue";

export default {
  components: { sliderItem, arrowSvg, dotSvg },
  setup() {
    const sliderIndex = ref(0);
    const sliderList = ref([1, 2, 3]);

    const prevIndex = () => {
      if (sliderIndex.value === 0) {
        sliderIndex.value = sliderList.value.length - 1;
        return;
      }
      sliderIndex.value--;
    };
    const nextIndex = () => {
      if (sliderIndex.value === sliderList.value.length - 1) {
        sliderIndex.value = 0;
        return;
      }
      sliderIndex.value++;
    };
    setInterval(() => nextIndex(), 3000);
    return { sliderIndex, sliderList, prevIndex, nextIndex };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 90px;
  position: relative;
  .carousel {
    transition: 0.6s all ease;
    display: flex;
    position: relative;
  }
  .main {
    position: absolute;
    z-index: 8;
    bottom: 120px;
    left: 30px;
    &_wrapper {
      height: 100%;
    }
    &__title {
      font-weight: 500;
      font-size: 56px;
      line-height: 66px;
      letter-spacing: 0.04em;
      color: #ffffff;
    }
    &__btn {
      margin-top: 35px;
      max-width: 160px;
      text-align: center;
      cursor: pointer;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      border: none;
      background: #a9a792;
      border-radius: 36px;
      padding: 20px 32px;
      font-size: 14px;
      color: #fff;
      transition: 0.4s all ease;
      &:hover {
        color: #34373f;
        background: #fff;
      }
    }
  }
  .info_wrapper {
    z-index: 2;
    position: absolute;
    bottom: 50px;
    right: 30px;
    display: flex;
  }
  .btn {
    z-index: 1;
    text-decoration: none;
    border: none;
    background-color: transparent;
  }
  .pagination {
    padding: 9px 20px;
    border-radius: 16px;
    display: flex;
    gap: 12px;
    z-index: 2;
    .dot {
      padding: 4px;
      transition: 0.6s all ease;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }
  }
}
.pagination_opacity {
  opacity: 0.2;
}
</style>