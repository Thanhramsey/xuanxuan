<template>
  <div id="xoay" class="container">
	<v-row>
		<v-col md="3"></v-col>
		<v-col md="6">
		<v-btn @click="$router.push('/')" class="noi-len" style="z-index: 10 ; margin-bottom:20px">
			Trở về
		</v-btn>
		</v-col>
		<v-col md="3"></v-col>
	</v-row>
    <div class="row">
      <div class="col-md-12">
        Bói
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Particles from "particles.vue";

export default Vue.extend({
  name: "boi",
  components: {
  },
  data() {
    return {


    };
  },
  computed: {
  },
  methods: {
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/bootstrap-grid.min.css";
@import "../app.scss";
</style>
