<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col class="col-md-4">
      <v-btn icon color="indigo" v-on:click="play" class="mr-2">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn icon color="indigo" v-on:click="stop">
        <v-icon>mdi-stop</v-icon>
      </v-btn>
      <v-btn class="ml-2" icon color="indigo" v-on:click="next">
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>
      <audio autoplay ref="audioElm" id="playme" src="../assets/music.mp3">
	  </audio>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Particles from "particles.vue";

export default Vue.extend({
  name: "boi",
  components: {},
  data() {
    return {
		songArray:["music","music2","music3"]

	};
  },
  created(){
  },
  mounted(){
  },
  computed: {},
  methods: {
    play: function (e: any) {
      var a: any = this.$refs.audioElm;
      if (a.paused) {
        a.play();
      } else {
        a.pause();
      }
    },
	stop: function (e: any) {
      var a: any = this.$refs.audioElm;
       a.stop();
    },
	next: function (e: any) {
      var a: any = this.$refs.audioElm;
    },
  },
});
</script>

<style lang="scss">
@import "../styles/bootstrap-grid.min.css";
@import "../app.scss";
</style>