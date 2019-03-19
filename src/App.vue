<template>
  <div id="app">
    <router-view />
    <ConfirmDialog />
    <BackgroundMusic :file="file" loop playState="play" autoplay/>
  </div>
</template>

<script>
import ConfirmDialog from "./components/ConfirmDialog";
import BackgroundMusic from "./components/BackgroundMusic";

export default {
  data: () => ({
    file: "./audio/1530112183.mp3"
  }),

  components: {
    ConfirmDialog,
    BackgroundMusic
  }
};
</script>

<style lang="scss">

@import url(./assets/css/fonts.css);

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Podkova" !important;
  box-sizing: border-box !important;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  background-color: #085ba7;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding-top: 1.5%;
  position: absolute;
}

.mainbox {
  position: absolute;
  height: 80vh;
  width: 80%;
  background-color: #085ba7;
  top: 15%;
  left: 10%;
}
</style>
