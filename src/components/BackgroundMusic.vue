<template>
    <audio :src="file" :loop="loop" :autoplay="autoplay" ref="audio"></audio>
</template>

<script>
export default {
    props: {
        loop: {
            type: Boolean,
            default: false
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        file: {
            type: String,
            required: true
        },
        playState: {
            type: String,
            default: "stop"
        }
    },

    beforeCreate(){
        this.audio = new Audio(this.file);
    },

    mounted() {
        if (this.playState === "play") {
            this.audio.play()
        }
    },

    data: () => ({

    }),

    watch: {
        playState(value) {
            switch(value) {
                case "play":
                this.$refs.audio.play()
                break;

                case "pause":
                this.$refs.audio.pause()
                break;

                case "stop":
                this.$refs.audio.stop()
                break;
            }
        }
    }
}
</script>

<style>

</style>
