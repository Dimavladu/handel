<template>
  <div class="nav_bar">
    <div class="nav_bar_wrapper">
      <div class="content">
        <div class="content__logo">
          <burger-svg />
          <img src="../assets/logo.jpg" alt="Logo" />
        </div>
        <div class="content__navigation">
          <div class="nav_element">Каталог</div>
          <div class="nav_element">Проекты</div>
          <div class="nav_element">Wood</div>
          <div class="nav_element">Дизайнерам</div>
          <div class="nav_element">О нас</div>
          <div class="nav_element">Контакты</div>
        </div>
        <div class="content__contacts">
          <div class="contacts">
            <div class="contact_icon"><phone-svg /></div>
            <div class="contact_icon"><whatsapp-svg /></div>
            <div class="contact_icon search"><search-svg /></div>
          </div>
          <button class="call_btn">Заказать звонок</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import burgerSvg from "./svg/navbar/burger.vue";
import phoneSvg from "./svg/navbar/phone.vue";
import whatsappSvg from "./svg/whatsApp.vue";
import searchSvg from "./svg/navbar/search.vue";

export default {
  components: { burgerSvg, phoneSvg, whatsappSvg, searchSvg },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$nav-color: #34373f;
$icon-bg: #3f434c;
$white: #fff;

.nav_bar {
  z-index: 10;
  height: 92px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  color: $white;
  &_wrapper {
    background: $nav-color;
    height: 100%;
    width: 100%;
    .content {
      padding: 0 30px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__logo {
        display: flex;
        align-items: center;
        gap: 30px;
      }
      &__navigation {
        display: flex;
        align-items: center;
        gap: 40px;
        .nav_element {
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 700;
          font-size: 13px;
          line-height: 15px;
          letter-spacing: 0.075em;
          transition: 0.3s all ease;
          &:hover {
            opacity: 0.6;
          }
        }
      }
      &__contacts {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 35px;
        .contacts {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 23px;
          .contact_icon {
            cursor: pointer;
            background: $icon-bg;
            padding: 7px;
            border-radius: 5px;
          }
          .search {
            background: none;
          }
        }
        .call_btn {
          cursor: pointer;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          border: none;
          background: #a9a792;
          border-radius: 40px;
          padding: 13px 21px;
          color: $white;
          transition: 0.4s all ease;
          &:hover {
            color: $icon-bg;
            background: $white;
          }
        }
      }
    }
  }
}
</style>