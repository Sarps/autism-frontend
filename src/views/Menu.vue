<template>
  <div class="container">
    <div class="flip">
      <h2>FLIP-O-MATCH</h2>
      <p>PICK THE MATCHING CARD</p>
    </div>
    <router-link to="level1" class="button">Play</router-link>
    <router-link to="login" class="button">Login</router-link>
    <router-link to="exit" class="button">Exit</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-image: url("../assets/blurry-bg.png");
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  background-size: cover;
}

button,
.button {
  font-size: 15px;
  border: none;
  color: blue;
  border: solid 1px #00a9de;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  font-size: 40px;
  text-align: center;
  font-weight: bolder;
  color: white;
  padding-left: 50px;
  padding-right: 50px;
  text-decoration: none;
  text-transform: uppercase;
}

.flip {
  background-color: #bcde00;
  border-radius: 50px;
  text-align: center;
  position: relative;
  margin-bottom: 25px;
  padding: 10px 50px;

  h2 {
    color: white;
    font-size: 50px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
