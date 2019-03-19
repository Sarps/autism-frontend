<template>
  <div class="main">
    <TitleBar />
    <ScoreBoard />
    <transition-group class="mainbox" tag="div" name="flip-list">
      <FlipCard
        v-on:flipped="flipped"
        :id="image"
        v-for="image in images"
        :key="image"
        :front="`./cards/${image}`"
        :flipped="flipped_image === image"
        :canflip="answerCanFlip"
      />
      <FlipCard
        v-on:flipped="flipped"
        id="question"
        :front="`./cards/${question_image}`"
        key="question"
        :canflip="questionCanFlip"
      />
    </transition-group>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar";
import ScoreBoard from "../components/ScoreBoard";
import FlipCard from "../components/FlipCard";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    TitleBar,
    ScoreBoard,
    FlipCard
  },

  data: () => ({
    question_flipped: false,
    question_image: "",
    flipped_image: ""
  }),

  computed: {
    questionCanFlip() {
      return !this.question_flipped;
    },

    answerCanFlip() {
      return this.question_flipped;
    },

    ...mapState(["images", "confirm_choice"])
  },

  mounted() {
    this.$store.dispatch("loadCards", 4);
    this.question_image = this.images[0];
    this.shuffleCards();
  },

  methods: {
    flipped(args) {
      if (args.id === "question") {
        this.question_flipped = true;
      } else {
        this.flipped_image = args.id;
        this.dialogVisibility(true);
      }
    },

    validateAndScore(value) {
      if ((this.flipped_image === this.question_image) === value) {
        this.incrementScore();
        this.flipped_image = null;
        this.shuffleCards();
      } else {
        this.flipped_image = null;
      }
      this.dialogChoice(null);
    },

    ...mapMutations([
      "shuffleCards",
      "loadCards",
      "dialogVisibility",
      "incrementScore",
      "dialogChoice"
    ])
  },

  watch: {
    confirm_choice(state) {
      if (state === null) return;
      this.validateAndScore(state);
    }
  }
};
</script>

<style lang="scss" scoped>
.mainbox {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
}

.card {
  &:first-child {
    grid-row: 1 / span 2;
    grid-column: span 2;
  }

  &:nth-child(2) {
    grid-row: 4 / span 2;
    grid-column: 1 / span 2;
  }

  &:nth-child(3) {
    grid-row: 1 / span 2;
    grid-column: 6 / span 2;
  }

  &:nth-child(4) {
    grid-row: 4 / span 2;
    grid-column: 6 / span 2;
  }

  &:last-child {
    grid-row: 2 / span 3;
    grid-column: 3 / span 3;
  }
}

.flip-list-move {
  transition: transform 2s;
}
</style>
