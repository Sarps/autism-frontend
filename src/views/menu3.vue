<template>
  <div class="container">
    <div class="flip">
      <h2>FLIP-O-MATCH</h2>
      <p>PICK THE MATCHING CARD</p>
    </div>
    <div class="white">
      <h3>GAME OVER</h3>
      <div class="scolev">
        <div class="score">
          <p>SCORE</p>
          <div class="circle y">
            <p>20</p>
          </div>
        </div>
        <div class="level">
          <p>LEVEL</p>
          <div class="circle o">
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button>BACK</button>
      <button>EXIT</button>
    </div>
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

button {
  font-size: 15px;
  border: none;
  color: blue;
  border: solid 1px #00a9de;
  background-color: rgba(255, 255, 255, 0);
  display: inline-flex;
  font-size: 25px;
  text-align: center;
  font-weight: bolder;
  color: white;
  margin: 10px;
  padding: 5px;
}

.white {
  background-color: white;
  padding: 30px;

  h3 {
    font-size: 50px;
    margin-bottom: 30px;
  }

  .scolev {
    display: flex;
    justify-content: space-around;

    div > p {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    div > div {
      background-color: #e0e0e0;
      width: 100px;
      height: 100px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
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
