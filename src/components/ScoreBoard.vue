<template>
  <div class="white">
    <p>SCORE</p>
    <div class="yellow">
      <p>{{ score }}</p>
    </div>
    <P>TIMER</P>
    <div class="greeno">
      <p>{{ timer }}</p>
    </div>
    <p class="l">LEVEL</p>
    <div class="orange">{{ level }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["score", "timer", "level"])
  }
};
</script>

<style lang="scss" scoped>
.white {
  position: absolute;
  height: 35vh;
  width: 90px;
  background-color: #fff;
  top: 20%;
  left: 30px;
  text-align: center;
  padding-top: 20px;
  overflow: hidden;

  & > p {
    font-size: 18px;
    margin-top: 20px;
    font-weight: bolder;

    &:first-child {
        margin-top: 0;
    }
  }

  & > div {
    height: 60px;
    width: 60px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 36px;
  }

  .yellow {
    background-color: yellow;
  }

  .greeno {
    background-color: rgb(0, 255, 76);
  }

  .orange {
    background-color: rgb(255, 123, 0);
  }
}
</style>
