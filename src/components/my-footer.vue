<template>
  <div class="footer">
    <div class="nav">
      <div class="nav_element">Каталог</div>
      <div class="nav_element">Бренд</div>
      <div class="nav_element">Прозводство</div>
      <div class="nav_element">Проекты</div>
      <div class="nav_element">Руководство</div>
      <div class="nav_element">Реквизиты</div>
    </div>
    <div class="info">
      <div class="info_links">
        <div class="info_link">
          <phone-svg />
          <div class="link_phone">+7 (4942) 47-26-60</div>
        </div>
        <div class="info_link">
          <mail-svg />
          <div class="link_mail">bespalov@handelpro.ru</div>
        </div>
        <div class="info_link">
          <location-svg />
          <div class="link_location">
            Центр дизайна ARTPLAY, ул. Нижняя Сыромятническая, д. 10, строение
            2, этаж 2
          </div>
        </div>
      </div>
      <div class="contact_links">
        <div class="contact_link"><instagram-svg /></div>
        <div class="contact_link"><telegram-svg /></div>
        <div class="contact_link"><whatsapp-svg /></div>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright__politic">
        <div class="politic_el">
          2022 Ⓒ Все права защищены. Сайт компании HANDEL.
        </div>
        <a href="#" class="politic_el">Политика</a>
      </div>
      <div class="copyright__createdBy">Сделано АRTBYTE</div>
    </div>
  </div>
</template>

<script>
import phoneSvg from "./svg/footer/phone.vue";
import mailSvg from "./svg/footer/mail.vue";
import locationSvg from "./svg/footer/location.vue";
import instagramSvg from "./svg/footer/instagram.vue";
import telegramSvg from "./svg/footer/telegram.vue";
import whatsappSvg from "./svg/footer/whatsapp.vue";
export default {
  components: {
    phoneSvg,
    mailSvg,
    locationSvg,
    instagramSvg,
    telegramSvg,
    whatsappSvg,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$white: #fff;
$bg: #1f1a1b;
.footer {
  color: $white;
  background: $bg;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 30px;
    gap: 40px;
    background: #34373f;
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
  .info {
    position: relative;
    padding: 40px 30px;
    display: flex;
    justify-content: space-between;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 3%;
      width: 94%;
      height: 1px;
      background: #3f434c;
    }
    &_links {
      display: flex;
      gap: 20px;
    }
    &_link {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.04em;
      &_phone {
        font-weight: 700;
      }
      &_mail {
        font-weight: 500;
      }
      &_location {
        font-weight: 400;
      }
    }
  }
  .contact_links {
    display: flex;
    gap: 20px;
    .contact_link {
      background: #474747;
      border-radius: 5px;
      padding: 12px;
      display: flex;
      justify-content: space-around;
    }
  }
  .copyright {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
    opacity: 0.95;
    padding: 34px 30px;
    &__politic {
      display: flex;
      gap: 100px;
      a {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        transition: 0.3s all ease;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    &__createdBy {
    }
  }
}
</style>