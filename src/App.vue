<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");

$nav-color: #34373f;
$icon-bg: #3f434c;

body {
  margin: 0;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  background-color: #3f434c;
}
svg {
  cursor: pointer;
  &:hover {
    path {
      transition: 0.3s all ease;
      opacity: 0.5;
    }
  }
}
</style>
