<template>
  <div id="app">
	<v-main id="home">
	<keep-alive>
    	<router-view />
	</keep-alive>
	<Particles id="tsparticles" :options="snowConfig" />
  </v-main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Particles from "particles.vue";
export default Vue.extend({
  name: 'App',
  components: {
  },
  data () {
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
	}
  }
})
</script>

<style lang="scss" scoped>
@import './styles/bootstrap-grid.min.css';
@import './app.scss';
#home {
	padding: 20px 0px !important;
	height: inherit;
	background-image: url('bg.png');
	background-repeat: repeat
	;
  }
</style>
