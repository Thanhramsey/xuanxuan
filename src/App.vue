<template>
  <div id="app">
    <v-app>
      <v-main id="home">
        <keep-alive>
          <router-view />
        </keep-alive>
        <Particles id="tsparticles" :options="snowConfig" />
		<nhac></nhac>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Particles from "particles.vue";
import nhac from "./main_component/nhac.vue";
// @ts-ignore
// import music from '../assets/music.mp3';
export default Vue.extend({
  name: "App",
  components: {
	  nhac
  },
  data() {
    return {
      snowConfig: {
        background: {
          color: "red",
        },
        particles: {
          color: {
            value: "random",
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: "out",
            speed: 2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 400,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: ["circle"],
          },
          size: {
            value: 10,
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: 10,
          },
          zIndex: {
            value: {
              min: 0,
              max: 100,
            },
          },
        },
      },
    };
  },
  methods: {
  }
});
</script>

<style lang="scss" scoped>
@import "./styles/bootstrap-grid.min.css";
@import "./app.scss";
#home {
  padding: 15px 0px !important;
  height: 100%;
  background-image: url("bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  overflow-y: hidden;
}
</style>
