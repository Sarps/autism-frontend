<template>
  <div class="card" @click="clicked" :class="{ flipped: flipped }">
    <div class="inner">
      <div class="front">
        <img :src="front" />
      </div>
      <div class="back">
        <img :src="back" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    front: {
      type: String,
      required: true
    },
    back: {
      type: String,
      default: require("../assets/card.png")
    },
    id: {
      type: String | Number,
      required: true
    },
    flipped: {
      type: Boolean,
      default: false
    },
    canflip: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    clicked() {
      if (!this.canflip) return;
      this.flipped = !this.flipped;
      this.$emit("flipped", {
        state: this.flipped,
        id: this.id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  background-color: transparent;
  max-width: 100%;
  perspective: 1000px;

  .inner {
    transform-style: preserve-3d;
    transition: transform 2s;
    height: 100%;
  }

  &.flipped .inner {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .back {
    background-color: rgb(13, 180, 209);
  }

  .front {
    background: red;
    transform: rotateY(180deg);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
