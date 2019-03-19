<template>
  <div class="main">
    <TitleBar />
    <ScoreBoard />
    <div class="mainbox">
      <FlipCard
        v-for="image in images"
        :key="image"
        :front="`./${image}`"
        :flipped="flipped_image === image"
        :canflip="answerCanFlip"
      />
      <FlipCard
        v-for="image in images"
        :key="image"
        :front="`./${image}`"
        :flipped="flipped_image === image"
        :canflip="answerCanFlip"
      />
      <FlipCard
        v-on:flipped="flipped"
        id="question"
        :front="`./${question_image}`"
        key="question"
        :canflip="answerCanFlip"
      />
      <FlipCard
        v-on:flipped="flipped"
        id="question"
        :front="`./${question_image}`"
        key="question"
        :canflip="questionCanFlip"
      />
    </div>
  </div>
</template>

<script>
import ScoreBoard from "../components/ScoreBoard";
import TitleBar from "../components/TitleBar";
import FlipCard from "../components/FlipCard";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    ScoreBoard,
    TitleBar,
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
  }
};
</script>

<style lang="scss" scoped>
.mainbox {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

.card {
  @for $i from 1 through 3 {
    @for $j from 1 through 3 {
      &:nth-child(#{$j + $i*3-3}) {
        grid-row: #{$j * 2-1}/ span 2;
        grid-column: #{$i * 2-1}/ span 2;
      }
    }
  }

  &:last-child {
    grid-row: 2 / span 4 !important;
    grid-column: 7 / span 4 !important;
  }
}
</style>
