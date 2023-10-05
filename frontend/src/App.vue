<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "Didot";
  src: url("@/assets/fonts/Didot_Medium.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Didot Italic";
  src: url("@/assets/fonts/Didot LT Std Italic.otf") format("otf");
  font-weight: normal;
  font-style: italic;
}

#app {
  /* font-family: var(--font-family); */
  font-family: system-ui;
  /* background-color: antiquewhite; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

html,
body {
  margin: 0;
}
</style>
