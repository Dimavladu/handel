<template>
  <div class="main">
    <div class="main_info">
      <div class="main__header">Каталог</div>
      <div class="main__subinfo">
        <div class="about">Мы создаем технологии для комфорта вашей жизни</div>
        <div class="all_catalog">Весь каталог</div>
      </div>
    </div>
    <div class="main__cards">
      <div class="card" v-for="(card, i) in cardsData" :key="card">
        <div class="card__wrapper">
          <img :src="require(`../assets/cards/${i + 1}.jpg`)" alt="Card" />
          <div class="card__text">
            {{ card }}
          </div>
          <div class="more_info">
            Подробнее
            <arrow-svg :rotate="180" />
          </div>
        </div>
      </div>
    </div>
    <div class="main__divider"></div>
    <div class="main__about">
      <div class="about">
        <div class="about__logo"><img src="../assets/logo.jpg" alt="" /></div>
        <div class="about__subtext">
          Компания работает и успешно реализует проекты по всему ЦФО. Имеет свою
          службу логистики и осуществляет техконтроль на каждом этапе. Компания
          работает и успешно реализует проекты по всему ЦФО.
        </div>
        <div class="about__subtext">
          Имеет свою службу логистики и осуществляет техконтроль на каждом
          этапе.
        </div>
        <div class="about__btn">Подробнее о компании</div>
      </div>
      <div class="main_video">
        <img src="../assets/video.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

import arrowSvg from "./svg/slider/arrow.vue";
export default {
  components: { arrowSvg },
  setup() {
    const cardsData = ref([
      "Индивидуальные проекты",
      "Кухни",
      "Спальни",
      "Гостиные",
      "Гардеробные",
      "Шкафы",
    ]);
    return { cardsData };
  },
};
</script>

<style lang="scss" scoped>
.main {
  &_info {
    padding: 80px 30px 50px 30px;
  }
  &__header {
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.015em;
    color: #ffffff;
  }
  &__subinfo {
    margin-top: 30px;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.015em;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .about {
    }
    .all_catalog {
      line-height: 24px;
      letter-spacing: 0.04em;
      text-decoration-line: underline;
      color: #ffffff;
      cursor: pointer;
      transition: 0.3s all ease;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    .card {
      background: linear-gradient(
        180deg,
        rgba(63, 67, 76, 0) 0%,
        rgba(63, 67, 76, 0.9) 84.9%
      );
      width: 49.5%;
      &__wrapper {
        width: 100%;
        position: relative;
        img {
          width: 100%;
          transition: 0.3s all ease;
        }
      }
      &__text {
        position: absolute;
        width: 100%;
        bottom: 20px;
        left: 50%;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #ffffff;
        transform: translate(-50%, -50%);
        transition: 0.5s all ease;
      }
      .more_info {
        position: absolute;
        transform: translate(-40%, 50%);
        bottom: 40%;
        left: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 10px;
        display: none;
        transition: 1s all ease;
        display: flex;
        opacity: 0;
      }
      &:before {
        z-index: 5;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
      }
      &:hover {
        img {
          opacity: 0.3;
        }
        .card__text {
          bottom: 50%;
          transform: translate(-50%, 50%);
        }
        .more_info {
          opacity: 1;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
  &__divider {
    position: relative;
    background: url("../assets/bg1.png");
    width: 100%;
    height: 205px;
    margin: 75px 0;
    display: flex;
  }
  &__about {
    display: flex;
    padding: 30px;
  }
  .about {
    &__logo {
    }
    &__subtext {
      margin-top: 30px;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      color: #ffffff;
    }
    &__btn {
      cursor: pointer;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      border: none;
      background: #a9a792;
      border-radius: 40px;
      padding: 20px 32px;
      text-align: center;
      color: #fff;
      transition: 0.4s all ease;
      margin-top: 60px;
      width: 230px;
      &:hover {
        color: #34373f;
        background: #fff;
      }
    }
  }
  &_video {
    img {
    }
  }
}
</style>