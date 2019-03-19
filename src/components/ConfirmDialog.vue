<template>
  <div class="container" v-if="confirm_dialog">
    <div class="white">
      <h3>DO THEY MATCH</h3>
      <div class="scolev">
        <button class="modal-default-button" @click="dialogChoice(true)">
          Yes
        </button>
        <button class="modal-default-button" @click="dialogChoice(false)">
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["confirm_dialog"])
  },

  methods: {
    ...mapMutations(["dialogChoice"])
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
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
  color: blue;
  border: none;
  font-size: 25px;
  text-align: center;
  font-weight: bolder;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;

  &:first-child {
      background-color: #2CED24;
      color: black;
  }

  &:last-child {
      background-color: #FF0000;
      color: white;
  }
}

.white {
  background-color: white;
  padding: 30px;

  h3 {
    font-size: 30px;
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
